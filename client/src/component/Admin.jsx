import { useState, useEffect } from "react";
import Header from "./Header";
import UserDetailPopup from "./UserDetailPopup";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; // Import FontAwesome icons

const Admin = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 8; // Define how many users per page

  // Mock fetch users data
  useEffect(() => {
    const fetchUsers = async () => {
      setUsers([
        // Your mock users data
        {
          id: 1,
          firstName: "John",
          lastName: "Doe",
          email: "john.doe@example.com",
          phone: "+1234567890",
          role: "User",
          profilePic: "../../public/images.png", // add profile pic path
        },
        {
          id: 2,
          firstName: "Jane",
          lastName: "Smith",
          email: "jane.smith@example.com",
          phone: "+0987654321",
          role: "Admin",
          profilePic: "../../public/images.png", // add profile pic path
        },
        // Add more mock users here...
      ]);
    };

    fetchUsers();
  }, []);

  const handleViewDetails = (user) => {
    setSelectedUser(user);
  };

  const handleClosePopup = () => {
    setSelectedUser(null);
  };

  const handleEditUser = (id) => {
    console.log(`Edit user with ID: ${id}`);
    // Implement edit user logic
  };

  const handleDeleteUser = (id) => {
    console.log(`Delete user with ID: ${id}`);
    // Implement delete user logic
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
              <th className="p-4 pl-20">Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentUsers.map((user, index) => (
              <tr
                key={user.id}
                className="border-b border-gray-700 hover:bg-gray-700 cursor-pointer"
                onClick={() => handleViewDetails(user)}
              >
                <td className="p-4">{indexOfFirstUser + index + 1}</td>{" "}
                {/* Display user number */}
                <td className="p-4">{`${user.firstName} ${user.lastName}`}</td>
                <td className="p-4">{user.email}</td>
                <td className="p-4">{user.phone}</td>
                <td className="p-4">{user.role}</td>
                <td className="p-4">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleEditUser(user.id);
                    }}
                    className="bg-lime-600 hover:bg-lime-500 text-white py-1 px-3 rounded-lg mr-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDeleteUser(user.id);
                    }}
                    className="bg-rose-800 hover:bg-rose-500 text-white py-1 px-3 rounded-lg"
                  >
                    Remove
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
    </div>
  );
};

export default Admin;
