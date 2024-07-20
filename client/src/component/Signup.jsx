import { Link } from "react-router-dom";
import SignupImage from "../../public/Mobile login-pana (2).svg"; // Adjust path based on your project structure
import "./signup.css";

const Signup = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-wrap w-full max-w-6xl space-y-3 bg-black text-white rounded-xl shadow-lg">
        <div className="hidden md:block md:w-1/2">
          <img
            src={SignupImage}
            alt="Signup Illustration"
            className="object-cover w-full h-full rounded-r-lg image-darken"
          />
        </div>
        <div className="w-full md:w-1/2 p-4">
          <h1 className="text-4xl font-bold text-center text-green-700 mb-7">
            Sign Up
          </h1>
          <form noValidate="" action="" className="space-y-4">
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
              />
            </div>
            <div className="space-y-1 text-sm">
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
              />
              <div className="flex justify-end text-xs text-gray-400">
                <a rel="noopener noreferrer" href="#">
                  Forgot Password?
                </a>
              </div>
            </div>
            <button
              type="button"
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
                <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.348 1.093-0.772v-2.84c-4.468 0.969-5.413-2.166-5.413-2.166-0.731-1.85-1.779-2.342-1.779-2.342-1.453-0.993 0.109-0.973 0.109-0.973 1.606 0.115 2.448 1.652 2.448 1.652 1.428 2.448 3.749 1.742 4.672 1.333 0.146-1.032 0.559-1.742 1.017-2.142-3.564-0.403-7.33-1.783-7.33-7.936 0-1.756 0.628-3.196 1.656-4.322-0.166-0.403-0.719-2.023 0.158-4.219 0 0 1.352-0.434 4.425 1.654 1.291-0.358 2.68-0.538 4.065-0.545 1.387 0.007 2.78 0.189 4.072 0.546 3.075-2.087 4.422-1.654 4.422-1.654 0.88 2.196 0.323 3.816 0.157 4.219 1.029 1.126 1.657 2.566 1.657 4.322 0 6.16-3.769 7.533-7.347 7.927 0.578 0.496 1.091 1.474 1.091 2.963v4.417c0 0.424 0.29 0.927 1.105 0.773 6.358-2.117 10.929-8.106 10.929-15.16 0-8.279-7.161-15-16-15z"></path>
              </svg>
            </button>
          </div>
          <div className="flex justify-center mt-4">
            <p className="text-sm text-gray-400">
              Already have an account?{" "}
              <Link
                to="/login"
                className="font-medium text-green-600 hover:underline"
              >
                Log in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
