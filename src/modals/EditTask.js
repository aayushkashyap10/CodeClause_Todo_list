import React, { useState, useEffect } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const EditTask = ({ modal, toggle,updateTask,taskObj}) => {

  const [taskname, setTaskname] = useState("");
  const [description, setDescription] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "taskname") {
      setTaskname(value);
    } else {
      setDescription(value);
    }
  }

  useEffect(() => {
    setTaskname(taskObj.name)
    setDescription(taskObj.description)
},[])

const handleUpdate = (e) => {
  e.preventDefault();
  let tempObj = {}
  tempObj['name'] = taskname
  tempObj['description'] = description
  updateTask(tempObj)
}

  return (
    <Modal isOpen={modal} toggle={toggle}>
      <ModalHeader toggle={toggle}>Update Task</ModalHeader>
      <ModalBody>
        <form>
          <div className="form-group">
            <label>Task Name</label>
            <input
              type="text"
              className="form-control"
              value={taskname}
              onChange={handleChange}
              name="taskname"
            />
          </div>
          <div className="form-group">
            <label>Description</label>
            <textarea
              rows="5"
              className="form-control"
              value={description}
              onChange={handleChange}
              name="description"
            ></textarea>
          </div>
        </form>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={handleUpdate}>
          Update
        </Button>{" "}
        <Button color="secondary" onClick={toggle}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default EditTask;
