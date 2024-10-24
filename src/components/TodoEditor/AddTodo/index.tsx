import { useState } from "react";
import { useTodoContext } from "../../../context/TodoContext";
import "./addTodo.css";

const AddTodo = () => {
  const { addTodo } = useTodoContext();
  const [taskName, setTaskName] = useState<string>("");

  const handleSave = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (taskName.trim()) {
      addTodo(taskName);
      setTaskName("");
    }
  };

  return (
    <form className="add-todo" onSubmit={handleSave}>
      <label htmlFor="task-name">
        Task Name
        <input
          type="text"
          required
          placeholder="e.g. Cut my hair"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
      </label>
      <div className="action-btns">
        <button className="btn save-btn" type="submit">
          Add Task
        </button>
      </div>
    </form>
  );
};

export default AddTodo;
