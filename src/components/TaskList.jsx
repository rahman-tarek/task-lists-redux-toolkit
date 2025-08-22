import { useEffect, useState } from "react";
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
        dispatch(toggleDarkMode());
    }

    useEffect(() => {
        if (isDark) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [isDark])

    console.log(isDark)
    return (
        <div className={`min-h-screen flex flex-col items-center justify-center ${isDark ? 'dark bg-gray-900' : 'bg-white'}`}>
            <div className="addTask w-xl p-10 rounded-lg shadow-lg">
                {isDark ? <FaSun className="text-2xl cursor-pointer text-yellow-400" onClick={toggleTheme} /> : <FaMoon onClick={toggleTheme} className="text-2xl cursor-pointer text-gray-600" />}
                <div className="w-full">
                    <h2 className="text-2xl font-bold text-center dark:text-white">Add to Task list</h2>
                    <form action="submit"
                        className="flex justify-between gap-2 mt-4"
                    >
                        <input
                            type="text"
                            placeholder="Task Name"
                            value={task}
                            className="outline-none border-none w-full bg-gray-200 px-2 py-1 rounded dark:bg-gray-700 dark:text-white"
                            onChange={inputHandler}
                        />
                        <button
                            type="submit"
                            className="add-btn px-4 cursor-pointer rounded bg-green-600 dark:bg-gray-700 text-white"
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