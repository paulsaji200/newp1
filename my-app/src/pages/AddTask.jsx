import React, { useState } from "react";

const AddTask = ({ onAdd }) => {
  const [task, setTask] = useState({
    title: "",
    description: "",
    assignedTo: "",
    priority: "Medium",
    deadline: "",
  });

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!task.title || !task.assignedTo || !task.deadline) {
      alert("Please fill all required fields");
      return;
    }

    const newTask = {
      ...task,
      id: Date.now(),
      status: "Pending",
      createdAt: new Date().toISOString().split("T")[0],
    };

    onAdd(newTask);
    setTask({
      title: "",
      description: "",
      assignedTo: "",
      priority: "Medium",
      deadline: "",
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-md rounded-xl p-6 space-y-4"
    >
      <h2 className="text-xl font-bold">Add New Task</h2>

      <input
        type="text"
        name="title"
        value={task.title}
        onChange={handleChange}
        placeholder="Task Title *"
        className="w-full border p-2 rounded"
        required
      />

      <textarea
        name="description"
        value={task.description}
        onChange={handleChange}
        placeholder="Description (optional)"
        className="w-full border p-2 rounded"
      ></textarea>

      <input
        type="text"
        name="assignedTo"
        value={task.assignedTo}
        onChange={handleChange}
        placeholder="Assign to (username) *"
        className="w-full border p-2 rounded"
        required
      />

      <select
        name="priority"
        value={task.priority}
        onChange={handleChange}
        className="w-full border p-2 rounded"
      >
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>

      <input
        type="date"
        name="deadline"
        value={task.deadline}
        onChange={handleChange}
        className="w-full border p-2 rounded"
        required
      />

      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
      >
        Add Task
      </button>
    </form>
  );
};

export default AddTask;

