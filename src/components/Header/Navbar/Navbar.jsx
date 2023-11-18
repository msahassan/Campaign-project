import { NavLink } from "react-router-dom";
import Logo from "./Logo";



const Navbar = () => {
  return (
    <div>
        
      <nav className="flex items-center justify-between py-4 shadow-md px-5 top-0 bg-transparent z-10">
      <Logo></Logo>
        <ul className="flex items-center gap-5 font-medium text-lg">
            
          <li>
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-red-600 underline" : ""
              }
            >
             Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/donation"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-red-600 underline" : ""
              }
            >
             Donation
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/statistics"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-red-600 underline" : ""
              }
            >
             Statistcs
            </NavLink>
          </li>
        </ul>
      </nav>
      
    </div>
  );
};

export default Navbar;
