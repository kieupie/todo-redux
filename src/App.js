import React, { useEffect } from 'react';
import { Typography, Divider } from 'antd';
import './App.css';
import TodoList from './components/TodoList';
import Filters from './components/Filters';
import { setupServer } from './fakeApis/server';
import { useDispatch } from 'react-redux';
import { fetchTodos } from './components/TodoList/todoList-slice';

if (process.env.NODE_ENV !== 'production') {
  setupServer();
}

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
  }, []);


  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-[500px] bg-white p-4 shadow-lg rounded-md">
        <Typography.Title level={2} className="text-blue-500">Todo x Redux</Typography.Title>
        <Filters />
        <Divider />
        <TodoList />
      </div>
    </div>
  );
}

export default App;