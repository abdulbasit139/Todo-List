import { useState } from "react";

const Todo = () => {

    const [newTask, setNewTask] = useState('')
    const [tasks, setTasks] = useState([])

    const addTask = () => {
        setTasks([...tasks, newTask])
        setNewTask('')
    }

    const delTask = (index) => {
        const temp = [...tasks]
        temp.splice(index, 1)
        setTasks(temp)
    }

    return (
        <>
            <div>
                <input type="text" value={newTask} onChange={(e) => setNewTask(e.target.value)} />

                <button onClick={addTask}>ADD</button>
            </div>
                    
            <table>
                <thead>
                    <th>Task</th>
                    <th>Option</th>
                </thead>
                <tbody>
                    {
                        tasks.map((task, index) => (
                            <>
                                <tr>
                                    <td>{task}</td>
                                    <td><button onClick={() => delTask(index)}>Delete</button></td>
                                </tr>
                            </>
                        ))
                          
                    }
                </tbody>
            </table>

        </>
    )
}   

export default Todo