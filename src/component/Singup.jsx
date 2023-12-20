import { useNavigate } from "react-router-dom";

import { useState } from "react";
import { sheetName } from "../ulti/nameVariable";
import { addData } from "../ulti/addData";

export default function Signup() {
  const navigate = useNavigate();
  const [signupData, setSignupData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const handlesignupChange = (e) => {
    setSignupData({
      ...signupData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSignup = async (e) => {
    e.preventDefault();
    const { password, confirmPassword, email } = signupData;
    console.log(password, confirmPassword, email);
    if (password !== confirmPassword) {
      alert("Mật khẩu không trùng");
    } else {
      const res = await addData({ name: sheetName.User, values: [email, password] })
      console.log(res);
      if (res.success) {
        alert(res.success);
        navigate("/login");
      } else {
        alert(res.error);
      }
    }
  };
  return (
    <div className="h-[calc(100vh-100px)] flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md w-full sm:w-96">
        <h2 className="text-2xl font-semibold mb-6">Welcome</h2>

        <div className="flex mb-6">
          <button
            onClick={() => navigate("/login")}
            className="flex-1 py-2 px-4 text-center text-gray-600 border-b-2 border-gray-200 focus:outline-none active:border-blue-500"
          >
            Login
          </button>
          <button className="flex-1 py-2 px-4 text-center text-gray-600 border-b-2 border-gray-400 focus:outline-none">
            Signup
          </button>
        </div>
        <form onSubmit={handleSignup}>
          <div className="mb-4">
            <label
              for="email"
              className="block text-sm font-medium text-gray-600"
            >
              Username
            </label>
            <input
              type="text"
              id="email"
              name="email"
              className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              onChange={handlesignupChange}
            />
          </div>

          <div className="mb-6">
            <label
              for="password"
              className="block text-sm font-medium text-gray-600"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              onChange={handlesignupChange}
            />{" "}
          </div>
          <div className="mb-6">
            <label
              for="confirmPassword"
              className="block text-sm font-medium text-gray-600"
            >
              Confirm confirmPassword
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              onChange={handlesignupChange}
            />{" "}
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
}
