// Note: an interface does NOT have to include ALL the properties an object can have.
// It only describes the properties required for an object to be of this type.
// So the oldCivic object below contains a lot more that just the summary function, but accoring to TypeScript
//    for this object to be of type Reportable, the only question TS will ask is:
//    "Does it have a property called summary, that is a function which returns a string", if yes...
//    then it is a valid Reportable type, regardless of what other properties it contains
// This is really cool, because it means that out interfaces can by much more concise, and only
//    focus on the important parts that the Type needs
interface Reportable {
  summary(): string;
}

const oldCivic = {
  name: 'civic',
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name: ${this.name}`;
  },
};

const printSummary = (item: Reportable): void => {
  console.log(item.summary());
};

printSummary(oldCivic);
