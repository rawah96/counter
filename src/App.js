import React from 'react';
import './App.css';
import Todo from './components/Todo/Todo'
import DayNumber from './components/DayNumber/DayNumber'

function App() {
  return (
    <div className="App">
      <DayNumber />
      {/* <Todo /> */}
    </div>
  );
}

export default App;
