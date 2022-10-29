class Vehicle {
  // The constructor is a special function
  // It gets called once, as soons as the class is instantiated
  // It received any parameters that is passed to the class
  constructor(color: string) {
    this.color = color;
  }

  // ... and now you don't have to intiialize the field/property here anymore.
  // you can if you want, but seeing as it is now initialized inside the constructor it doesn't have to be done here anynmore
  color: string;

  protected honk(): void {
    console.log('beep');
  }
}


const vehicle = new Vehicle('Orange');
console.log(vehicle.color);


class MotorCar extends Vehicle {
  private drive(): void {
    console.log('vroom');
  }

  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const motorcar = new MotorCar('Blue');
motorcar.startDrivingProcess();
