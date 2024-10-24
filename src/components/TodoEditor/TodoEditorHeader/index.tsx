import "./todoEditorHeader.css";

interface TodoEditorHeaderProps {
  title: string;
}

const TodoEditorHeader: React.FC<TodoEditorHeaderProps> = ({ title }) => {
  return (
    <header className="todo-editor-header">
      <h2>{title}</h2>
    </header>
  );
};

export default TodoEditorHeader;
