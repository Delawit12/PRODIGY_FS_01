import { useState } from "react";
import newPasswordImg from "../../public/Reset password-cuate (1).svg";

const NewPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match");
    } else {
      setError("");
      // Implement password update logic here
      // On successful password update, redirect to login page or show a success message
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="flex flex-wrap w-full max-w-4xl p-6 bg-black text-white rounded-xl shadow-lg">
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center pr-6">
          <h1 className="text-4xl font-bold text-center text-green-700 mb-5">
            Reset Password
          </h1>
          <form onSubmit={handleSubmit} className="space-y-4  w-full p-2">
            <div className="space-y-1 text-sm">
              <label
                htmlFor="password"
                className="block text-gray-400 text-left pb-1"
              >
                New Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="******************"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-md border border-gray-300 bg-black text-gray-100 focus:border-transparent focus:ring-4 focus:ring-green-600"
                required
              />
            </div>
            <div className="space-y-1 text-sm">
              <label
                htmlFor="confirmPassword"
                className="block text-gray-400 text-left pb-1"
              >
                Confirm New Password
              </label>
              <input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                placeholder="*******************"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-md border border-gray-300 bg-black text-gray-100 focus:border-transparent focus:ring-4 focus:ring-green-600"
                required
              />
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <button
              type="submit"
              className="block w-11/12  p-2 mx-auto text-center rounded-full text-gray-300 bg-green-700 hover:bg-green-700 "
            >
              Update Password
            </button>
          </form>
        </div>
        <div className="hidden md:block md:w-1/2">
          <img
            src={newPasswordImg}
            alt="Password Reset Illustration"
            className="object-cover w-3/4 h-full rounded-r-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default NewPassword;
