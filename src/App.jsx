import { useState } from "react";
import "./App.css";
function App() {
  const [newTask, setNewTask] = useState("");
  const [task, setTask] = useState([]);
  const totalTask = task.length;
  const completed = task.filter((task) => task.isDone).length;
  const remainingTasks = totalTask - completed;
  const Percentage =
    totalTask > 0 ? Math.round((completed / totalTask) * 100) : 0;
  const HandleClick = () => {
    const tasks = {
      id: Date.now(),
      isDone: false,
      text: newTask,
    };
    if (newTask.trim()) {
      setTask([...task, tasks]);
      setNewTask("");
    }
  };
  const toggletask = (id) => {
    setTask(
      task.map((ta) => (ta.id === id ? { ...ta, isDone: !ta.isDone } : ta)),
    );
  };
  const deleteTask = (id) => {
    setTask(task.filter((task) => task.id !== id));
  };
  return (
    <>
      <div className="flex justify-center items-center p-5  bg-orange-400 text-5xl font-bold tracking-widest text-amber-950">
        <h1 className="DMSans font-bold">TASKIFY</h1>
      </div>
      <div className="flex justify-center  w-full gap-5 py-5">
        <input
          className="w-2/4 bg-white border-2 outline-none px-3 rounded-4xl py-1 border-orange-400 text-xl text-amber-950 font-semibold placeholder:text-amber-950"
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="enter task"
        />
        <button
          className="bg-orange-400 py-1 outline-none px-4 rounded-4xl sm:text-2xl text-xl font-bold DMSans tracking-widest"
          onClick={HandleClick}
        >
          Add task
        </button>
      </div>
      <div className="bg-orange-400 mx-5 p-4 my-4 rounded-xl flex justify-center text-center flex-col">
        <div className="flex justify-center text-2xl sm:text-4xl font-bold tracking-widest text-amber-950">
          <h3>Task Statistics</h3>
        </div>
        <div className="sm:flex  justify-center gap-5 text-center p-5 sm:text-3xl text-xl ">
          <p className="bg-white sm:p-3 m-3 sm:m-0 text-amber-950 font-bold rounded-2xl">
            Total Tasks : {totalTask}
          </p>
          <p className="bg-white sm:p-3 m-3 sm:m-0 text-amber-950 font-bold rounded-2xl ">
            Completed Tasks : {completed}
          </p>
          <p className="bg-white sm:p-3 sm:m-0 m-3 text-amber-950 font-bold rounded-2xl">
            Remaining Tasks : {remainingTasks}
          </p>
        </div>
        <div>
          <div className="w-full h-7 bg-[#ffffff] rounded-4xl overflow-hidden ">
            <div
              style={{ width: `${Percentage}%` }}
              className="h-full bg-[#4ca500] transition-all ease duration-300"
            ></div>
          </div>
          <p className="text-2xl m-5 font-bold">Progress : {Percentage}%</p>
        </div>
      </div>
      <div>
        {task.map((tasks) => (
          <li key={tasks.id}>
            <span>
              <input
                type="checkbox"
                onChange={() => toggletask(tasks.id)}
                checked={tasks.isDone}
              />
            </span>
            <span>{tasks.text}</span>
            <span>
              <button onClick={() => deleteTask(tasks.id)}>Delete</button>
            </span>
          </li>
        ))}
      </div>
    </>
  );
}
export default App;
