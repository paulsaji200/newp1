import React, { useState } from "react";

const DepartmentPage = () => {
  const [departments, setDepartments] = useState([]);
  const [newDept, setNewDept] = useState({ name: "", description: "" });
  const [userToAdd, setUserToAdd] = useState("");
  const [selectedDeptIndex, setSelectedDeptIndex] = useState(null);

  const handleAddDepartment = () => {
    if (!newDept.name.trim()) return alert("Name is required");
    setDepartments([
      ...departments,
      { ...newDept, users: [] }
    ]);
    setNewDept({ name: "", description: "" });
  };

  const handleAddUser = (index) => {
    if (!userToAdd.trim()) return;
    const updated = [...departments];
    if (!updated[index].users.includes(userToAdd)) {
      updated[index].users.push(userToAdd);
    }
    setDepartments(updated);
    setUserToAdd("");
    setSelectedDeptIndex(null);
  };

  const handleRemoveUser = (deptIndex, user) => {
    const updated = [...departments];
    updated[deptIndex].users = updated[deptIndex].users.filter((u) => u !== user);
    setDepartments(updated);
  };

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Department Management</h1>

      {/* Add Department Form */}
      <div className="bg-white shadow-md rounded-xl p-4 space-y-3">
        <h2 className="text-lg font-semibold">Add Department</h2>
        <input
          className="w-full border p-2 rounded"
          placeholder="Department Name"
          value={newDept.name}
          onChange={(e) =>
            setNewDept({ ...newDept, name: e.target.value })
          }
        />
        <textarea
          className="w-full border p-2 rounded"
          placeholder="Description"
          value={newDept.description}
          onChange={(e) =>
            setNewDept({ ...newDept, description: e.target.value })
          }
        ></textarea>
        <button
          onClick={handleAddDepartment}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Add Department
        </button>
      </div>

      {/* Department List */}
      <div className="space-y-4">
        {departments.map((dept, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-xl p-4 space-y-3"
          >
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold">{dept.name}</h3>
              <span className="text-sm text-gray-500">
                {dept.description}
              </span>
            </div>

            {/* Users List */}
            <div className="mt-2 space-y-2">
              <h4 className="font-medium">Users:</h4>
              {dept.users.length > 0 ? (
                <ul className="list-disc pl-5 space-y-1">
                  {dept.users.map((user, uIndex) => (
                    <li key={uIndex} className="flex justify-between">
                      <span>{user}</span>
                      <button
                        onClick={() => handleRemoveUser(index, user)}
                        className="text-red-500 hover:underline text-sm"
                      >
                        Remove
                      </button>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-500 text-sm">No users assigned.</p>
              )}
            </div>

            {/* Add user section */}
            {selectedDeptIndex === index ? (
              <div className="flex gap-2 mt-2">
                <input
                  className="border p-2 rounded flex-1"
                  placeholder="Username"
                  value={userToAdd}
                  onChange={(e) => setUserToAdd(e.target.value)}
                />
                <button
                  onClick={() => handleAddUser(index)}
                  className="bg-green-600 text-white px-4 rounded hover:bg-green-700"
                >
                  Add
                </button>
              </div>
            ) : (
              <button
                onClick={() => setSelectedDeptIndex(index)}
                className="text-blue-600 hover:underline text-sm mt-2"
              >
                Add User
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DepartmentPage;
