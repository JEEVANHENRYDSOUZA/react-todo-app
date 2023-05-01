import React ,{useState} from 'react'
import { TodoForm } from './todoform';
import { Todo } from './todo';
function Todowrapper() {
    const [todos,setTodos]=useState([])

    const addtodo=todo=>{
        setTodos([...todos,{task:todo,id:Math.floor(Math.random() * 10000),completed:false,isEditing:false}])
        console.log(todos);
    }
  return (
    <div className='Todowrapper'>
        <TodoForm  addTodo={addtodo}/>
        {todos.map((todo) =>
            (
              <Todo
                key={todo.id}
                task={todo}
                
              />
            )
          )}
    </div>
  )
}

export default Todowrapper;
