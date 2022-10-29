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

// The important thing to note here is that this bevarage object has a property called "summary", which is
//    a function that returns a string.
// This means it satisfies the criteria of the Reportable interface.
// This is very cool, because this means that we can now apply the same interface to various, very-different objects
//  (objects that describe very different things), but seeing as they both satisfy the Reportable interface, that are
//  indee both reportable - we can call the summary function on them (see the last 2 lines of code below)
const beverage = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `My drink has ${this.sugar} grams of sugar`;
  }
};


// The learning point for this lesson in the course was that by keeping our interfaces generic in it's shape and naming
//    conventions, it can force (support) developers to write more generic and re-usable code:
// - both the oldCivic and the bevarage objects have a summary function that returns a string, which in turn means
// - we can now write a single re-usable funcion like "printSummary" (below), that can be used on ANY objecy that
//    is of type Reportable.
// Meaning it avoids situations where oldCivic has a summary() function and beverage has a nutrients() function
//    which do the exact same thing: returns a string that summarizes the object
const printSummary = (item: Reportable): void => {
  console.log(item.summary());
};

printSummary(oldCivic);
printSummary(beverage);
