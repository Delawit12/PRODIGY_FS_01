import { Link } from "react-router-dom";
import "../home.css"; // Adjust the path to your CSS file

const Home = () => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-black">
      {[...Array(15)].map((_, i) => (
        <div key={i} className="particle"></div>
      ))}

      <header className="text-center mb-8 relative z-10">
        <div className="logo-container">
          <img
            src="../../public/Welcome-cuate-removebg-preview.png"
            alt="Your Logo"
            className=" w-48 mx-auto transition-transform transform hover:scale-110 duration-300"
          />
          <div className="logo-overlay"></div>
        </div>
        <h1 className="text-5xl font-extrabold mt-4 text-green-700">
          Welcome to YourApp
        </h1>
        <p className="mt-4 text-lg text-gray-300">
          Register and log in to manage your profile. Admins can manage all
          users.
        </p>
      </header>

      <div className="space-y-6 relative z-10">
        <div>
          <Link
            to="/signup"
            className="block px-6 py-3 w-full max-w-xs font-semibold text-gray-300 bg-green-700 rounded-md shadow-md hover:bg-green-600 hover:shadow-lg transition-all duration-300 text-center"
          >
            Sign Up
          </Link>
        </div>
        <div>
          <Link
            to="/login"
            className="block px-6 py-3 w-full max-w-xs font-semibold text-gray-300 bg-green-800 rounded-md shadow-md hover:bg-green-700 hover:shadow-lg transition-all duration-300 text-center"
          >
            Log In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
