class Vehicle {
  public drive(): void {
    console.log('chugga chugga');
  }

  public honk(): void {
    console.log('beep');
  }
}

class MotorCar extends Vehicle {
  public drive(): void {
    console.log('vroom');
  }
}

const motorcar = new MotorCar();
motorcar.drive();
motorcar.honk();
