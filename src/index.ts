import { User } from "./models/User";

const user = new User({ name: 'Morne', age: 48 });

user.on('change', () => {
    console.log("change event #1 was triggered");
});
user.on('change', () => {
    console.log("change event #2 was triggered");
});
user.on('foobar', () => {
    console.log("foobar event #1 was triggered");
});

user.trigger('change');
user.trigger('foobar');
user.trigger('someNonExistentEventName');
