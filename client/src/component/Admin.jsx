// Admin.js
import { useState, useEffect } from "react";
import Header from "./Header";
import UserDetailPopup from "./UserDetailPopup";
import EditRolePopup from "./EditRolePopup"; // Import EditRolePopup
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; // Import FontAwesome icons
import axios from "axios";
import { Navigate } from "react-router-dom";

const Admin = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [editingUser, setEditingUser] = useState(null); // State for user being edited
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 8; // Define how many users per page

  // Fetch users data
  useEffect(() => {
    const fetchUsers = async () => {
      const token = localStorage.getItem("token");
      const user = JSON.parse(localStorage.getItem("user"));

      if (!token || user.role !== "admin") {
        Navigate("/login"); // Redirect to login if not authorized
        return;
      }
      try {
        const response = await axios.get(
          "http://localhost:8888/api/user/getAllUser",
          {
            headers: {
              authorization: `${token}`,
            },
          }
        );
        if (response.status === 200) {
          setUsers(response.data.users);
        } else {
          console.error(response.data.message);
        }
      } catch (error) {
        console.error(
          "Error fetching users:",
          error.response ? error.response.data : error.message
        );
      }
    };

    fetchUsers();
  }, []);

  const handleViewDetails = (user) => {
    setSelectedUser(user);
  };

  const handleClosePopup = () => {
    setSelectedUser(null);
    setEditingUser(null);
  };

  const handleEditUser = (user) => {
    setEditingUser(user); // Set the user to be edited
  };

  const handleRoleUpdated = (id, newRole) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user._id === id ? { ...user, role: newRole } : user
      )
    );
  };

  const handleDeleteUser = async (id) => {
    console.log(`Delete user with ID: ${id}`);
    try {
      const token = localStorage.getItem("token");

      const response = await axios.patch(
        `http://localhost:8888/api/user/deleteUser/${id}`,
        {}, // Make sure the request body is not null
        {
          headers: {
            authorization: ` ${token}`,
          },
        }
      );

      if (response.status === 200) {
        console.log(`User with ID: ${id} successfully deactivated`);
        setUsers((prevUsers) => prevUsers.filter((user) => user._id !== id));
      } else {
        console.error(`Failed to deactivate user: ${response.data.message}`);
      }
    } catch (error) {
      console.error(
        "Error deactivating user:",
        error.response ? error.response.data : error.message
      );
    }
  };

  const handleNextPage = () => {
    if (currentPage < Math.ceil(users.length / usersPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  return (
    <div>
      <Header />
      <div className="p-6 bg-black text-white">
        <h1 className="text-3xl font-bold text-green-600 mb-4">Admin Panel</h1>
        <table className="min-w-full bg-gray-900 rounded-lg overflow-hidden">
          <thead>
            <tr className="text-left border-b border-gray-600 text-teal-700">
              <th className="p-4 pl-20">No</th> {/* Added No column */}
              <th className="p-4 pl-20">Name</th>
              <th className="p-4 pl-20">Email</th>
              <th className="p-4 pl-20">Phone</th>
              <th className="p-4 pl-20">Role</th>
              <th className="p-4 pl-20">Status</th>
              <th className="p-4 pl-20">Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentUsers.map((user, index) => (
              <tr
                key={user._id}
                className="border-b border-gray-700 hover:bg-gray-700 cursor-pointer"
                onClick={() => handleViewDetails(user)}
              >
                <td className="p-4">{indexOfFirstUser + index + 1}</td>{" "}
                {/* Display user number */}
                <td className="p-4">{`${user.firstname} ${user.lastname}`}</td>
                <td className="p-4">{user.email}</td>
                <td className="p-4">{user.phoneNumber}</td>
                <td className="p-4">{user.role}</td>
                <td className="p-4">{user.status}</td>
                <td className="p-4">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleEditUser(user);
                    }}
                    className="bg-lime-600 hover:bg-lime-500 text-white py-1 px-3 rounded-lg mr-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDeleteUser(user._id);
                    }}
                    className="bg-rose-800 hover:bg-rose-500 text-white py-1 px-3 rounded-lg"
                  >
                    deactivate
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justify-between items-center mt-4">
          <button
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
            className="bg-transparent hover:bg-gray-400 text-white py-2 px-4 rounded-lg flex items-center"
          >
            <FaChevronLeft /> {/* Previous icon */}
          </button>
          <span className="text-white">
            Page {currentPage} of {Math.ceil(users.length / usersPerPage)}
          </span>
          <button
            onClick={handleNextPage}
            disabled={currentPage === Math.ceil(users.length / usersPerPage)}
            className="bg-transparent hover:bg-gray-400 text-white py-2 px-4 rounded-lg flex items-center"
          >
            <FaChevronRight /> {/* Next icon */}
          </button>
        </div>
      </div>
      {selectedUser && (
        <UserDetailPopup user={selectedUser} onClose={handleClosePopup} />
      )}
      {editingUser && (
        <EditRolePopup
          user={editingUser}
          onClose={handleClosePopup}
          onRoleUpdated={handleRoleUpdated}
        />
      )}
    </div>
  );
};

export default Admin;
