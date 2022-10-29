class Vehicle {
  // shorthand way to declare and initialize fields
  constructor(public color: string) { }

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
