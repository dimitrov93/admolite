import React from "react";
import "./menu.scss";
import { Link } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";

const Menu = () => {
  const { user } = useAuthContext();

  return (
    <ul>
      <li>
        <Link to={"/"}>Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/gallery">Gallery</Link>
      </li>
      {!user.email ? (
        <li>
          <Link to={"/login"}>Login</Link>
        </li>
      ) : (
        <li>
          <Link to={"/logout"}>LogOut</Link>
        </li>
      )}

      <li>
        <Link to={"/contacts"}>Contacts</Link>
      </li>
    </ul>
  );
};

export default Menu;
