import { useContext } from "react";
import { TodoContext } from "../Context/TodoContext";

const DisplayList = () => {
   // destructure todo array from TodoContext so we can have access to the values and display them
   const { todo } = useContext(TodoContext);
   return (
      <div>
         {todo.map((item) => (
            <p key={item.id}>{item.item}</p>
         ))}
      </div>
   );
};

export default DisplayList;
