import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faSignOutAlt,
  faUserShield,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const MenuPopup = ({ onClose }) => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = async () => {
    try {
      const response = await axios.get(
        " http://localhost:8888/api/user/logout"
      );
      console.log(response);
      if (response.status === 200) {
        console.log("Logout successful");
        // Redirect to login page or home page
        navigate("/login");
      } else {
        console.error("Logout failed");
      }
    } catch (error) {
      console.error("An error occurred during logout", error);
    }
  };

  return (
    <div className="fixed top-16 left-30 text-white p-3 rounded-lg shadow-lg z-50 bg-transparent">
      <button
        onClick={onClose}
        className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
        aria-label="Close"
      >
        &times;
      </button>
      <ul className="space-y-2">
        <li>
          <button
            onClick={() => {
              navigate("/profile");
              onClose();
            }}
            className="flex items-center space-x-2"
          >
            <FontAwesomeIcon icon={faUser} className="w-6 h-6 text-green-400" />
            <span>Profile</span>
          </button>
        </li>
        {user && user.role === "admin" && (
          <li>
            <button
              onClick={() => {
                navigate("/admin");
                onClose();
              }}
              className="flex items-center space-x-2"
            >
              <FontAwesomeIcon
                icon={faUserShield}
                className="w-6 h-6 text-green-400"
              />
              <span>Admin Panel</span>
            </button>
          </li>
        )}

        <li>
          <button
            onClick={handleLogout}
            className="flex items-center space-x-2"
          >
            <FontAwesomeIcon
              icon={faSignOutAlt}
              className="w-6 h-6 text-green-400"
            />
            <span>Logout</span>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default MenuPopup;
