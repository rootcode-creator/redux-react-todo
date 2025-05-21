import { useSelector } from "react-redux";
import AddForm from "./AddForm";
import { deleteTodo } from "../features/todo/todoSlice";
import { markAsDone } from "../features/todo/todoSlice";

import { useDispatch } from "react-redux";

export default function Todo() {
  const todos = useSelector((state) => state.todos);
  console.log(todos);
  const dispatch = useDispatch();

  const clickHandler = (id) => {
    console.log("deleted", id);

    dispatch(deleteTodo(id));
  };

   const clickDone = (id) => {
    console.log("Completed", id);

    dispatch(markAsDone(id));
  };

  return (
    <>
      <h2>Todo List App</h2>
      <AddForm />
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}  style={todo.isDone ? {textDecorationLine:"line-through", textDecorationColor: "blue" } : {} }>
            {todo.task}
            <button onClick={() => clickHandler(todo.id)}>Delete</button>
            <button onClick={() => clickDone(todo.id)}>Done</button>

            
          </li>
        ))}
      </ul>
    </>
  );
}
