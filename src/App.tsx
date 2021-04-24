import DisplayList from "./components/DisplayList";
import FormTodo from "./components/FormTodo";
import { AddTodoProvider } from "./Context/TodoContext";

function App() {
   // We can either wrap the components here or in the index.tsx file to wrap everthing
   return (
      <div className="App">
         <AddTodoProvider>
            <FormTodo />
            <DisplayList />
         </AddTodoProvider>
      </div>
   );
}

export default App;
