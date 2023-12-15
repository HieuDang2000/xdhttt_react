import { useNavigate } from 'react-router-dom'
import { useState } from "react";
import { logincheck } from "../ulti/login";

export default function Login() {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleSignin = async (e) => {
    e.preventDefault();
    const result = await logincheck(loginData);
    // const result = true
    console.log(result)
    if (result.success) {
      await localStorage.setItem("isAdmin", result.isAdmin === 1);
      await localStorage.setItem("isLogin", true);
      await localStorage.setItem("userid", result.id);
      alert("Login thành công");
      navigate("/");
      window.location.reload();
    } else {
      alert(result.error);
    }
  };
  const handleloginChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="h-[calc(100vh-100px)] flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md w-full sm:w-96">
        <h2 className="text-2xl font-semibold mb-6">Welcome</h2>

        <div className="flex mb-6">
          <button className="flex-1 py-2 px-4 text-center text-gray-600 border-b-2 border-gray-400 focus:outline-none active:border-blue-500">
            Login
          </button>
          <button
            onClick={() => navigate("/signup")}
            className="flex-1 py-2 px-4 text-center text-gray-600 border-b-2 border-gray-200 focus:outline-none"
          >
            Signup
          </button>
        </div>
        <form onSubmit={handleSignin}>
          <div className="mb-4">
            <label
              for="email"
              className="block text-sm font-medium text-gray-600"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              onChange={handleloginChange}
            />
            {""}
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
              onChange={handleloginChange}
            />
            {""}
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
}
