import React, { useState } from 'react';
import './App.css';

function App() {
  const [task, setTask] = useState('');
  const [taskList, setTaskList] = useState([]);

  const handleInputChange = (event) => {
    setTask(event.target.value);
  };

  const addTask = () => {
    if (task.trim() !== '') {
      setTaskList([...taskList, task]);
      setTask('');
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      addTask();
    }
  };

  const removeTask = (index) => {
    const updatedTaskList = [...taskList];
    updatedTaskList.splice(index, 1);
    setTaskList(updatedTaskList);
  };

  return (
    <div className="container">
      <h1>To-Do List</h1>
      <input
        type="text"
        value={task}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
        placeholder="Add new task..."
      />
      <button onClick={addTask}>Add</button>
      <ul>
        {taskList.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => removeTask(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
