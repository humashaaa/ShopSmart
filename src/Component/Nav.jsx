import { Link, NavLink } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const Nav = () => {
  const { user, logOut } = useAuth();
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-500 text-xl font-bold"
                    : "font-bold text-xl  text-black"
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-500 text-xl font-bold"
                    : "font-bold text-xl  text-black"
                }
              >
                Log in
              </NavLink>
              <NavLink
                to="/register"
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-500 text-xl font-bold"
                    : "font-bold text-xl  text-black"
                }
              >
                Register
              </NavLink>
            </ul>
          </div>
          <a className="btn btn-ghost text-2xl font-extrabold">ShopSmart</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-10">
          <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? "text-blue-500 text-xl font-bold"
            : "font-bold text-xl  text-black"
        }
      >
        Home
      </NavLink>
          <NavLink
        to="/login"
        className={({ isActive }) =>
          isActive
            ? "text-blue-500 text-xl font-bold"
            : "font-bold text-xl  text-black"
        }
      >
        Log in
      </NavLink>
          <NavLink
        to="/register"
        className={({ isActive }) =>
          isActive
            ? "text-blue-500 text-xl font-bold"
            : "font-bold text-xl  text-black"
        }
      >
        Register
      </NavLink>
          </ul>
        </div>
        <div className="navbar-end">
          {/* profile */}
          {user ? (
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-11 rounded-full">
                  <img src={user.photo} />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm  dropdown-content mt-3 z-[50] p-2 shadow bg-blue-50 rounded-box md:w-52 w-20"
              >
                <li>
                  <button className="btn btn-sm font-extrabold mb-1  btn-ghost">
                    {user.name || "user name not found"}
                  </button>
                </li>

                <li>
                  <button
                    onClick={logOut}
                    className="btn btn-sm hover:bg-blue-500  bg-blue-400 text-white"
                  >
                    Log out
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <Link
              className="bg-blue-400 md:w-28 w-15 h-10 text-xl btn hover:bg-blue-500 rounded-2xl  text-white font-bold"
              to="/login"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Nav;
