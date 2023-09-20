// class Vehicle {
//     // Тіло класу
//   }
  
//   const vehicle = new Vehicle();
//   console.log(vehicle); // {}
  


// class Vehicle {
//     constructor(brand, model, color, maxSpeed) {
//         // Ініціалізація властивостей екземпляра
//         this.brand = brand;
//         this.model = model;
//         this.color = color;
//         this.maxSpeed = maxSpeed;
//       }
//   }
  
//   const vehicle1 = new Vehicle("Toyota", "C-HR", 'black', 180);
//   console.log(vehicle1); 
//   const vehicle2 = new Vehicle("Nissan", "Primera", 'grey', 160);
// //   console.log(vehicle2); 
//   console.log(vehicle2.color)



// class Vehicle {
//     constructor({brand, model, color, maxSpeed}) {
//         // Ініціалізація властивостей екземпляра
//         this.brand = brand;
//         this.model = model;
//         this.color = color;
//         this.maxSpeed = maxSpeed;
//       }
//   }
  
//   const vehicle1 = new Vehicle({brand: "Toyota", model: "C-HR", color: 'black', maxSpeed: 180});
//   console.log(vehicle1); 
 


// class Vehicle {
//     constructor({brand, model, color, maxSpeed, mileage}) {
//         // Ініціалізація властивостей екземпляра
//         this.brand = brand;
//         this.model = model;
//         this.color = color;
//         this.maxSpeed = maxSpeed;
//         this.mileage = mileage
//       }

//       incrementMileage(distance) {
//         this.mileage += distance;
//       }
//   }
  
//   const vehicle1 = new Vehicle({brand: "Toyota", model: "C-HR", color: 'black', maxSpeed: 180, mileage: 10000});
//   console.log(vehicle1); 
//   vehicle1.incrementMileage(500)
//   console.log(vehicle1.mileage)





// class Vehicle {

//     #owner

//     constructor({brand, model, color, maxSpeed, mileage, owner}) {
//         // Ініціалізація властивостей екземпляра
//         this.brand = brand;
//         this.model = model;
//         this.color = color;
//         this.maxSpeed = maxSpeed;
//         this.mileage = mileage;
//         this.#owner = owner
    
//       }

//       incrementMileage(distance) {
//         this.mileage += distance;
//       }

//       getOwner() {
//         return this.#owner;
//       }
    
//       changeOwner(newOwner) {
//         this.#owner = newOwner;
//       }
//   }
  
//   const vehicle1 = new Vehicle({brand: "Toyota", model: "C-HR", color: 'black', maxSpeed: 180, mileage: 10000, owner: 'Petrenko'});
//   console.log(vehicle1); 
//   console.log(vehicle1.getOwner())
//   vehicle1.changeOwner('Ivanenko')
//   console.log(vehicle1.getOwner())




// class Vehicle {

//     #owner

//     constructor({brand, model, color, maxSpeed, mileage, owner}) {
//         // Ініціалізація властивостей екземпляра
//         this.brand = brand;
//         this.model = model;
//         this.color = color;
//         this.maxSpeed = maxSpeed;
//         this.mileage = mileage;
//         this.#owner = owner
    
//       }

//       incrementMileage(distance) {
//         this.mileage += distance;
//       }

//       get owner() {
//         return this.#owner;
//       }
    
//       set owner(newOwner) {
//         this.#owner = newOwner;
//       }
//   }
  
//   const vehicle1 = new Vehicle({brand: "Toyota", model: "C-HR", color: 'black', maxSpeed: 180, mileage: 10000, owner: 'Petrenko'});
//   console.log(vehicle1); 
//   console.log(vehicle1.owner)
//   vehicle1.owner = 'Ivanenko'
//   console.log(vehicle1.owner)



// class Vehicle {

//     static MAX_MILIAGE = 100000;

//     static notifyAboutCheckUp() {
//         console.log('Your car needs a technical inspection')
//       }

//     #owner

//     constructor({brand, model, color, maxSpeed, mileage, owner}) {
//         // Ініціалізація властивостей екземпляра
//         this.brand = brand;
//         this.model = model;
//         this.color = color;
//         this.maxSpeed = maxSpeed;
//         this.mileage = mileage;
//         this.#owner = owner
    
//       }

//       incrementMileage(distance) {
//         this.mileage += distance;
//         if(this.mileage >= Vehicle.MAX_MILIAGE) {
//             Vehicle.notifyAboutCheckUp()
//         }
//       }

//       get owner() {
//         return this.#owner;
//       }
    
//       set owner(newOwner) {
//         this.#owner = newOwner;
//       }
//   }
  
//   const vehicle1 = new Vehicle({brand: "Toyota", model: "C-HR", color: 'black', maxSpeed: 180, mileage: 10000, owner: 'Petrenko'});
//   console.log(vehicle1); 
//   vehicle1.incrementMileage(100000)







class Vehicle {

    static MAX_MILIAGE = 100000;

    static notifyAboutCheckUp() {
        console.log('Your car needs a technical inspection')
      }

    #owner

    constructor({brand, model, color, maxSpeed, mileage, owner}) {
        // Ініціалізація властивостей екземпляра
        this.brand = brand;
        this.model = model;
        this.color = color;
        this.maxSpeed = maxSpeed;
        this.mileage = mileage;
        this.#owner = owner
    
      }

      incrementMileage(distance) {
        this.mileage += distance;
        if(this.mileage >= Vehicle.MAX_MILIAGE) {
            Vehicle.notifyAboutCheckUp()
        }
      }

      get owner() {
        return this.#owner;
      }
    
      set owner(newOwner) {
        this.#owner = newOwner;
      }
  }
  
  class Bus extends Vehicle {
    constructor({brand, model, color, maxSpeed, mileage, owner, seats, destination, driver}) {
      // Виклик конструктора батьківського класу User
      super({brand, model, color, maxSpeed, mileage, owner});
      this.seats = seats;
      this.destination = destination;
      this.driver = driver

    }

    changeDriver(driver) {
        this.driver = driver;
      }
  }
  
  const bus = new Bus({color: 'red',brand: "bus", model: "bus",  maxSpeed: 120, mileage: 20000, owner: 'Petrenko', seats: 32, destination: 'Lviv', driver: 'Zubko'} );
  console.log(bus); 
  console.log(bus.color);
  console.log(bus.driver) 
  bus.changeDriver('Zolotov')
  console.log(bus.driver) 
  console.log(Bus.MAX_MILIAGE) 