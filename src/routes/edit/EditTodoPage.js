import React from "react";
import { useLocation, useParams } from "react-router-dom";
import { TodoForm } from "../../components/TodoForm";
import { useTodos } from "../useTodos";

const EditTodoPage = () => {
  const location = useLocation();
  const params = useParams();
  const id = Number(params.id);
  const { state, stateUpdaters } = useTodos();
  const { loading } = state;
  const { getTodo, editTodo } = stateUpdaters;
  let todoText;

  if (location.state?.todo) {
    todoText = location.state.todo.text;
  } else if (loading) {
    return <p>Cargando...</p>;
  } else {
    const todo = getTodo(id);
    todoText = todo.text
  }
  return (
    <>
      <TodoForm
        label="Edita tu TODO"
        defaultText={todoText}
        submitText="Editar"
        submitEvent={(newText) => editTodo(id, newText)}
      />
    </>
  );
};

export { EditTodoPage };
