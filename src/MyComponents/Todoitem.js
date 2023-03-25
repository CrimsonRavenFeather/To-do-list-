import React from 'react'

export const Todoitem = ({todo,ondelete}) => {
  return (
    <div>
      <h3>{todo.title}</h3>
      <p>{todo.des}</p>
      <button className="btn btn-sm btn-danger" onClick={()=> {ondelete(todo)}}>Delete</button>
    </div>
    
  )
}
