import { useState } from "react";
import AddTaskForm from "./AddTaskForm";

const Header = ({ tasks, setTasks }) => {
  const [btnStyle, setbtnStyle] = useState({
    name: "SHOW ADDTASK BAR",
    bgColor: "purple",
  });
  const [show, setShow] = useState(false);
  const handleShow = () => {
    if (show) {
      setbtnStyle({ name: "SHOW ADDTASK BAR", bgColor: "purple" });
    } else {
      setbtnStyle({ name: "CLOSE ADDTASK BAR", bgColor: "red" });
    }
    setShow(!show);
  };
  return (
    <header className="header">
      <h1>Task Tracker</h1>
      <button
        onClick={handleShow}
        className="btn"
        style={{ backgroundColor: btnStyle.bgColor }}
      >
        {btnStyle.name}
      </button>
      {show && <AddTaskForm tasks={tasks} setTasks={setTasks} />}
    </header>
  );
};

export default Header;
