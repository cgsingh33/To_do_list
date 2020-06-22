import React,{Component} from 'react';
import ToDoItem from './ToDoItem';
import todosData from '../todosData';
import '../style.css';

class App extends Component{
    constructor(){
        super()
        this.state={
            todos:todosData
        }
        this.handleChange=this.handleChange.bind(this)
    }  

    handleChange(id){
        this.setState(prevState =>{
            const updatedTodos=prevState.todos.map(todo =>{
                if(todo.id ===id){
                    todo.completed= !todo.completed
                }
                return todo
            })
            return{
                todos: updatedTodos
            }
        })
    }
    
    render(){
    const todolisting=this.state.todos.map(doit => <ToDoItem key={doit.id} doit={doit}
        handleChange={this.handleChange}/>)
    
    return(
        <div className="todo-list">
            {todolisting}
        </div>

    )
}
}
export default App; 