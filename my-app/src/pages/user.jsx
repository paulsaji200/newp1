import React, { useState } from "react";
import { Calendar, Clock } from "lucide-react";

// Fake logged-in user (simulate auth)
const loggedInUser = "Alice";

// All tasks
const allTasks = [
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

const UserDashboard = () => {
  const [tasks, setTasks] = useState(
    allTasks.filter((task) => task.assignedTo === loggedInUser)
  );

  const today = new Date();

  const updateStatus = (id, newStatus) => {
    const updated = tasks.map((t) =>
      t.id === id ? { ...t, status: newStatus } : t
    );
    setTasks(updated);
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

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Welcome, {loggedInUser}</h1>
      <h2 className="text-lg font-semibold text-gray-600">Your Tasks</h2>

      <div className="grid gap-4">
        {tasks.length === 0 && <p>No tasks assigned to you.</p>}
        {tasks.map((task) => {
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
                <span
                  className={`text-sm font-medium ${getPriorityColor(
                    task.priority
                  )}`}
                >
                  {task.priority}
                </span>
              </div>

              <div className="flex flex-wrap gap-4 text-sm text-gray-600 mt-1">
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

              {/* Update Status */}
              <div className="mt-3">
                <label className="text-sm mr-2">Update Status:</label>
                <select
                  value={task.status}
                  onChange={(e) => updateStatus(task.id, e.target.value)}
                  className="p-2 border rounded-md"
                >
                  <option>Pending</option>
                  <option>Completed</option>
                </select>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UserDashboard;
