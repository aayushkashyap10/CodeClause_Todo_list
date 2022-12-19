import React, { useEffect, useState } from "react";
import CreateTask from "../modals/CreateTask";
import Card from "./Card";
import 'bootstrap/dist/css/bootstrap.min.css';

const Todo = () => {
  const [modal, setModal] = useState(false);
  const [tasklist, setTasklist] = useState([]);

  useEffect(() => {
    let arr = localStorage.getItem("tasklist");

    if (arr) {
      let obj = JSON.parse(arr);
      setTasklist(obj);
    }
  }, []);

  const deleteTask = (index) => {
    let templist = tasklist;
    templist.splice(index, 1);
    localStorage.setItem("tasklist", JSON.stringify(templist));
    setTasklist(templist);
    window.location.reload(); //for refreshing webpage
  };

  const updateListArray = (obj, index) => {
    let templist = tasklist;
    templist[index] = obj;
    localStorage.setItem("tasklist", JSON.stringify(templist));
    setTasklist(templist);
    window.location.reload();
  };

  const toggle = () => setModal(!modal);

  const saveTask = (taskObj) => {
    let templist = tasklist;
    templist.push(taskObj);
    localStorage.setItem("tasklist", JSON.stringify(templist));
    setTasklist(templist);
    setModal(false);
  };

  return (
    <>
      <div className="header text-center">
        <h1 style={{"color":"#fff", "marginBottom":"1%"}}>To-do List</h1>
        <button className="buttonClass" onClick={() => setModal(true)}>
            Add Task
        </button>
      </div>
      <div className="task-container">
        {tasklist &&
          tasklist.map((obj, index) => (
            <Card taskObj={obj} index={index} deleteTask={deleteTask}  updateListArray={updateListArray}/>
          ))}
      </div>
      <CreateTask toggle={toggle} modal={modal} save={saveTask} />
    </>
  );
};

export default Todo;
