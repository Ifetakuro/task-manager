import "./todosHeader.css";

interface TodoHeaderProps {
  greeting: string;
  question: string;
  image: any;
}

const TodosHeader: React.FC<TodoHeaderProps> = ({
  greeting,
  question,
  image,
}) => {
  return (
    <header className="todos-header">
      <img src={image} alt="profile" />
      <div>
        <h3>{greeting}</h3>
        <p>{question}</p>
      </div>
    </header>
  );
};

export default TodosHeader;
