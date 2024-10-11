import React from 'react';
import ToDoList from './components/ToDoList';
import ToDoForm from './components/ToDoForm';

export default function App() {
  return (
    <main>
      <ToDoList />
      <ToDoForm />
    </main>
  );
}