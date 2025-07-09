import React, { useState, useEffect } from "react";

const AddEditTaskModal = ({ onClose, onSave, initialData }) => {
  const [task, setTask] = useState({
    title: "",
    assignedTo: "",
    priority: "Medium",
    deadline: "",
    status: "Pending",
  });

  useEffect(() => {
    if (initialData) {
      setTask(initialData);
    }
  }, [initialData]);

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.title || !task.assignedTo || !task.deadline) {
      return alert("Please fill all required fields.");
    }
    const finalTask = {
      ...task,
      id: task.id || Date.now(),
      createdAt: task.createdAt || new Date().toISOString().split("T")[0],
    };
    onSave(finalTask);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
  <div className="bg-white rounded-xl p-6 w-full max-w-md space-y-4 shadow-lg relative">
    {/* ❌ Close Icon */}
    <button
      onClick={onClose}
      className="absolute top-2 right-3 text-gray-500 hover:text-black text-xl font-bold"
    >
      &times;
    </button>

    <h2 className="text-xl font-bold">
      {initialData ? "Edit Task" : "Add Task"}
    </h2>
      
        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="text"
            name="title"
            value={task.title}
            onChange={handleChange}
            placeholder="Task Title *"
            className="w-full border p-2 rounded"
            required
          />
          <input
            type="text"
            name="assignedTo"
            value={task.assignedTo}
            onChange={handleChange}
            placeholder="Assign to *"
            className="w-full border p-2 rounded"
            required
          />
          <select
            name="priority"
            value={task.priority}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          >
            <option>High</option>
            <option>Medium</option>
            <option>Low</option>
          </select>
          <input
            type="date"
            name="deadline"
            value={task.deadline}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />
          <select
            name="status"
            value={task.status}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          >
            <option>Pending</option>
            <option>Completed</option>
          </select>

          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-300 hover:bg-gray-400 px-4 py-2 rounded"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
            >
              {initialData ? "Update" : "Add"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};




const AdminDashboard = () => {
  const [tasks, setTasks] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [taskToEdit, setTaskToEdit] = useState(null);

  const handleSaveTask = (task) => {
    const exists = tasks.find((t) => t.id === task.id);
    if (exists) {
      setTasks(tasks.map((t) => (t.id === task.id ? task : t)));
    } else {
      setTasks([...tasks, task]);
    }
  };

  const handleEdit = (task) => {
    setTaskToEdit(task);
    setShowModal(true);
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Admin Dashboard</h1>
        <button
          onClick={() => {
            setTaskToEdit(null);
            setShowModal(true);
          }}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
        >
          + Add Task
        </button>
      </div>

      {/* Task List */}
      <div className="grid gap-4">
        {tasks.length === 0 && (
          <p className="text-gray-500">No tasks added yet.</p>
        )}
        {tasks.map((task) => (
          <div
            key={task.id}
            className="bg-white p-4 rounded-xl shadow flex justify-between items-start"
          >
            <div>
              <h3 className="font-semibold text-lg">{task.title}</h3>
              <p className="text-sm text-gray-600">
                Assigned to: {task.assignedTo} | Deadline: {task.deadline}
              </p>
              <p className="text-sm">
                Priority: {task.priority} | Status: {task.status}
              </p>
            </div>
            <button
              onClick={() => handleEdit(task)}
              className="text-blue-600 hover:underline text-sm"
            >
              Edit
            </button>
          </div>
        ))}
      </div>

      {/* Modal */}
      {showModal && (
        <AddEditTaskModal
          onClose={() => setShowModal(false)}
          onSave={handleSaveTask}
          initialData={taskToEdit}
        />
      )}
    </div>
  );
};

export default AdminDashboard;
;


