import React from "react";
import Logo from "../Logo/Logo";
import SearchIcon from "@mui/icons-material/Search";
import "./header.css";

const Header = () => {
  return (
    <div className="header-wrapper">
      <div className="container">
        <div className="header"></div>
        <Logo />
        <div className="search">
          <SearchIcon className="search-icon" />
          <input type="text " placeholder="Search" />
        </div>
        <div className="header-lis">
          <a href="/"></a>
        </div>
      </div>
    </div>
  );
};

export default Header;
