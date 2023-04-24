import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/">
              <span className="text-white font-bold uppercase tracking-wider">
                PROPMAN
              </span>
            </Link>
          </div>
          <div className="flex">
            <Link to="/about">
              <span className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                About
              </span>
            </Link>
            <Link to="/signup">
              <span className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Signup
              </span>
            </Link>
            <Link to="/login">
              <span className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Login
              </span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
