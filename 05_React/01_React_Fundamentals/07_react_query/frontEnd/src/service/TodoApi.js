import axios from 'axios';

const fetchTodo = async () => {
    const result = await axios.get('api/todo/');
    return result.data;
};

const addNewTodo = async (NewTodoItem) => {
    const response = await axios.post("api/createtodo", NewTodoItem);
    return response;
};

const apiDeleteTodo = async (id) => {
    await axios.delete(`api/todos/${id}`);
};
export {fetchTodo,addNewTodo,apiDeleteTodo}