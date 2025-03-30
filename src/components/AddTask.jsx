import { useState } from "react";

const AddTask = ({ onAddTask }) => {
  const [input, setInput] = useState("");

  const handleAddTask = () => {
    if (input.trim() !== "") {
      const newTask = { id: Date.now(), text: input, completed: false };
      onAddTask(newTask);
      setInput("");
    }
  };

  return (
    <div className="flex items-center space-x-3 bg-gray-100 p-4 rounded-lg shadow-md">
      <input
        type="text"
        value={input}
        placeholder="Enter a new task..."
        onChange={(e) => setInput(e.target.value)}
        className="flex-1 border-none p-3 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 outline-none"
      />
      <button
        onClick={handleAddTask}
        className="bg-blue-500 text-white px-5 py-3 rounded-lg hover:bg-blue-600 transition-all duration-200 shadow-md"
      >
        ➕ Add
      </button>
    </div>
  );
};

export default AddTask;

