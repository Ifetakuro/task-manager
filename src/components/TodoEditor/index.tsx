import TodoEditorHeader from "./TodoEditorHeader";
import { useTodoContext } from "../../context/TodoContext";
import EditTodo from "./EditTodo";
import AddTodo from "./AddTodo";

const TodoEditor = () => {
  const { currentEdit } = useTodoContext();

  return (
    <section className="editor-section">
      <TodoEditorHeader title={currentEdit ? "Edit Task" : "Add Task"} />
      {currentEdit ? <EditTodo /> : <AddTodo />}
    </section>
  );
};

export default TodoEditor;
