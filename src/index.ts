import { User } from "./models/User";

const user = new User({ name: 'Morne', age: 48 });
console.log(`Name: ${user.get('name')}
Age: ${user.get('age')}`);

user.set({ name: 'Morne Riaan', age: 21 });
console.log(`Name: ${user.get('name')}
Age: ${user.get('age')}`);
