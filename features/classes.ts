class Vehicle {
  protected honk(): void {
    console.log('beep');
  }
}

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
