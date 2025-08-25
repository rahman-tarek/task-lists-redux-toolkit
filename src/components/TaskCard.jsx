import { useDispatch, useSelector } from "react-redux";
import { deleteTask } from "../redux/feature/addTaskSlice";
import { useEffect } from "react";
import fetchData from "../redux/fetchData";

const TaskCard = () => {
    const { tasks } = useSelector((state) => state.addTask);
    const dispatch = useDispatch();

    // Call fetchData to load initial tasks
    useEffect(() => {
        dispatch(fetchData());
    }, [dispatch])
    // Handling task deletion
    const deleteTaskHandler = (id) => {
        dispatch(deleteTask(id))
    }

    return (

        <div className="task-card w-xl mt-5 p-4 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-3 text-center">Task List</h2>
            {tasks && tasks.length > 0 ? (
                <ul className="list-none pl-5 w-full">
                    {tasks.map((task) => (
                        <div key={task.id} className="tasks flex bg-white px-4 py-1 mb-2 rounded shadow-sm ">
                            <li className="task font-bold">
                                {task.title || task.text}
                            </li>
                            <div className="ml-auto">
                                <button
                                    onClick={() => deleteTaskHandler(task.id)}
                                    className="deleteBtn px-2 py-1 cursor-pointer bg-red-500 text-white rounded hover:bg-red-600">
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))}
                </ul>
            ) : (
                <div className="text-center">
                    <p className="text-gray-600">No tasks available</p>
                </div>
            )
            }
        </div>
        // : (
        //     <div className="mt-5 p-4 rounded-lg shadow-md bg-gray-100 text-center">
        //         <p className="">No tasks available</p>
        //     </div>
        // )

    )
}
export default TaskCard;