import { useState } from "react";
import { Link } from "react-router-dom";
import SignupImage from "../../public/Mobile login-pana (2).svg"; // Adjust path based on your project structure

const Signup = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    phoneNumber: "",
    password: "",
  });
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(" http://localhost:8888/api/user/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to register user");
      }

      const result = await response.json();
      console.log(result);
      setSuccess(true);
      setError(null);
    } catch (error) {
      console.error(error);
      setError(error.message);
    }
  };

  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-wrap w-full max-w-6xl space-y-3 bg-black text-white rounded-xl shadow-lg">
        <div className="hidden md:block md:w-1/2">
          <img
            src={SignupImage}
            alt="Signup Illustration"
            className="object-cover mt-24 w-10/12 rounded-r-lg image-darken"
          />
        </div>
        <div className="w-full md:w-1/2 p-4">
          <h1 className="text-4xl font-bold text-center text-green-700 mb-7">
            Sign Up
          </h1>
          {error && <p className="text-red-500">{error}</p>}
          {success && (
            <p className="text-green-500">User registered successfully!</p>
          )}
          <form noValidate="" onSubmit={handleSubmit} className="space-y-4">
            <div className="flex space-x-4">
              <div className="w-1/2 space-y-1 text-sm">
                <label
                  htmlFor="firstname"
                  className="block text-gray-400 text-left"
                >
                  First Name
                </label>
                <input
                  type="text"
                  name="firstname"
                  id="firstname"
                  className="w-full px-4 py-3 rounded-md border border-gray-300 bg-black text-gray-100 focus:border-green-600"
                  onChange={handleChange}
                />
              </div>
              <div className="w-1/2 space-y-1 text-sm">
                <label
                  htmlFor="lastname"
                  className="block text-gray-400 text-left"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastname"
                  id="lastname"
                  className="w-full px-4 py-3 rounded-md border border-gray-300 bg-black text-gray-100 focus:border-green-600"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="flex space-x-4">
              <div className="w-1/2 space-y-1 text-sm">
                <label
                  htmlFor="username"
                  className="block text-gray-400 text-left"
                >
                  Username
                </label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  placeholder="Username"
                  className="w-full px-4 py-3 rounded-md border border-gray-300 bg-black text-gray-100 focus:border-green-600"
                  onChange={handleChange}
                />
              </div>
              <div className="w-1/2 space-y-1 text-sm">
                <label
                  htmlFor="email"
                  className="block text-gray-400 text-left"
                >
                  Email
                </label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  placeholder="abebe@gmail.com"
                  className="w-full px-4 py-3 rounded-md border border-gray-300 bg-black text-gray-100 focus:border-green-600"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="space-y-1 text-sm">
              <label
                htmlFor="phoneNumber"
                className="block text-gray-400 text-left"
              >
                Phone Number
              </label>
              <input
                type="text"
                name="phoneNumber"
                id="phoneNumber"
                placeholder="+251-93-765-8897"
                className="w-full px-4 py-3 rounded-md border border-gray-300 bg-black text-gray-100 focus:border-green-600"
                onChange={handleChange}
              />
            </div>
            <div className="space-y-1 text-sm pb-5">
              <label
                htmlFor="password"
                className="block text-gray-400 text-left"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="****************"
                className="w-full px-4 py-3 rounded-md border border-gray-300 bg-black text-gray-100 focus:border-green-600"
                onChange={handleChange}
              />
            </div>
            <button
              type="submit"
              className="block w-full p-3 text-center rounded-sm text-gray-300 bg-green-800 hover:bg-green-700"
            >
              Sign Up
            </button>
          </form>
          <div className="flex items-center pt-4 space-x-1">
            <div className="flex-1 h-px sm:w-16 bg-gray-300"></div>
            <p className="px-3 text-sm text-gray-400">
              Login with social accounts
            </p>
            <div className="flex-1 h-px sm:w-16 bg-gray-300"></div>
          </div>
          <div className="flex justify-center space-x-4">
            <button aria-label="Log in with Google" className="p-3 rounded-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                className="w-5 h-5 fill-current text-green-600"
              >
                <path d="M31.937 6.093c-1.177 0.516-2.437 0.871-3.765 1.032 1.355-0.813 2.391-2.099 2.885-3.631-1.271 0.74-2.677 1.276-4.172 1.579-1.192-1.276-2.896-2.079-4.787-2.079-3.625 0-6.563 2.937-6.563 6.557 0 0.521 0.063 1.021 0.172 1.495-5.453-0.255-10.287-2.875-13.52-6.833-0.568 0.964-0.891 2.084-0.891 3.303 0 2.281 1.161 4.281 2.916 5.457-1.073-0.031-2.083-0.328-2.968-0.817v0.079c0 3.181 2.26 5.833 5.26 6.437-0.547 0.145-1.131 0.229-1.724 0.229-0.421 0-0.823-0.041-1.224-0.115 0.844 2.604 3.26 4.5 6.14 4.557-2.239 1.755-5.077 2.801-8.135 2.801-0.521 0-1.041-0.025-1.563-0.088 2.917 1.86 6.36 2.948 10.079 2.948 12.067 0 18.661-9.995 18.661-18.651 0-0.276 0-0.557-0.021-0.839 1.287-0.917 2.401-2.079 3.281-3.396z"></path>
              </svg>
            </button>
            <button aria-label="Log in with GitHub" className="p-3 rounded-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                className="w-5 h-5 fill-current"
              >
                <path d="M16 0.396c-8.839 0-16 7.161-16 16 0 7.067 4.584 13.057 10.938 15.18 0.802 0.151 1.099-0.344 1.099-0.771 0-0.38-0.021-1.385-0.021-2.719-4.464 0.974-5.401-1.084-5.744-2.083-0.181-0.469-0.96-2.083-1.641-2.5-0.561-0.297-1.359-1.021-0.021-1.041 1.261-0.021 2.161 1.161 2.459 1.641 1.445 2.459 3.76 1.771 4.677 1.344 0.141-1.021 0.561-1.771 1.021-2.177-3.958-0.427-8.083-1.979-8.083-8.781 0-1.979 0.713-3.604 1.865-4.875-0.183-0.443-0.82-2.281 0.183-4.755 0 0 1.5-0.48 4.901 1.865 1.42-0.396 2.939-0.599 4.459-0.599s3.041 0.203 4.464 0.599c3.401-2.344 4.901-1.865 4.901-1.865 1.005 2.474 0.369 4.312 0.183 4.755 1.156 1.271 1.865 2.896 1.865 4.875 0 6.823-4.125 8.349-8.068 8.771 0.579 0.5 1.1 1.5 1.1 3.021 0 2.177-0.021 3.938-0.021 4.469 0 0.427 0.297 0.938 1.104 0.771 6.354-2.125 10.938-8.115 10.938-15.18 0-8.839-7.161-16-16-16z"></path>
              </svg>
            </button>
            <button aria-label="Log in with Twitter" className="p-3 rounded-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                className="w-5 h-5 fill-current text-green-600"
              >
                <path d="M31.937 6.093c-1.177 0.516-2.437 0.871-3.765 1.032 1.355-0.813 2.391-2.099 2.885-3.631-1.271 0.74-2.677 1.276-4.172 1.579-1.192-1.276-2.896-2.079-4.787-2.079-3.625 0-6.563 2.937-6.563 6.557 0 0.521 0.063 1.021 0.172 1.495-5.453-0.255-10.287-2.875-13.52-6.833-0.568 0.964-0.891 2.084-0.891 3.303 0 2.281 1.161 4.281 2.916 5.457-1.073-0.031-2.083-0.328-2.968-0.817v0.079c0 3.181 2.26 5.833 5.26 6.437-0.547 0.145-1.131 0.229-1.724 0.229-0.421 0-0.823-0.041-1.224-0.115 0.844 2.604 3.26 4.5 6.14 4.557-2.239 1.755-5.077 2.801-8.135 2.801-0.521 0-1.041-0.025-1.563-0.088 2.917 1.86 6.36 2.948 10.079 2.948 12.067 0 18.661-9.995 18.661-18.651 0-0.276 0-0.557-0.021-0.839 1.287-0.917 2.401-2.079 3.281-3.396z"></path>
              </svg>
            </button>
          </div>
          <p className="text-xs text-center sm:px-6 text-gray-400">
            Already have an account?
            <Link to="/login" className="underline text-green-600 ml-2">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
