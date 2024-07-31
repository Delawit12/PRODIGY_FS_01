import { useState, useEffect } from "react";
import profileImg from "../../public/images.png";
import { faUser, faPhone, faInbox } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "./Header";

const Profile = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      const user = JSON.parse(localStorage.getItem("user"));

      setUserData(user);
    };

    fetchUsers();
  }, []);

  return (
    <div className="flex flex-col bg-black text-white">
      <Header />
      <div className="flex-grow flex items-center justify-center bg-black px-6 ">
        <div className="flex flex-col items-center w-full max-w-4xl px-10 bg-black text-white rounded-xl shadow-lg">
          <div className="flex flex-col items-center mb-4 relative">
            <img
              src={userData?.profilePicture || profileImg}
              alt="Profile"
              className="w-32 h-32 object-cover rounded-full mb-4 border-4 border-green-300"
            />
            <h1 className="text-4xl font-bold text-green-600 mb-4">
              {userData?.username}
            </h1>
          </div>
          {userData ? (
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg flex items-center space-x-4">
                <FontAwesomeIcon
                  icon={faUser}
                  className="w-6 h-6 text-gray-300"
                />
                <div className="flex-grow flex justify-between">
                  <p className="text-lg font-semibold text-gray-300">
                    First Name:
                  </p>
                  <p className="text-lg uppercase text-gray-400">
                    {userData.firstname}
                  </p>
                </div>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg flex items-center space-x-4">
                <FontAwesomeIcon
                  icon={faUser}
                  className="w-6 h-6 text-gray-300"
                />
                <div className="flex-grow flex justify-between">
                  <p className="text-lg font-semibold text-gray-300">
                    Last Name:
                  </p>
                  <p className="text-lg uppercase text-gray-400">
                    {userData.lastname}
                  </p>
                </div>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg flex items-center space-x-4">
                <FontAwesomeIcon
                  icon={faUser}
                  className="w-6 h-6 text-gray-300"
                />
                <div className="flex-grow flex justify-between">
                  <p className="text-lg font-semibold text-gray-300">
                    username:
                  </p>
                  <p className="text-sm text-gray-400">{userData.username}</p>
                </div>
              </div>

              <div className="bg-gray-800 p-6 rounded-lg shadow-lg flex items-center space-x-4">
                <FontAwesomeIcon
                  icon={faPhone}
                  className="w-6 h-6 text-gray-300"
                />
                <div className="flex-grow flex justify-between">
                  <p className="text-lg font-semibold text-gray-300">Phone:</p>
                  <p className="text-sm text-gray-400">
                    {userData.phoneNumber}
                  </p>
                </div>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg flex items-center space-x-4">
                <FontAwesomeIcon
                  icon={faInbox}
                  className="w-6 h-6 text-gray-300"
                />
                <div className="flex-grow flex justify-between">
                  <p className="text-lg font-semibold text-gray-300">Email:</p>
                  <p className="text-sm text-gray-400">{userData.email}</p>
                </div>
              </div>
            </div>
          ) : (
            <p className="text-gray-400">Loading...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
