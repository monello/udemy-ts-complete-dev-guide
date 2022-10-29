class Vehicle {
  color: string = 'red';

  protected honk(): void {
    console.log('beep');
  }
}


const vehicle = new Vehicle();
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

const motorcar = new MotorCar();
motorcar.startDrivingProcess();
