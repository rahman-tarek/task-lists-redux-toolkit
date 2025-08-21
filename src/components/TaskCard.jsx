import { useDispatch, useSelector } from "react-redux";
import { deleteTask } from "../redux/feature/addTaskSlice";

const TaskCard = () => {
    const tasks = useSelector((state) => state.addTask);
    const dispatch = useDispatch();

    // Handling task deletion
    const deleteTaskHandler = (id) => {
        dispatch(deleteTask(id))
    }

    return (

        tasks && (
            <div className="w-xl mt-5 p-4 rounded-lg shadow-md bg-gray-100">
                <h2 className="text-xl font-bold mb-3 text-center">Task List</h2>
                <ul className="list-none pl-5 w-full">
                    {tasks.map((task) => (
                        <div key={task.id} className="flex bg-white px-4 py-1 mb-2 rounded shadow-sm ">
                            <li className="font-bold">
                                {task.text}
                            </li>
                            <div className="ml-auto">
                                <button
                                    onClick={() => deleteTaskHandler(task.id)}
                                    className="px-2 py-1 cursor-pointer bg-red-500 text-white rounded hover:bg-red-600">
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))}
                </ul>
            </div>
        )
        // : (
        //     <div className="mt-5 p-4 rounded-lg shadow-md bg-gray-100 text-center">
        //         <p className="">No tasks available</p>
        //     </div>
        // )

    )
}
export default TaskCard;