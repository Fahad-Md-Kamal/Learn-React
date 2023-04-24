export default function SignIn() {
  return (
    <>
      <div className="max-w-md mx-auto my-4 p-6 bg-white rounded-md shadow-md">
        <h2 className="text-center text-2xl font-medium mb-4">LOGIN</h2>
        <form>
          <div className="mb-4">
            <label className="block font-medium mb-2" htmlFor="username">
              Username
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              type="text"
              id="username"
              name="username"
              placeholder="nimbus777"
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
              placeholder="*****"
            />
          </div>
          <div className="flex items-center mb-4">
            <input
              className="mr-2 leading-tight"
              type="checkbox"
              id="rememberMe"
              name="rememberMe"
            />
            <label className="block font-medium text-sm" htmlFor="rememberMe">
              Remember Me
            </label>
          </div>
          <button className="w-full px-4 py-2 text-white font-medium bg-blue-500 rounded-md hover:bg-blue-600 transition duration-200">
            Login
          </button>
        </form>
      </div>
    </>
  );
}
