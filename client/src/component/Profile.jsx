import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import profileImg from "../../public/images.png";
import {
  faUser,
  faPhone,
  faCalendar,
  faMapMarkerAlt,
  faBriefcase,
  faCalendarDay,
  faGlobe,
  faPen,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "./Header";

const Profile = () => {
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      setUserData({
        firstName: "John",
        lastName: "Doe",
        gender: "Male",
        phone: "+1234567890",
        age: 30,
        birthdate: "1994-01-01",
        birthplace: "New York",
        workStatus: "Employed",
        address: "123 Main St, New York, NY",
        createdDate: "2024-01-01",
        profilePicture: "", // Add profile picture URL here
      });
    };

    fetchData();
  }, []);

  const handleEditProfile = () => {
    navigate("/edit-profile"); // Redirect to edit profile page
  };

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
              {userData?.firstName} {userData?.lastName}
            </h1>
            <button
              onClick={handleEditProfile}
              className="absolute top-1 right-1 p-2 bg-gray-700 rounded-full border-2 border-green-600 text-green-600 hover:bg-gray-800"
              aria-label="Edit Profile"
            >
              <FontAwesomeIcon icon={faPen} className="w-5 h-5" />
            </button>
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
                  <p className="text-sm text-gray-400">{userData.firstName}</p>
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
                  <p className="text-sm text-gray-400">{userData.lastName}</p>
                </div>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg flex items-center space-x-4">
                <FontAwesomeIcon
                  icon={faCalendar}
                  className="w-6 h-6 text-gray-300"
                />
                <div className="flex-grow flex justify-between">
                  <p className="text-lg font-semibold text-gray-300">Age:</p>
                  <p className="text-sm text-gray-400">{userData.age}</p>
                </div>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg flex items-center space-x-4">
                <FontAwesomeIcon
                  icon={faCalendarDay}
                  className="w-6 h-6 text-gray-300"
                />
                <div className="flex-grow flex justify-between">
                  <p className="text-lg font-semibold text-gray-300">
                    Birthdate:
                  </p>
                  <p className="text-sm text-gray-400">{userData.birthdate}</p>
                </div>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg flex items-center space-x-4">
                <FontAwesomeIcon
                  icon={faGlobe}
                  className="w-6 h-6 text-gray-300"
                />
                <div className="flex-grow flex justify-between">
                  <p className="text-lg font-semibold text-gray-300">
                    Birthplace:
                  </p>
                  <p className="text-sm text-gray-400">{userData.birthplace}</p>
                </div>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg flex items-center space-x-4">
                <FontAwesomeIcon
                  icon={faPhone}
                  className="w-6 h-6 text-gray-300"
                />
                <div className="flex-grow flex justify-between">
                  <p className="text-lg font-semibold text-gray-300">Phone:</p>
                  <p className="text-sm text-gray-400">{userData.phone}</p>
                </div>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg flex items-center space-x-4">
                <FontAwesomeIcon
                  icon={faBriefcase}
                  className="w-6 h-6 text-gray-300"
                />
                <div className="flex-grow flex justify-between">
                  <p className="text-lg font-semibold text-gray-300">
                    Work Status:
                  </p>
                  <p className="text-sm text-gray-400">{userData.workStatus}</p>
                </div>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg flex items-center space-x-4">
                <FontAwesomeIcon
                  icon={faMapMarkerAlt}
                  className="w-6 h-6 text-gray-300"
                />
                <div className="flex-grow flex justify-between">
                  <p className="text-lg font-semibold text-gray-300">
                    Address:
                  </p>
                  <p className="text-sm text-gray-400">{userData.address}</p>
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
