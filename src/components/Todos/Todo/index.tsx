import { CheckSvg } from "../../../assets/svgs/Check";
import { useTodoContext } from "../../../context/TodoContext";
import "./todo.css";

interface TodoProps {
  todo: string;
  done: boolean;
  id: string;
}

const Todo: React.FC<TodoProps> = ({ todo, done, id }) => {
  const { toggleTodoDone, setCurrentEdit } = useTodoContext();

  return (
    <div className="todo" onClick={() => toggleTodoDone(id)}>
      <span className={`check ${done ? "done" : ""}`}>
        {done ? <CheckSvg /> : ""}
      </span>

      <span className={`text ${done ? "crossed" : ""}`}>{todo}</span>

      <button onClick={() => setCurrentEdit({ todo, done, id })}>Edit</button>
    </div>
  );
};

export default Todo;
