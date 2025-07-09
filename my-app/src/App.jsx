import React from 'react'
import TaskDashboard from './pages/dash'
import DepartmentPage from './pages/depart'
import UserDashboard from './pages/user'
   
const App = () => {
  return (
    <UserDashboard/>

// <form class="max-w-sm mx-auto">
//   <div class="mb-5">
//     <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
//     <input type="email" id="email" class="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light" placeholder="name@flowbite.com" required />
//   </div>
//   <div class="mb-5">
//     <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
//     <input type="password" id="password" class="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light" required />
//   </div>
//   <div class="mb-5">
//     <label for="repeat-password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Repeat password</label>
//     <input type="password" id="repeat-password" class="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light" required />
//   </div>
//   <div class="flex items-start mb-5">
//    <label for="priority" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select your country</label>
//   <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">

//     <option>United States</option>
//     <option>Canada</option>
//     <option>France</option>
//     <option>Germany</option>
//   </select> 
   
//   </div>
//   <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Register new account</button>
// </form>

  )
}

export default App




// import React, { useState } from 'react';

// const App = () => {
//   const [formData, setFormData] = useState({
//     taskName: '',
//     priority: '',
//     assignedUser: '',
//     dueDate: '',
//     status: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Submitted Task:', formData);
//     // You can send it to backend or reset the form
//   };

//   return (
//     <form
//       onSubmit={handleSubmit}
//       className="max-w-sm mx-auto bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
//     >
//       <h2 className="text-lg font-bold mb-4 text-gray-900 dark:text-white">
//         Add New Task
//       </h2>

//       {/* Task Name */}
//       <div className="mb-4">
//         <label
//           htmlFor="taskName"
//           className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//         >
//           Task Name
//         </label>
//         <input
//           type="text"
//           id="taskName"
//           name="taskName"
//           value={formData.taskName}
//           onChange={handleChange}
//           placeholder="Enter task name"
//           required
//           className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 
//           dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
//         />
//       </div>

//       {/* Priority */}
//       <div className="mb-4">
//         <label
//           htmlFor="priority"
//           className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//         >
//           Priority
//         </label>
//         <select
//           id="priority"
//           name="priority"
//           value={formData.priority}
//           onChange={handleChange}
//           required
//           className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 
//           dark:bg-gray-700 dark:border-gray-600 dark:text-white"
//         >
//           <option value="">Select Priority</option>
//           <option value="Low">Low</option>
//           <option value="Medium">Medium</option>
//           <option value="High">High</option>
//         </select>
//       </div>

//       {/* Assigned To */}
//       <div className="mb-4">
//         <label
//           htmlFor="assignedUser"
//           className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//         >
//           Assign To
//         </label>
//         <input
//           type="text"
//           id="assignedUser"
//           name="assignedUser"
//           value={formData.assignedUser}
//           onChange={handleChange}
//           placeholder="Enter username"
//           required
//           className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 
//           dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
//         />
//       </div>

//       {/* Due Date */}
//       <div className="mb-4">
//         <label
//           htmlFor="dueDate"
//           className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//         >
//           Due Date
//         </label>
//         <input
//           type="date"
//           id="dueDate"
//           name="dueDate"
//           value={formData.dueDate}
//           onChange={handleChange}
//           required
//           className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 
//           dark:bg-gray-700 dark:border-gray-600 dark:text-white"
//         />
//       </div>

//       {/* Status */}
//       <div className="mb-4">
//         <label
//           htmlFor="status"
//           className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//         >
//           Status
//         </label>
//         <select
//           id="status"
//           name="status"
//           value={formData.status}
//           onChange={handleChange}
//           required
//           className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 
//           dark:bg-gray-700 dark:border-gray-600 dark:text-white"
//         >
//           <option value="">Select Status</option>
//           <option value="Pending">Pending</option>
//           <option value="In Progress">In Progress</option>
//           <option value="In Review">In Review</option>
//           <option value="Completed">Completed</option>
//         </select>
//       </div>

//       {/* Submit Button */}
//       <button
//         type="submit"
//         className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center 
//         dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//       >
//         Submit Task
//       </button>
//     </form>
//   );
// };

// export default App;
