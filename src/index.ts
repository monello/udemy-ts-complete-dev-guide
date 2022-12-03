import { User } from "./models/User";

// if we create a new user object, by passing in an `id` it means
//   we are working with a user that already exists (already has an id means iy exists on our DB)
const user = new User({ id: 1 });

user.fetch();
