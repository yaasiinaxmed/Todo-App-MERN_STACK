import React, { useState } from "react";
import { useCreateTodoMutation } from "../store/api/TodoSlice";

function AddTodo() {

  const [createTodo] = useCreateTodoMutation()
  const [name, setName] = useState()

  const handleAdd = (e) => {
    e.preventDefault()

    createTodo({name: name, isComplate: false})
    setName("")
  }

  return (
    <form onSubmit={handleAdd} className="w-full flex gap-3 mt-2">
      <input
        type="text"
        placeholder="Enter todo name"
        onChange={(e) => setName(e.target.value)}
        value={name}
        className="w-full mx-auto p-3 bg-slate-100 rounded-lg outline-slate-700"
        required
      />
      <button type="submit" className="bg-slate-700 text-white p-4 text-xl rounded-lg">
        <i class="ri-add-line"></i>
      </button>
    </form>
  );
}

export default AddTodo;
