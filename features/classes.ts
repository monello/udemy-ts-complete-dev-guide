class Vehicle {
  drive(): void {
    console.log('chugga chugga');
  }

  honk(): void {
    console.log('beep');
  }
}

class MotorCar extends Vehicle {
  drive(): void {
    console.log('vroom');
  }
}

const motorcar = new MotorCar();
motorcar.drive();
motorcar.honk();
