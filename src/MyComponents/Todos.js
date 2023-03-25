import React from 'react'
import {Todoitem} from "../MyComponents/Todoitem";

export const Todos = (props) => {
  let mystyle={
    minHeight:"70vh",
    margin:"10px auto"
  }
  return (
    <div className='container my-4' style={mystyle}>
      <h3>TO DO's LIST</h3>
      {props.todos.length===0 ? "no task remaing":
      props.todos.map((todo)=>{
        return (<>
        <Todoitem todo={todo} key={todo.sn} ondelete={props.ondelete}/> <hr />
        </>
        )
      })}
      
    </div>
  )
}
