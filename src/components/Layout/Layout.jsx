/* eslint-disable react/prop-types */
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/resume">Resume</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/faq">FAQ</Link>
      </nav>

      <Outlet />
    </div>
  );
};

export default Layout;
