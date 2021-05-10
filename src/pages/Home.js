import React, { useState, useEffect } from "react";

import AddTodo from "./Todos/AddTodo";
import ListTodo from "./Todos/ListTodo";

const Home = () => {
  const [form, setForm] = useState({ title: "", description: "" });

  const [todos, setTodos] = useState([]);

  useEffect(() => {
    return () => {};
  }, [todos]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const addTask = (e) => {
    e.preventDefault();
    console.log(form);
    // const lists = { ...todos };
    const [...lists] = todos;
    const { title, description } = form;
    lists.push({ title, description });
    setTodos(lists);
    console.log(lists);
  };
  return (
    <>
      <h1>Home Page</h1>
      <AddTodo handleChange={handleChange} addTask={addTask} form={form} />
      <ListTodo todos={todos} />
    </>
  );
};

export default Home;
