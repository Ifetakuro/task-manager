import profilePicture from "../../assets/images/profile.png";
import TodosHeader from "./TodosHeader";
import "./todos.css";
import Advert from "./Advert";
import Todo from "./Todo";
import { PlusSvg } from "../../assets/svgs/Plus";
import { useTodoContext } from "../../context/TodoContext";

const Todos = () => {
  const { todos, setCurrentEdit } = useTodoContext();

  return (
    <aside className="todos-section">
      <TodosHeader
        image={profilePicture}
        greeting="Hello, Jhon"
        question="What are  your plans 
for today?"
      />
      <Advert />
      <div className="todos">
        {todos.map((todo) => (
          <Todo {...todo} key={todo.id} />
        ))}
      </div>

      <button className="add-button" onClick={() => setCurrentEdit(null)}>
        <PlusSvg />
      </button>
    </aside>
  );
};

export default Todos;
