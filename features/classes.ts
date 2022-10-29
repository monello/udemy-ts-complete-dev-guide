class Vehicle {
  honk(): void {
    console.log('beep');
  }
}

class MotorCar extends Vehicle {
  private drive(): void {
    console.log('Vroom');
  }

  startDrivingProcess(): void {
    this.drive();
  }
}

const motorcar = new MotorCar();
// motorcar.drive()                 // <<=== this is not possible anymore as drive was now set to private
motorcar.startDrivingProcess();     // <<=== this is a function on the same class amd inherited by the child-class therefor it has access to call drive()
motorcar.honk();
