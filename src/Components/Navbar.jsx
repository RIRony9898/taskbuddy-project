import { Link, NavLink } from "react-router";
import Container from "../Components/Container";
import { useContext } from "react";
import AuthContext from "../Authentication/AuthContext";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  // const { displayName, email } = user;
  // console.log("from navbar", { email, displayName });

  const handleLogout = () => {
    logout();
  };
  const links = (
    <>
      <li>
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            isActive ? "text-red-500 font-bold" : "text-black"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/about"}
          className={({ isActive }) =>
            isActive ? "text-red-500 font-bold" : "text-black"
          }
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/contact"}
          className={({ isActive }) =>
            isActive ? "text-red-500 font-bold" : "text-black"
          }
        >
          Contact
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="bg-base-200 shadow-md">
      <Container>
        <div className="navbar ">
          <div className="navbar-start">
            {/* dropdown menu for small screen */}
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />{" "}
                </svg>
              </div>
              <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                {links}
              </ul>
            </div>
            {/* app title */}
            <a className="btn btn-ghost text-xl">TaskBuddy</a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{links}</ul>
          </div>
          <div className="navbar-end">
            {/* sign in & sign out button */}
            {user ? (
              <>
                {/* Avatar & email */}
                <div className="flex flex-col md:flex-row items-center gap-1 mr-5">
                  <div className="avatar">
                    <div className="w-12 rounded-full">
                      <img src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp" />
                    </div>
                  </div>
                  <div className="hidden md:flex">
                    <h3>{user.displayName || user.email}</h3>
                  </div>
                </div>
                <Link onClick={handleLogout} to={"/login"} className="btn">
                  Sign out
                </Link>
              </>
            ) : (
              <>
                <Link to={"/login"} className="btn">
                  Sign in
                </Link>
              </>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
