import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import profileImg from "../../public/images.png";

const AdminUserCard = ({ user, onEdit, onDelete }) => {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col space-y-4">
      <div className="flex items-center space-x-4">
        <div className="text-lg font-semibold text-gray-300">Name:</div>
        <div className="text-sm text-gray-400">
          {user.firstName} {user.lastName}
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <div className="text-lg font-semibold text-gray-300">Email:</div>
        <div className="text-sm text-gray-400">{user.email}</div>
      </div>
      <div className="flex items-center space-x-4">
        <div className="text-lg font-semibold text-gray-300">Phone:</div>
        <div className="text-sm text-gray-400">{user.phone}</div>
      </div>
      <div className="flex items-center space-x-4">
        <div className="text-lg font-semibold text-gray-300">Role:</div>
        <div className="text-sm text-gray-400">{user.role}</div>
      </div>
      <div className="flex justify-between mt-4">
        <button
          onClick={onEdit}
          className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg"
        >
          <FontAwesomeIcon icon={faUserEdit} /> Edit
        </button>
        <button
          onClick={onDelete}
          className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg"
        >
          <FontAwesomeIcon icon={faTrashAlt} /> Delete
        </button>
      </div>
    </div>
  );
};

export default AdminUserCard;
