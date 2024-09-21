import React from "react";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <div className="header">
      <h1>CRUD APP</h1>
      <ul className="nav">
        <li className="me-3 ms-3">
          <NavLink to="/" end>Home</NavLink>
        </li>
        <li  className="me-3 ms-3">
          <NavLink to="add" >Add Post</NavLink>
        </li>
        <li  className="me-3 ms-3">
          <NavLink to="post/:id/edit">Edit Post</NavLink>
        </li>
        <li  className="me-3 ms-3">
          <NavLink to="post/:id/" end >Post detail</NavLink>
        </li>
        <li className="login">login</li>
      </ul>
    </div>
  );
};

export default Header;
