import "./App.css";
import TodoEditor from "./components/TodoEditor";
import Todos from "./components/Todos";

function App() {
  return (
    <main className="App">
      <Todos />
      <TodoEditor />
    </main>
  );
}

export default App;
