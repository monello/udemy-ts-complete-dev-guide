import { User } from "./models/User";

const user = new User({ name: 'Morne', age: 48 });

user.on('change', () => { });
user.on('change', () => { });
user.on('foobar', () => { });

console.log(user);

