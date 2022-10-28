import axios from "axios";

const url = 'https://jsonplaceholder.typicode.com/todos/1';

interface ToDo {
    id: number;
    title: string;
    completed: boolean;
}

axios.get(url).then(response => {
    // const todo: ToDo = response.data;
    const todo = response.data as ToDo;

    const id = todo.id;
    const title = todo.title;
    const completed = todo.completed;

    logTodo(id, title, completed);
});


const logTodo = (id: number, title: string, completed: boolean): void => {
    console.log(`
        ID: ${id}
        Title: ${title}
        Completed: ${completed}
    `);
};
