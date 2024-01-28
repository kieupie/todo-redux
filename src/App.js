import React, { useEffect } from 'react';
import { Typography, Divider } from 'antd';
import './App.css';
import TodoList from './components/TodoList';
import Filters from './components/Filters';
import { setupServer } from './fakeApis/server';

setupServer();

function App() {
  useEffect(() => {
    // POST todo
    fetch('/api/todos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id: 4, name: 'Learn Redux-Thunk', completed: false, priority: 'High' }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log('Todo created:', data);

        // GET todos
        return fetch('/api/todos');
      })
      .then((res) => res.json())
      .then((data) => {
        console.log('All todos:', data);

        // Update todo
        return fetch('/api/updateTodos', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ id: 4, name: 'Learn Redux-Thunk update', completed: true, priority: 'Low' }),
        });
      })
      .then((res) => res.json())
      .then((data) => {
        console.log('Todo updated:', data);

        // GET updated todos
        return fetch('/api/todos');
      })
      .then((res) => res.json())
      .then((data) => {
        console.log('Updated todos:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
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