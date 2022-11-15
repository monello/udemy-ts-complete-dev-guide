import { User } from "./models/User";

const user = new User({ name: 'Morne', age: 48 });
console.log(`Name: ${user.get('name')}
Age: ${user.get('age')}`);
