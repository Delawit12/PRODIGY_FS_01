import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const UserDetailPopup = ({ user, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-white w-96 relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
          aria-label="Close"
        >
          <FontAwesomeIcon icon={faTimes} className="w-6 h-6" />
        </button>
        <div className="text-center mb-4">
          <img
            src={user.profilePic}
            alt={`${user.firstName} ${user.lastName}`}
            className="w-24 h-24 rounded-full mx-auto mb-4"
          />
          <h2 className="text-2xl font-bold">{`${user.firstName} ${user.lastName}`}</h2>
          <p className="text-sm text-gray-400">{user.email}</p>
          <p className="text-sm text-gray-400">{user.phone}</p>
          <p className="text-sm text-gray-400">{user.role}</p>
        </div>
      </div>
    </div>
  );
};

export default UserDetailPopup;
