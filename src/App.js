import { Typography, Divider } from 'antd';
import './App.css';
import TodoList from './components/TodoList';
import Filters from './components/Filters';

function App() {
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