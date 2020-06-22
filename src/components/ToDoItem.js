import React from 'react';

function ToDoItem(props){
  const completedStyle={
    fontStyle: "italic",
    color: "#cdcdcd",
    textDecoration: "line-through"
  }

  return(
    <div className="todo-item">
      <input type ="checkbox" 
        checked={props.doit.completed}
        onChange={() => props.handleChange(props.doit.id)} 
        />
        <p style={props.doit.completed ? completedStyle : null }> {props.doit.text}</p>
    </div>
  )
}

export default ToDoItem