import { useState } from "react";
import AddTask from "./AddTask";
import TaskList from "./TaskList";

const Todo = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleTaskCompletion = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const editTask = (id, newText) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, text: newText } : task
      )
    );
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gradient-to-r from-blue-400 to-purple-500 py-10 px-4">
      <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-lg transition-all duration-300">
        <h1 className="text-3xl font-extrabold text-center text-blue-700 mb-6">📝 Todo List</h1>
        <AddTask onAddTask={addTask} />
        <TaskList tasks={tasks} deleteTask={deleteTask} toggleTaskCompletion={toggleTaskCompletion} editTask={editTask}/>
      </div>
    </div>
  );
};

export default Todo;


