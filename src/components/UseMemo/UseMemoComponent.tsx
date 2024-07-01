import React from "react";
import { useState, useMemo, useCallback } from "react";
import TodoList from "./TodoList";

export const longCalculation = (num: number): number => {
  console.log("Calculating...");
  for (let i = 0; i < 1000000000; i++) {
    num += 1;
  }

  return num;
};

interface UseMemoComponentProps {
  data: number;
}

const UseMemoComponent: React.FC<UseMemoComponentProps> = ({ data }) => {
  const [todos, setTodos] = useState<string[]>(["Todo 0"]);

  const calculatedValue = useMemo(() => longCalculation(data), [data]);

  // const addTodo = () => setTodos((t) => [...t, "New Todo"]);
  const addTodo = useCallback(
    () => setTodos((t) => [...t, "New Todo"]),
    [todos]
  );
  const removeTodo = useCallback((index: number) => {
    setTodos((t) => t.filter((_, i) => i !== index));
  }, []);

  return (
    <div>
      <TodoList todos={todos} addTodo={addTodo} removeTodo={removeTodo} />

      <hr />
      <p>Calculated Value: {calculatedValue}</p>
      <p>Data: {data}</p>
    </div>
  );
};

export default UseMemoComponent;
