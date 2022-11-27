import axios from "axios";

// get all the users
axios.get('http://localhost:3000/users');

// get a specific user (with id = 1)
axios.get('http://localhost:3000/users/1');
