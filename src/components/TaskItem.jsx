import { FaRegTrashAlt, FaRegEdit } from "react-icons/fa";
import { useState } from "react";

const TaskItem = ({ task, index, deleteTask, toggleTaskCompletion, editTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(task.text);

  const handleChange = (e) => {
    setNewText(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      editTask(task.id, newText);
      setIsEditing(false);
    }
  };

  return (
    <li className="flex items-center justify-between bg-white p-4 rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition duration-300">
      {/* Task Index & Text */}
      <div className="flex items-center gap-4 flex-1">
        <span className="text-sm font-bold text-gray-700 bg-blue-300 px-3 py-1 rounded-full">
          {index}
        </span>
        {isEditing ? (
          <input
            type="text"
            value={newText}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            className="border-b-2 border-blue-500 outline-none p-1 text-lg w-full"
            autoFocus
          />
        ) : (
          <span
            className={`text-lg font-medium truncate max-w-[70%] ${
              task.completed ? "line-through text-gray-500" : ""
            }`}
            onDoubleClick={() => setIsEditing(true)}
          >
            {task.text}
          </span>
        )}
      </div>

      {/* Actions */}
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleTaskCompletion(task.id)}
          className="w-5 h-5 text-blue-500 bg-gray-200 border-gray-400 rounded focus:ring-blue-500 cursor-pointer"
        />
        <button
          onClick={() => setIsEditing(true)}
          className="text-yellow-500 hover:text-yellow-600 transition duration-200"
        >
          <FaRegEdit className="w-5 h-5" />
        </button>
        <button
          onClick={() => deleteTask(task.id)}
          className="text-red-500 hover:text-red-700 transition duration-200"
        >
          <FaRegTrashAlt className="w-5 h-5" />
        </button>
      </div>
    </li>
  );
};

export default TaskItem;
