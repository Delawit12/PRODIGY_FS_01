import { useState, useRef } from "react";
import enterOtp from "../../public/Enter OTP-amico.svg";

const GetOTP = () => {
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const inputRefs = useRef([]);

  const handleChange = (element, index) => {
    const value = element.value.replace(/[^0-9]/g, ""); // Ensure only numbers are entered
    if (value.length <= 1) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      if (value && index < 5) {
        inputRefs.current[index + 1].focus(); // Move to next input field
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const otpValue = otp.join("");
    // Implement OTP verification logic here
    // On successful OTP verification, redirect to new password page
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="flex flex-wrap w-full max-w-4xl p-8 bg-black text-white rounded-xl shadow-lg">
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center pl-10 pr-14">
          <h1 className="text-4xl font-bold text-center text-green-700 mb-5">
            Enter OTP
          </h1>
          <p className="text-sm text-gray-400 mb-3">
            An OTP has been sent to your email. Please enter it below.
          </p>
          <form onSubmit={handleSubmit} className="space-y-4 w-full">
            <div className="flex space-x-2 justify-center">
              {otp.map((data, index) => (
                <input
                  key={index}
                  type="text"
                  name="otp"
                  maxLength="1"
                  value={data}
                  onChange={(e) => handleChange(e.target, index)}
                  ref={(el) => (inputRefs.current[index] = el)}
                  className="w-12 h-12 text-center rounded-md border border-gray-300 bg-black text-gray-100 "
                  required
                />
              ))}
            </div>
            <button
              type="submit"
              className="block w-full p-3 text-center rounded-xl text-white bg-green-700 hover:bg-green-800"
            >
              Submit OTP
            </button>
          </form>
        </div>
        <div className="hidden md:block md:w-1/2">
          <img
            src={enterOtp}
            alt="Password Recovery Illustration"
            className="object-cover w-3/4 h-full rounded-r-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default GetOTP;
