import { useState } from "react";
import forgetPasswordImg from "../../public/Forgot password-pana.svg";

const ForgetPassword = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement password recovery logic here, e.g., sending an email
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="flex flex-wrap w-full max-w-4xl p-8 bg-black text-white rounded-xl shadow-lg">
        <div className="hidden md:block md:w-1/2">
          <img
            src={forgetPasswordImg}
            alt="Password Recovery Illustration"
            className="object-cover w-full h-full rounded-r-lg"
          />
        </div>
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center pl-10">
          <h1 className="text-4xl font-bold text-center text-green-600 mb-5">
            Forget Password ?
          </h1>
          <p className="text-sm text-gray-400 mb-4">
            We will send an OTP to your email.
          </p>
          <form onSubmit={handleSubmit} className="space-y-4 w-full">
            <div className="space-y-1 text-sm mb-6">
              <label htmlFor="email" className="block text-left  text-gray-400">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-md border border-gray-300 bg-black text-gray-100 focus:border-green-600"
                required
              />
            </div>
            <button
              type="submit"
              className="block w-full p-3
               text-center rounded-full text-gray-300 bg-green-700 hover:bg-green-800"
            >
              Get OTP
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
