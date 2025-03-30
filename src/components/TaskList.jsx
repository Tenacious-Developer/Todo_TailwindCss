import TaskItem from "./TaskItem";

const TaskList = ({ tasks, deleteTask, toggleTaskCompletion, editTask }) => {
  return (
    <ul className="mt-6 space-y-3">
      {tasks.length > 0 ? (
        tasks.map((task, index) => (
          <TaskItem
            key={task.id}
            task={task}
            index={index + 1}
            deleteTask={deleteTask}
            toggleTaskCompletion={toggleTaskCompletion}
            editTask={editTask}
          />
        ))
      ) : (
        <p className="text-gray-600 text-center italic">No tasks added yet. ✨</p>
      )}
    </ul>
  );
};

export default TaskList;

