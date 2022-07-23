import React from "react";

interface TodoListProps {
  items: Array<{ id: string; text: string }>;
}

// whatever written inside the angled brackets is representing the type for the props
const TodoList: React.FC<TodoListProps> = ({ items }) => {
  return (
    <ul>
      {items.map((item) => {
        return <li key={item.id}>{item.text}</li>;
      })}
    </ul>
  );
};

export default TodoList;