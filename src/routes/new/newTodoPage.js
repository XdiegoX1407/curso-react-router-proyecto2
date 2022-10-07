import React from 'react'
import { TodoForm } from "../../components/TodoForm";
import { useTodos } from '../useTodos';

const NewTodoPage = () => {
  const { stateUpdaters } = useTodos();
  const { addTodo } = stateUpdaters;
  return (
    <>
      <TodoForm
        label="Escribe tu nuevo TODO"
        submitText="Añadir"
        submitEvent={(text) => addTodo(text)}
      />
    </>
  )
}

export { NewTodoPage }