import AddTodo from "./add-todo/add-todo";
import TodoData from "./todo-data/todo-data";
import "./todo.css";
import Todos from "./todos/todos";

const Todo = () => {

  return (
    <>
      <TodoData />
      <AddTodo />
      <Todos />
    </>
  );
};


export default Todo;