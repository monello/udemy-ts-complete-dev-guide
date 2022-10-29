interface Vehicle {
  name: string;
  year: Date;
  broken: boolean;
  // anonymous function
  summary(): string;
  // arrow function
  stats: () => string;
}

const oldCivic = {
  name: 'civic',
  year: new Date('2000-01-01'),
  broken: true,
  // anonymous function
  summary(): string {
    return `
    Name: ${this.name}
    Year: ${this.year.getFullYear()}
    `;
  },
  // arrow function
  stats: (): string => {
    return `
    Power: 400 HP
    Weight: 2000 kg
    `;
  }
};

const printVehicle = (vehicle: Vehicle): void => {
  console.log(`Name: ${vehicle.name}`);
  console.log(`Year: ${vehicle.year.getFullYear()}`);
  console.log(`Broken: ${vehicle.broken}`);
};

printVehicle(oldCivic);

console.log(oldCivic.summary());
console.log(oldCivic.stats());

