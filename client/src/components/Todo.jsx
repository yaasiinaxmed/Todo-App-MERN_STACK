import React, { useState } from "react";
import { useDeleteTodoMutation, useGetTodoQuery, useUpdateTodoMutation } from "../store/api/TodoSlice";

function Todo() {
  const { data: todos = [], isLoading, isError } = useGetTodoQuery();
  const [updateTodo] = useUpdateTodoMutation();
  const [deleteTodo] = useDeleteTodoMutation()

  const handleDelete = (id) => {
    if(confirm("Are your sure ?")) {
      deleteTodo(id).unwrap().then(() => alert("Todo deleted successfully"))
    }
  };

  return (
    <div className="flex flex-col gap-4 items-center w-full">
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          {isError === true ? (
            <h1>Todo is empty</h1>
          ) : (
            <>
            {todos.map((todo) => (
            <div
              key={todo._id}
              className="w-full p-4 flex items-center justify-between shadow border-l-[3px] border-slate-700"
            >
              <div
                className="flex items-center gap-3 cursor-pointer"
                onClick={() => updateTodo({id: todo._id, todo: todo})}
              >
                <span className="text-xl text-green-500">
                  {!todo.isComplate ? (
                    <i class="ri-checkbox-blank-circle-line"></i>
                  ) : (
                    <i class="ri-checkbox-circle-line"></i>
                  )}
                </span>
                <h3 className={`text-xl font-medium ${todo.isComplate === true ? "line-through" : ""}`}>{todo.name}</h3>
              </div>
              <button onClick={() => handleDelete(todo._id)} className="text-red-600">
                <i class="ri-delete-bin-5-fill"></i>
              </button>
            </div>
          ))}
            </>
          )}
        </>
      )}
    </div>
  );
}

export default Todo;
