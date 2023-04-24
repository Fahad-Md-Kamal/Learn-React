import * as React from "react";

export default function Signup() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      username: data.get("username"),
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <div className="max-w-md mx-auto my-4 p-6 bg-white rounded-md shadow-md">
      <h2 className="text-center text-2xl font-medium mb-4">Signup</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block font-medium mb-2" htmlFor="username">
            Username
          </label>
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            type="text"
            id="username"
            name="username"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block font-medium mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            type="email"
            id="email"
            name="email"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block font-medium mb-2" htmlFor="password">
            Password
          </label>
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            type="password"
            id="password"
            name="password"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block font-medium mb-2" htmlFor="confirm-password">
            Confirm Password
          </label>
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            type="password"
            id="confirm-password"
            name="confirm-password"
            required
          />
        </div>
        <div className="mb-4">
          <input
            className="mr-2 leading-tight"
            type="checkbox"
            id="terms-and-conditions"
            name="terms-and-conditions"
            required
          />
          <label className="text-sm" htmlFor="terms-and-conditions">
            I agree to the{" "}
            <a className="text-blue-500 hover:underline" href="#">
              Terms and Conditions
            </a>
          </label>
        </div>
        <button
          className="w-full px-4 py-2 text-white font-medium bg-blue-500 rounded-md hover:bg-blue-600 transition duration-200"
          type="submit"
        >
          Signup
        </button>
      </form>
    </div>
  );
}
