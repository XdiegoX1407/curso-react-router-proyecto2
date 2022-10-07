import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { HomePage } from "./home/HomePage";
import { NewTodoPage } from "./new/newTodoPage";
import { EditTodoPage } from "./edit/EditTodoPage";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/new" element={<NewTodoPage />} />
        <Route path="/edit/:id" element={<EditTodoPage />} />
        <Route path="*" element={<h2>No se ha encontrado la ruta</h2>} />
      </Routes>
    </HashRouter>
  );
}

export { App };
