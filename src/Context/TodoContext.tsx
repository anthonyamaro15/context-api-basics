import { createContext, useState } from "react";

interface Todo {
   item: string;
   id: string;
}

interface ContextProps {
   todo: Todo[];
   addTodo: (obj: Todo) => void;
   removeTodo: (obj: Todo) => void;
}

const initialState = {
   todo: [],
   addTodo: (obj: Todo) => {},
   removeTodo: (obj: Todo) => {},
};

// Create Context with inital state
export const TodoContext = createContext<ContextProps>(initialState);

// Define the provider
// children is just the components you call inside  AddTodoProvider component
export const AddTodoProvider = ({ children }: any) => {
   const [todo, setTodo] = useState<Todo[]>([]);

   const addTodo = (obj: Todo) => {
      setTodo([...todo, obj]);
   };

   const removeTodo = (obj: Todo) => {
      const filteredTodo = todo.filter((item) => item.id !== obj.id);
      setTodo(filteredTodo);
   };

   // return TodoContext.Provider with the values you want to access in the children components
   return (
      <TodoContext.Provider value={{ addTodo, todo, removeTodo }}>
         {children}
      </TodoContext.Provider>
   );
};
