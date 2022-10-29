const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40
};

// Type alias
type Drink = [string, boolean, number];

const pepsi: Drink = ['brown', true, 40];
const sprite: Drink = ['clear', true, 40];
const tea: Drink = ['brown', false, 0];

// this is an example of why tuples might not be very useful
// - the values give us very little in the line of describing what they mean (unlike the object below that uses property names)
// - in this specific case, if you where to accidentally swop horse-power and weight inside the tuple you will get no TS warning.
//    you can argue that the same applies to the object below, but with the more descriptive property names at least we get a better
//    idea that something is probably wrong if they are swopped
const carSpecs: [number, number] = [400, 3354];

const carStats = {
  horsepower: 400,
  weight: 3354
};
