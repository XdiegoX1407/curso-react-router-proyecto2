import React from "react";
import { useTodos } from "../useTodos";
import { TodoHeader } from "../../components/TodoHeader";
import { TodoCounter } from "../../components/TodoCounter";
import { TodoSearch } from "../../components/TodoSearch";
import { TodoList } from "../../components/TodoList";
import { TodoItem } from "../../components/TodoItem";
import { TodosError } from "../../components/TodosError";
import { TodosLoading } from "../../components/TodosLoading";
import { EmptyTodos } from "../../components/EmptyTodos";
//import { TodoForm } from "../../components/TodoForm";
import { CreateTodoButton } from "../../components/CreateTodoButton";
//import { Modal } from "../../components/Modal";
import { ChangeAlert } from "../../components/ChangeAlert";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();
  const { state, stateUpdaters } = useTodos();

  const {
    error,
    loading,
    totalTodos,
    searchedTodos,
    completedTodos,
    //openModal,
    searchValue,
  } = state;

  const {
    //setOpenModal,
    //addTodo,
    completeTodo,
    deleteTodo,
    setSearchValue,
    sincronizeTodos,
  } = stateUpdaters;

  return (
    <React.Fragment>
      <TodoHeader loading={loading}>
        <TodoCounter totalTodos={totalTodos} completedTodos={completedTodos} />
        <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      </TodoHeader>

      <TodoList
        error={error}
        loading={loading}
        totalTodos={totalTodos}
        searchedTodos={searchedTodos}
        searchText={searchValue}
        onError={() => <TodosError />}
        onLoading={() => <TodosLoading />}
        onEmptyTodos={() => <EmptyTodos />}
        onEmptySearchResults={(searchText) => (
          <p>No hay resultados para {searchText}</p>
        )}
      >
        {(todo) => (
          <TodoItem
            key={todo.id}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.id)}
            onEdit={() => {
              navigate(
                '/edit/' + todo.id,
                {
                  state: { todo }
                },
              );
            }}

            onDelete={() => deleteTodo(todo.id)}
          />
        )}
      </TodoList>

      {/* {!!openModal && (
        <Modal>
          <TodoForm addTodo={addTodo} setOpenModal={setOpenModal} />
        </Modal>
      )} */}

      <CreateTodoButton
        onClick={() => navigate("/new")} 
        //setOpenModal={setOpenModal} 
      />

      <ChangeAlert sincronize={sincronizeTodos} />
    </React.Fragment>
  );
}

export { HomePage };
