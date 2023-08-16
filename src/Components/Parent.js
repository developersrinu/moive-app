import React, { useState } from 'react';
import Child from './Child';

const Parent = () => {
      // Initialize the 'task' state variable with an array of strings
      let [task, setTask] = useState(['t1', 't2', 't1', 't2']);

      function AddNewLIst(item){
            setTask([...task,item])
      }

      return (
            <div>
                  {task.map((value) => (
                        <p>{value}</p> // Create a <p> element for each value in the 'task' array
                  ))}

                  <Child add = {AddNewLIst}/>
            </div>
      );
};

export default Parent;




