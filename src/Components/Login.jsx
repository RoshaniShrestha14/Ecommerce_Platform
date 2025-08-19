import React from "react";

function Login() {
  const handleSubmit = (e) => {
    e.preventDefault(); // prevents page refresh
    console.log("Form Submitted");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-teal-300 via-blue-200 to-pink-200">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Welcome to <span className="text-teal-600">Masala Beads</span>
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Username */}
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-teal-400 focus:outline-none"
              placeholder="Enter your username"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-teal-400 focus:outline-none"
              placeholder="Enter your password"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-teal-500 hover:bg-teal-600 text-white py-2 rounded-lg font-semibold shadow-md transition-all duration-300"
          >
            Login
          </button>
        </form>

        {/* Extra Options */}
        <p className="mt-4 text-center text-sm text-gray-600">
          Don’t have an account?{" "}
          <a
            href="/SignIn"
            className="text-teal-600 font-medium hover:underline"
          >
            SignIn
          </a>
        </p>
      </div>
    </div>
  );
}

export default Login;
