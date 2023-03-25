import './App.css';
import Header from "./MyComponents/Header";
import {Todos} from "./MyComponents/Todos";
import {Footer} from "./MyComponents/Footer";
import {Addtodo} from "./MyComponents/Addtodo";
import React, { useState , useEffect} from 'react';
function App() {

  let inittodo;
  if(localStorage.getItem("todos")===null){
    inittodo=[];
  }
  else{
    inittodo=JSON.parse(localStorage.getItem("todos"));
  }

  const ondelete=(todo)=>{
    console.log("watashiwa on delete",todo);
    settodos(todos.filter((e)=>{
        return e!==todo;
    }));
    localStorage.setItem("todos",JSON.stringify(todos));
  }

  const addtodo=(title,des)=>{
    console.log("adding to do",title,des);
    let sn;
    if(todos.length==0)
    {
      sn=1;
    }
    else{
      sn=todos[todos.length-1].sn+1;
    }
    const mytodo={
      sn:sn,
      title:title,
      des:des,
    }
    settodos([...todos,mytodo]);
    console.log(mytodo);

    
  }

  const [todos , settodos]=useState(inittodo);
  useEffect(() => {
    localStorage.setItem("todos",JSON.stringify(todos));
  }, [todos])
  
  
  return (
    <>
      <Header title="to do's" searchbar={false}/>
      <Addtodo addtodo={addtodo}/>
      <Todos todos={todos} ondelete={ondelete}/>
      <Footer/>
    </>
  );
}

export default App;
