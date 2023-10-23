import '../css/common.css';

const refs = {
  startBtn: document.querySelector('button[data-action-start]'),
  stopBtn: document.querySelector('button[data-action-stop]'),
  clockface: document.querySelector('.js-clockface'),
};

class Clockface {
  initTime;
  intervalId;
  isActive = false;

  constructor(render) {
    this.render = render;
  }
  start() {
    if (this.isActive) return;
    this.isActive = true;
    this.initTime = Date.now();
    console.log('start');
    this.intervalId = setInterval(() => {
      const currentTime = Date.now();
      const diff = currentTime - this.initTime;
      const time = convertMsToTime(diff);
      this.render(time);
    }, 1000);
  }
  stop() {
    if (!this.isActive) return;
    console.log('stop');
    this.isActive = false;
    clearInterval(this.intervalId);
  }
}

const clockface = new Clockface(render);

refs.startBtn.addEventListener('click', () => {
  clockface.start();
});

refs.stopBtn.addEventListener('click', () => {
  clockface.stop();
});

function render(time) {
  refs.clockface.textContent = time;
}

function convertMsToTime(milliseconds) {
  let seconds = Math.floor(milliseconds / 1000);
  let minutes = Math.floor(seconds / 60);
  let hours = Math.floor(minutes / 60);

  seconds = seconds % 60;
  minutes = minutes % 60;
  hours = hours % 24;

  return `${padTo2Digits(hours)}:${padTo2Digits(minutes)}:${padTo2Digits(
    seconds,
  )}`;
}

function padTo2Digits(num) {
  return num.toString().padStart(2, '0');
}
