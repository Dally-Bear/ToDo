import React from 'react';
import ToDoList from "../components/ToDoList";
import ToDoForm from "../components/ToDoForm";
import { useState } from 'react';

export default function App() {

  const [tasks, setTasks] = useState([
    'Do laundry',
    'Go to gym',
    'Walk dog'
  ]);
  return (
    <main>
      <ToDoList tasks={tasks} />
      <ToDoForm />
    </main>
  );
}