import '../css/common.css';

const refs = {
  startBtn: document.querySelector('button[data-action-start]'),
  stopBtn: document.querySelector('button[data-action-stop]'),
  clockface: document.querySelector('.js-clockface'),
};

class Secoundomir {
  initTime = 0;
  isActive = false;
  intervalId = null;
  time = 0;
  onTick;

  constructor({ onTick }) {
    this.initTime = Date.now();
    this.onTick = onTick;
  }

  start() {
    if (this.isActive) return;

    this.initTime += this.time;

    this.intervalId = setInterval(() => {
      const currentTime = Date.now();
      this.time = currentTime - this.initTime;

      this.onTick(this.getTimeComponents(this.time));
    }, 1000);

    this.isActive = true;
  }

  stop() {
    clearInterval(this.intervalId);
    this.isActive = false;
  }

  getTimeComponents(time) {
    const hours = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    );
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

    return { hours, mins, secs };
  }

  pad(value) {
    return String(value).padStart(2, '0');
  }
}

const timer = new Secoundomir({
  onTick: updateClockface,
});

refs.startBtn.addEventListener('click', timer.start.bind(timer));
refs.stopBtn.addEventListener('click', timer.stop.bind(timer));

function updateClockface({ hours, mins, secs }) {
  refs.clockface.textContent = `${hours}:${mins}:${secs}`;
}
