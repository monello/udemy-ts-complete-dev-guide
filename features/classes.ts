class Vehicle {
  private drive(): void {
    console.log('chugga chugga');
  }

  startDrivingProcess(): void {
    this.drive();
  }

  honk(): void {
    console.log('beep');
  }
}

class MotorCar extends Vehicle {
  // had to remove this method - I don't think you can override private methods - will probably see in the next lesson
  // private drive(): void {
  //   console.log('vroom');
  // }
}

const motorcar = new MotorCar();
// motorcar.drive()                 // <<=== this is not possible anymore as drive was now set to private
motorcar.startDrivingProcess();     // <<=== this is a function on the same class amd inherited by the child-class therefor it has access to call drive()
motorcar.honk();
