class Vehicle {
  constructor(public color: string) { }

  protected honk(): void {
    console.log('beep');
  }
}

const vehicle = new Vehicle('Orange');
console.log(vehicle.color);


class MotorCar extends Vehicle {
  // if we provide a constructor function in a child class, then we must call the super() method insise this constructor
  // - this calles the contructor function of the super-class (Parent Class)
  // - the constructor of the super-class takes a color parameter, this menas out super() call must adgere to that signature and pass in a caolot as a string
  // - but we don't want to hard-code a color, we want to use the valus that we pass in (see line 33 below) when we instantiate a Motorcar class
  // - to do this, our MotorCar constructor therefore must accept a color param. but this time we don't provide a modifier (public, private, protected),
  //    because we don't want to create a new property of color on this child-class, we simpley want to pass it along the the super-class's constructor vir super()
  constructor(public wheels: number, color: string) {
    super(color);
  }

  private drive(): void {
    console.log('vroom');
  }

  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

// The Motorcar class takes 2 params
// - wheels that is only applcable to the MotorCar (child-class)
// - color that is required (inhereted from) the super-class (PArent Class)
const motorcar = new MotorCar(4, 'Blue');
motorcar.startDrivingProcess();
console.log(motorcar.color);
