import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../Assets/css/Header.css";
import logo from "../Assets/img/segej logo.webp";
// import dropdown_icon from '../Assets/icons/dropdown.webp'
import menu_icon from "../Assets/icons/menu.webp";
import close_icon from "../Assets/icons/close.webp";

const Header = ({userRole}) => {
  
    const nav_links_admin = [
      { page: "Work", link: "/admin" },
      { page: "Photography", link: "/admin/photography" },
      { page: "About", link: "/admin/about" },
    ];


    const nav_links = [
      { page: "Work", link: "/" },
      { page: "Photography", link: "/photography" },
      { page: "About", link: "/about" },
    ];

  const [menu, setmenu] = useState("");
  function toggle_menu() {
    if (menu === "") {
      setmenu("active");
    } else {
      setmenu("");
    }
  }

  return (
    <>
      <nav className={`menu-${menu}`}>
        <div className="logo-container">
          <img src={logo} alt="Sehej" className="logo" />
        </div>
        <div className="menu-btn-container">
          <img
            src={menu === "active" ? close_icon : menu_icon}
            alt="menu"
            className="menu-btn-icon"
            onClick={() => {
              toggle_menu();
            }}
          />
        </div>
        <div className={`menu-container ${menu}`}>
          <ul className="menu-list">
            {userRole==="admin"?(
              nav_links_admin.map((i, index) => {
                return (
                  <li key={index}>
                    <Link
                      className="menu-list-item"
                      to={i.link}
                      onClick={() => {
                        toggle_menu();
                      }}
                    >
                      {i.page}
                    </Link>
                  </li>
                );
              })
            ):( 
              nav_links.map((i, index) => {
              return (
                <li key={index}>
                  <Link
                    className="menu-list-item"
                    to={i.link}
                    onClick={() => {
                      toggle_menu();
                    }}
                  >
                    {i.page}
                  </Link>
                </li>
              );
            }))}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
