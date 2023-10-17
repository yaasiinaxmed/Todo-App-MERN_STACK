import { useState } from 'react'
import AddTodo from './components/addTodo'
import Todo from './components/Todo'

function App() {

  return (
    <div className='max-w-xl mx-auto p-4 flex flex-col gap-5 items-center'>
      <h1 className='text-3xl text-slate-700 font-bold'>Todo App</h1>
      <AddTodo/>
      <Todo/>
    </div>
  )
}

export default App
