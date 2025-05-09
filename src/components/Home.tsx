import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearToken, type AppDispatch, type RootState } from "../store.tsx";
import { completedToDoLists } from "../constants/data.ts";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const token = useSelector((state: RootState) => state.auth.token);
  const [todos, setTodos] = useState<Todo[]>([]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    if (!token) {
      dispatch(clearToken());
      navigate("/");
    }
  }, [navigate]);
  type Todo = {
    id: number;
    text: string;
    completed: boolean;
  };
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInputValue(e.target.value);
  }

  function handleSubmit(e: React.FormEvent<HTMLButtonElement>) {
    e.preventDefault();
    if (inputValue.trim() === "") return;
    const newTodo: Todo = {
      id: Date.now(),
      text: inputValue,
      completed: false,
    };
    setTodos([...todos, newTodo]);
    setInputValue("");
  }

  function handleDelete(index: number) {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }
  return (
    <div>
      <h1>Todo List</h1>
      <form className="form-container">
        <div className="col-md-12">
          <div className="col-md-6 form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Task"
              value={inputValue}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-6">
            <button
              onClick={handleSubmit}
              type="button"
              className="btn btn-outline-primary"
            >
              Add Todo
            </button>
          </div>
        </div>
        <div>
          <br />
          {completedToDoLists.map((item: Todo) => (
            <div className="form-group form-check">
              <input
                key={item.id}
                className="form-check-input"
                type="checkbox"
                value={item.id}
                checked={item.completed}
                readOnly // if you're not allowing toggling
              />
              <label
                className="form-check-label"
                style={{
                  textDecoration: item.completed ? "line-through" : "none",
                }}
              >
                {item.text}
              </label>
            </div>
          ))}

          {todos.map((todo, index) => (
            <div className="form-check">
              <input
                key={index}
                className="form-check-input"
                type="checkbox"
                value={index}
              />
              <label className="form-check-label">{todo.text}</label>
              <button
                type="button"
                className="btn btn-outline-primary"
                onClick={() => handleDelete(index)}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </form>
    </div>
  );
};

export default Home;
