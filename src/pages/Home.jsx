import Header from "../components/Header";
import ShowTasks from "../components/ShowTasks";
import { useState, useEffect } from "react";
// import data from "../helpers/starterData";
const Home = () => {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  // const handleOutline = (e) => {
  //   const item = e.target.parentNode;
  //   const crossed = item.querySelector("div").style;
  //   crossed.classList.toggle("crossed");
  // };
  // const handleDelete = (id) => {
  //   setTasks(tasks.filter((task) => task.id !== id));
  //   console.log(id);
  // };
  const clearTasks = () => {
    localStorage.clear();

    alert("localStorage has been cleared!");
  };
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <>
      <Header tasks={tasks} setTasks={setTasks} />
      <ShowTasks tasks={tasks} clearTasks={clearTasks} />
    </>
  );
};

export default Home;
