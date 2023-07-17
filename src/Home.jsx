import React, { useEffect, useState } from 'react';
import "./Home.css";
import Task from './Task';

function Home() {

  //get initial tasks from the local storage of the browser
  const initialTasks = localStorage.getItem("tasks")
    ? JSON.parse(localStorage.getItem("tasks"))
    : [];
  
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tasks, setTasks] = useState(initialTasks);
  
  const submitHandler = (event) => {
    event.preventDefault();
    setTasks([...tasks, { title, description }]);
    setTitle("");
    setDescription("");
  }

  const deleteTask = (index) => {
    const filteredArr = tasks.filter((item, i) => {
      return i !== index;
    });
    setTasks(filteredArr);
  }

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className="container">
      <h1>Daily Tasks</h1>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          name="title"
          placeholder='Title'
          value={title}
          onChange={ (e) => setTitle(e.target.value) }
        />
        <textarea
          name="description"
          id="" cols="30"
          rows="5"
          placeholder='Description'
          value={description}
          onChange={ (e) => setDescription(e.target.value) }
        ></textarea>
        <button type='submit'>POST</button>
      </form>
      {
        tasks.map((item, index) => (
          <Task
            title={item.title}
            description={item.description}
            key={index}
            deleteTask={deleteTask}
            index={index}
          />
        ))
      }
    </div>
  );
}

export default Home;