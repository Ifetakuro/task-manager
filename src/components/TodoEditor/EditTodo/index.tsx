import { useState, useEffect } from "react";
import { useTodoContext } from "../../../context/TodoContext";
import "./editTodo.css";

const EditTodo = () => {
  const { editTodo, deleteTodo, currentEdit, setCurrentEdit } =
    useTodoContext();
  const [taskName, setTaskName] = useState<string>("");

  useEffect(() => {
    if (currentEdit) {
      setTaskName(currentEdit.todo);
    }
  }, [currentEdit]);

  const handleSave = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (currentEdit) {
      editTodo(currentEdit.id, { todo: taskName });
      setCurrentEdit(null);
    }
    setTaskName("");
  };

  const handleDelete = (): void => {
    if (currentEdit) {
      deleteTodo(currentEdit.id);
      setCurrentEdit(null);
    }
  };

  return (
    <form className="edit-todo" onSubmit={handleSave}>
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
        <button className="btn delete-btn" onClick={handleDelete} type="button">
          Delete
        </button>

        <button className="btn save-btn" type="submit">
          Save Changes
        </button>
      </div>
    </form>
  );
};

export default EditTodo;
