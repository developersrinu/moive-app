 

 import React,{useState} from 'react'

 const Child = (p) =>{

      let [newTask,setNewTask] = useState('')

      return(<div>
            <input onChange={(e)=>{
                  setNewTask(e.target.value)
            }} value = {newTask}/>

            <button onClick={()=> p.add(newTask) }>addone</button>
      </div>)
 }

 export  default Child

