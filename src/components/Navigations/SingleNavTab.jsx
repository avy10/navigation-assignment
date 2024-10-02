import { useState } from "react";
import styles from "./NavBar.module.css";
import SubMenu from "./SubMenu";
import { NavLink } from "react-router-dom";

const SingleNavTab = ({ navItem }) => {
  const [anchorElement, setAnchorElement] = useState(null);
  //   const open = Boolean(anchorElement);
  const [open, setOpen] = useState(false);
  const handleClick = (event) => {
    event.stopPropagation();
    setAnchorElement(event.currentTarget);
    // console.log(event.currentTarget);
    setOpen(true);
  };
  const handleClose = (event) => {
    event.stopPropagation();
    console.log("CLOSED");
    setOpen(false);
    setAnchorElement(null);
  };
  return (
    <NavLink
      to={`/${navItem?.url}`}
      className={({ isActive }) => (isActive ? styles.isActive : "")}
      id={navItem?.name == "COOP" ? styles.coop : ""}
      // onClick={handleClick}
      onMouseOver={handleClick}
      onMouseLeave={handleClose}
    >
      {navItem?.name}
      {open && navItem.subMenu.length !== 0 && (
        <SubMenu
          parentURL={navItem?.url}
          anchorElement={anchorElement}
          nestedMenuItems={navItem?.subMenu}
          handleClose={handleClose}
          open={open}
        />
      )}
    </NavLink>
  );
};

export default SingleNavTab;
