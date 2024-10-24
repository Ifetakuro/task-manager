import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

type Todo = {
  id: string;
  done: boolean;
  todo: string;
};

type TodoContextType = {
  todos: Todo[];
  addTodo: (todoText: string) => void;
  editTodo: (id: string, updatedTodo: Partial<Todo>) => void;
  deleteTodo: (id: string) => void;
  toggleTodoDone: (id: string) => void;
  currentEdit: Todo | null;
  setCurrentEdit: (val: Todo | null) => void;
};

const TodoContext = createContext<TodoContextType | undefined>(undefined);

export const initialTodos: Todo[] = [
  { id: "1245", done: true, todo: "Training at the Gym" },
  { id: "1243", done: false, todo: "Play Paddle with friends" },
  { id: "1257", done: false, todo: "Burger BBQ with family" },
];

export const TodoProvider = ({ children }: { children: ReactNode }) => {
  const [todos, setTodos] = useState<Todo[]>(initialTodos);
  const [currentEdit, setCurrentEdit] = useState<Todo | null>(null);

  useEffect(() => {
    if (todos.length > 0) {
      setCurrentEdit(todos[0]);
    }
  }, []);

  const addTodo = (todoText: string) => {
    const newTodo: Todo = {
      id: Date.now().toString(),
      done: false,
      todo: todoText,
    };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  const editTodo = (id: string, updatedTodo: Partial<Todo>) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, ...updatedTodo } : todo
      )
    );
  };

  const toggleTodoDone = (id: string) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  const deleteTodo = (id: string) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const value = {
    todos,
    addTodo,
    editTodo,
    deleteTodo,
    toggleTodoDone,
    currentEdit,
    setCurrentEdit,
  };

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};

export const useTodoContext = () => {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error("useTodoContext must be used within a TodoProvider");
  }
  return context;
};
