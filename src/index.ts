import axios from "axios";

// update a user by `id`
axios.put('http://localhost:3000/users/2', {
    name: 'john',
    age: 55
});

