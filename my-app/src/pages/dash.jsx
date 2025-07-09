import React, { useState } from "react";
import { Calendar, User, Clock, Pencil } from "lucide-react";
import AddTask from "./AddTask";
const initialTasks = [
  {
    id: 1,
    title: "Design landing page",
    status: "Pending",
    priority: "High",
    assignedTo: "Alice",
    deadline: "2025-07-08",
    createdAt: "2025-07-01",
  },
  {
    id: 2,
    title: "Fix auth bug",
    status: "Completed",
    priority: "Medium",
    assignedTo: "Bob",
    deadline: "2025-07-05",
    createdAt: "2025-07-02",
  },
  {
    id: 3,
    title: "Add payment integration",
    status: "Pending",
    priority: "Low",
    assignedTo: "Alice",
    deadline: "2025-07-10",
    createdAt: "2025-07-03",
  },
];

const Dashboard = () => {
  const [tasks, setTasks] = useState(initialTasks);
  const [filter, setFilter] = useState("All");
  const [sortBy, setSortBy] = useState("createdAt");
  const [editTask, setEditTask] = useState(null);

  const today = new Date();

  const filteredTasks = tasks
    .filter((task) => {
      if (filter === "All") return true;
      return task.status === filter;
    })
    .sort((a, b) => {
      if (sortBy === "priority") {
        const order = { High: 1, Medium: 2, Low: 3 };
        return order[a.priority] - order[b.priority];
      }
      return new Date(a[sortBy]) - new Date(b[sortBy]);
    });

  const summary = {
    total: tasks.length,
    completed: tasks.filter((t) => t.status === "Completed").length,
    pending: tasks.filter((t) => t.status === "Pending").length,
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "High":
        return "text-red-600";
      case "Medium":
        return "text-yellow-500";
      case "Low":
        return "text-green-600";
      default:
        return "";
    }
  };

  const handleSave = () => {
    setTasks((prev) =>
      prev.map((t) => (t.id === editTask.id ? editTask : t))
    );
    setEditTask(null);
  };

  return (
    <div className="p-6 space-y-6">
      {/* Summary */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white shadow-md rounded-xl p-4">
          <h2 className="text-lg font-semibold">Total Tasks</h2>
          <p className="text-2xl text-blue-700">{summary.total}</p>
        </div>
        <div className="bg-white shadow-md rounded-xl p-4">
          <h2 className="text-lg font-semibold">Completed</h2>
          <p className="text-2xl text-green-600">{summary.completed}</p>
        </div>
        <div className="bg-white shadow-md rounded-xl p-4">
          <h2 className="text-lg font-semibold">Pending</h2>
          <p className="text-2xl text-red-600">{summary.pending}</p>
        </div>
      </div>

      {/* Filter and Sort */}
      <div className="flex flex-wrap gap-4">
        <select
          onChange={(e) => setFilter(e.target.value)}
          className="p-2 border rounded-md"
        >
          <option value="All">All</option>
          <option value="Completed">Completed</option>
          <option value="Pending">Pending</option>
        </select>

        <select
          onChange={(e) => setSortBy(e.target.value)}
          className="p-2 border rounded-md"
        >
          <option value="createdAt">Sort by Created Date</option>
          <option value="priority">Sort by Priority</option>
          <option value="deadline">Sort by Deadline</option>
        </select>
      </div>

      {/* Task Cards */}
      <div className="grid gap-4">
        {filteredTasks.map((task) => {
          const isOverdue =
            task.status !== "Completed" &&
            new Date(task.deadline) < today;

          return (
            <div
              key={task.id}
              className="bg-white shadow-md rounded-xl p-4 space-y-2"
            >
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold">{task.title}</h3>
                <div className="flex gap-2 items-center">
                  <span
                    className={`text-sm font-medium ${getPriorityColor(
                      task.priority
                    )}`}
                  >
                    {task.priority}
                  </span>
                  <button
                    onClick={() => setEditTask({ ...task })}
                    className="text-gray-500 hover:text-black"
                  >
                    <Pencil size={16} />
                  </button>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 text-sm text-gray-600 mt-1">
                <div className="flex items-center gap-1">
                  <User size={14} /> {task.assignedTo}
                </div>
                <div className="flex items-center gap-1">
                  <Calendar size={14} /> Created: {task.createdAt}
                </div>
                <div className="flex items-center gap-1">
                  <Clock size={14} />
                  Deadline:{" "}
                  <span className={isOverdue ? "text-red-600 font-bold" : ""}>
                    {task.deadline}
                  </span>
                </div>
                <div>
                  Status:{" "}
                  <span
                    className={`font-semibold ${
                      task.status === "Completed"
                        ? "text-green-600"
                        : "text-yellow-600"
                    }`}
                  >
                    {task.status}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Edit Modal */}
      {editTask && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md space-y-4">
            <h2 className="text-xl font-bold">Edit Task</h2>

            <input
              className="w-full border p-2 rounded"
              value={editTask.title}
              onChange={(e) =>
                setEditTask({ ...editTask, title: e.target.value })
              }
              placeholder="Title"
            />

            <select
              className="w-full border p-2 rounded"
              value={editTask.status}
              onChange={(e) =>
                setEditTask({ ...editTask, status: e.target.value })
              }
            >
              <option value="Pending">Pending</option>
              <option value="Completed">Completed</option>
            </select>

            <select
              className="w-full border p-2 rounded"
              value={editTask.priority}
              onChange={(e) =>
                setEditTask({ ...editTask, priority: e.target.value })
              }
            >
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>

            <input
              className="w-full border p-2 rounded"
              type="date"
              value={editTask.deadline}
              onChange={(e) =>
                setEditTask({ ...editTask, deadline: e.target.value })
              }
            />

            <input
              className="w-full border p-2 rounded"
              value={editTask.assignedTo}
              onChange={(e) =>
                setEditTask({ ...editTask, assignedTo: e.target.value })
              }
              placeholder="Assigned To"
            />

            <div className="flex justify-end gap-2">
              <button
                onClick={() => setEditTask(null)}
                className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;

