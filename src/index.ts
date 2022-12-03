import { User } from "./models/User";

// Update and existing user (user with id: 2)
const tommy = new User({ id: 2 });
tommy.set({
    name: 'Tommy',
    age: 20
});
tommy.save();

// Create a new user (No id property yet)
const tina = new User({
    name: 'Tina',
    age: 18
});
tina.save();

