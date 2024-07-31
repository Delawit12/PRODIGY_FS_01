// EditRolePopup.js
import React, { useState } from "react";
import axios from "axios";

const EditRolePopup = ({ users, user, onClose, onRoleUpdated }) => {
  const [role, setRole] = useState(user.role);
  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };
  const params = user._id;

  const handleSave = async () => {
    try {
      const token = localStorage.getItem("token");
      const user = localStorage.getItem("user");
      const response = await axios.patch(
        `http://localhost:8888/api/user/updateUser/${params}`,
        { role },
        {
          headers: {
            authorization: `${token}`,
          },
        }
      );

      if (response.status === 200) {
        onRoleUpdated(user._id, role);
        onClose();
      } else {
        console.error(response.data.message);
      }
    } catch (error) {
      console.error(
        "Error updating role:",
        error.response ? error.response.data : error.message
      );
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-gray-600 p-6 rounded-3xl shadow-lg">
        <h2 className="text-xl font-bold mb-4">Edit Role</h2>
        <div className="mb-4">
          <label className="block text-gray-300 text-sm font-bold mb-2">
            Role
          </label>
          <select
            value={role}
            onChange={handleRoleChange}
            className="w-full p-2 border bg-blue-950 rounded-lg"
          >
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
        </div>
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="bg-gray-500 hover:bg-gray-400 text-white py-2 px-4 rounded mr-2"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="bg-green-500 hover:bg-green-400 text-gray-100 py-2 px-4 rounded"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditRolePopup;
