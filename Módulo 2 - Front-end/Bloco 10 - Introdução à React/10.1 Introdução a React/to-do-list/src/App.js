import React from 'react';
import './App.css';

const tasks = ['teste', '+teste', 'Outro Teste', 'Chega de teste'];

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

function App() {
  return (
    <ul>
    { tasks.map((task) => Task(task)) }
    </ul>
  );
}

export default App;
