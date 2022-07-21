import React from "react";
import TodoList from "./components/TodoList";

const App: React.FC = () => {
  const todos = [{ id: "t1", text: "Finish the course" }];
  
  return (
    <>
      <TodoList items={todos}/>
    </>
  );
};

// FC is FunctionComponent -> Write React.FC when the function is a type of Function Component | A function component returns JSX
// It's pretty helpful when you have to conditional rendering but might miss a return statement somewhere.

export default App;
