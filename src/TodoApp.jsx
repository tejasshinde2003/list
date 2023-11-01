 
import React, { useState } from 'react';

function TodoApp() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [priority, setPriority] = useState('Medium');  
  const [dueDate, setDueDate] = useState('');  
  const [category, setCategory] = useState('');  

  const addTask = () => {
    if (newTask.trim() !== '') {
      const task = {
        text: newTask,
        priority,
        dueDate,
        category,
        completed: false,  
      };
      setTasks([...tasks, task]);
      setNewTask('');
      setPriority('Medium');
      setDueDate('');
      setCategory('');
    }
  };

  const sortByPriority = () => {
    const sortedTasks = [...tasks].sort((a, b) => {
      const priorityOrder = { Low: 1, Medium: 2, High: 3 };
      return priorityOrder[a.priority] - priorityOrder[b.priority];
    });
    setTasks(sortedTasks);
  };

  const sortByDueDate = () => {
    const sortedTasks = [...tasks].sort((a, b) => {
      return new Date(a.dueDate) - new Date(b.dueDate);
    });
    setTasks(sortedTasks);
  };
 

  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>
      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />
      <input
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <button onClick={addTask}>Add Task</button>
   

       
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task.text}
            {/* <div>Priority: {task.priority}</div> */}
            <div>Due Date: {task.dueDate}</div>
            <div>Category: {task.category}</div>
            {/* <button onClick={() => toggleSelect(index)}>
              {task.completed ? 'Deselect' : 'Select'}
            </button> */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;






