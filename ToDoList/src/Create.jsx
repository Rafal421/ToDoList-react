import React, { useState } from "react";
import axios from "axios";

function Create() {
  const [task, setTask] = useState();
  const handleAdd = () => {
    axios
      .post("http://localhost:3001/create", { task: task })
      .then((result) => {
        location.reload();
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="create_from input">
      <input
        type="text"
        placeholder="Enter your task"
        nameN=""
        id=""
        onChange={(e) => setTask(e.target.value)}
      />
      <button className="create_form button" type="button" onClick={handleAdd}>
        Add
      </button>
    </div>
  );
}

export default Create;
