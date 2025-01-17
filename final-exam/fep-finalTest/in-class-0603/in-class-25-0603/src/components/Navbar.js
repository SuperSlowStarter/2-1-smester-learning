import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/bangiwan">소개</Link>
        </li>
        <li>
          <Link to="/contact">연락처</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
