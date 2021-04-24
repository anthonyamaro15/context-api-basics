import { useContext, useState } from "react";
import { TodoContext } from "../Context/TodoContext";

const FormTodo = () => {
   const [todoValue, setTodoValue] = useState("");

   // desctructure addTodo function to update the state value
   const { addTodo } = useContext(TodoContext);

   const onSubmit = (e: any) => {
      e.preventDefault();
      addTodo({ item: todoValue, id: Date.now().toLocaleString() });
      setTodoValue("");
   };
   return (
      <form onSubmit={onSubmit}>
         <label htmlFor="addTodo">
            <input
               type="text"
               id="addTodo"
               name="addTodo"
               placeholder="Enter new Todo"
               value={todoValue}
               onChange={(e) => setTodoValue(e.target.value)}
            />
         </label>
         <button type="submit">Add Todo</button>
      </form>
   );
};

export default FormTodo;
