import React from "react";
import scss from "./Header.module.scss";
import AppleIcon from "@mui/icons-material/Apple";
import WorkIcon from "@mui/icons-material/Work";
import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import AdminPanel from "../../admin/AdminPanel";
import { Link } from "react-router-dom";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  fontSize: "13.5px",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
  },
}));

const Header = () => {
  return (
    <header className={scss.header}>
      <div className="container">
        <div className={scss.content}>
          <AppleIcon className={scss.logo} />
          <Link to="/list">
            <p>Store</p>
          </Link>
          <p>Mac</p>
          <p>iPad</p>
          <p>iPhone</p>
          <p>Watch</p>
          <p>Vision</p>
          <p>AirPods</p>
          <p>TV & Home</p>
          <p>Entertainment</p>
          <p>Accessories</p>
          <p>Support</p>
          <AdminPanel />
          <Search>
            <SearchIconWrapper>
              <SearchIcon className={scss.search_icon} />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <WorkIcon className={scss.bag} />
        </div>
      </div>
    </header>
  );
};

export default Header;
