import Header from "./components/header/header";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import Todo from "./components/main-todo/Todo";

const App = () => {
  return (
    <>
      <Header />
      <Todo />
    </>
  )
};

export default App;