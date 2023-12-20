// TodoList.js

import React, { useState, useEffect } from "react";
import { addData } from "../ulti/addData";
import { getData } from "../ulti/getData";
import { ProjAction, sheetName } from "../ulti/nameVariable";
import { useLocation, useNavigate } from "react-router-dom";

const ThemTask = () => {
  const location = useLocation();
  const id = location.state.project.id;

  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [editingTodoId, setEditingTodoId] = useState(null);
  const [editingTodoText, setEditingTodoText] = useState("");

  console.log(todos);
  useEffect(() => {
    const fetchData = async () => {
      const data = await getData(sheetName.ThongTinTask);
      const truedata = data.filter((d) => d.idDuAn === id);
      console.log(truedata);
      setTodos(truedata);
    };

    fetchData();
  }, []);

  const addTodo = () => {
    if (newTodo.trim() !== "") {
      addData({ name: sheetName.ThongTinTask, values: [newTodo, id, 0] });
      setTodos([
        ...todos,
        { id: Date.now(), TenTask: newTodo, trangthai: false },
      ]);
      setNewTodo("");
    }
  };

  const toggleTodo = (ids, shit) => {
    addData({
      name: sheetName.ThongTinTask,
      values: [newTodo, id, 0, ids, shit ? 0 : 1],
    });
    console.log({
      name: sheetName.ThongTinTask,
      values: [newTodo, id, 0, ids, shit ? 0 : 1],
    });
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, trangthai: !todo.trangthai } : todo
      )
    );
    window.location.reload();
  };

  const startEditingTodo = (ids, text) => {
    setEditingTodoId(ids);
    setEditingTodoText(text);
  };

  const saveEditedTodo = (ids, text) => {
    setTodos(
      todos.map((todo) =>
        todo.id === editingTodoId ? { ...todo, TenTask: editingTodoText } : todo
      )
    );
    setEditingTodoId(null);
    setEditingTodoText("");
    console.log({ name: sheetName.ThongTinTask, values: [text, id, 0, ids] });
    addData({ name: sheetName.ThongTinTask, values: [text, id, 0, ids] });
  };
  const navi = useNavigate()
  return (
    <div className="max-w-md mx-auto mt-8">
      <h1 className="text-2xl font-semibold mb-4">Project Todo List</h1>
      <div className="mb-4">
        <input
          type="text"
          className="w-full border p-2"
          placeholder="Add a new todo"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
      </div>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={addTodo}
      >
        Add Todo
      </button>
      <ul className="mt-4">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className={`flex items-center justify-between border-b py-2 ${
              todo.trangthai ? "line-through text-gray-500" : ""
            }`}
          >
            {editingTodoId === todo.id ? (
              <input
                type="text"
                className="w-full border p-2"
                value={editingTodoText}
                onChange={(e) => setEditingTodoText(e.target.value)}
              />
            ) : (
              <span>{todo.TenTask}</span>
            )}
            <div className="flex">
              {editingTodoId === todo.id ? (
                <button
                  className="text-green-500 mr-2"
                  onClick={() => saveEditedTodo(todo.id, editingTodoText)}
                >
                  Save
                </button>
              ) : (
                <button
                  className="text-blue-500 mr-2"
                  onClick={() => startEditingTodo(todo.id, todo.TenTask)}
                >
                  Edit
                </button>
              )}
              <input
                type="checkbox"
                className="mr-2"
                checked={todo.trangthai == 1}
                onChange={() => {
                  console.log(todo.trangthai);
                  toggleTodo(todo.id, todo.trangthai == 1);
                }}
              />
            </div>
          </li>
        ))}
      </ul>
      <button
        className="bg-green-500 text-white px-4 py-2 rounded mt-10"
        onClick={() => {
          addData({ name: ProjAction.SubmitP, values: [0, 0], id: id });
          navi('/')
        }}
      >
        Hoàn thành dự án
      </button>
    </div>
  );
};

export default ThemTask;
