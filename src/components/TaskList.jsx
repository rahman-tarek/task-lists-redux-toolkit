import { useState } from "react";
import TaskCard from "./TaskCard";
import { useDispatch } from "react-redux";
import { addNewTask } from "../redux/feature/addTaskSlice";
import { FaMoon, FaSun } from "react-icons/fa";
import { toggleDarkMode } from '../redux/feature/darkThemeSlice';
import { useSelector } from "react-redux";

const TaskList = () => {
    const [task, setTask] = useState('');
    const [taskLists, setTaskLists] = useState('');

    // Theme state
    const [isDarkMode, setIsDarkMode] = useState(false);
    const isDark = useSelector((state) => state.darkTheme.isDarkMode)
    const dispatch = useDispatch();

    const inputHandler = (e) => {
        setTask(e.target.value);
    }
    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(addNewTask(task))
        setTask('');
    }

    // Toggle theme
    const toggleTheme = () => {
        dispatch(toggleDarkMode())
    }


    return (
        <div className="h-screen flex flex-col items-center justify-center">
            <div className="w-xl p-10 rounded-lg shadow-md">
                {isDark ? <FaSun onClick={toggleTheme} /> : <FaMoon onClick={toggleTheme} />}
                <div className="w-full">
                    <h2 className="text-2xl font-bold text-center">Add to Task list</h2>
                    <form action="submit"
                        className="flex justify-between gap-2 mt-4"
                    >
                        <input
                            type="text"
                            placeholder="Task Name"
                            value={task}
                            className="outline-none border-none w-full bg-gray-200 px-2 py-1 rounded"
                            onChange={inputHandler}
                        />
                        <button
                            type="submit"
                            className="px-4 cursor-pointer rounded bg-green-600 text-white"
                            onClick={submitHandler}
                        >Add</button>
                    </form>
                </div>
            </div>
            <TaskCard />
        </div>
    )
}

export default TaskList;