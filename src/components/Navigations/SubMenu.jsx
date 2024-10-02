import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { NavLink } from "react-router-dom";
// nestedMenuItems={navItem?.subMenu}
import styles from "./SubMenu.module.css";
import { useState } from "react";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
const SubMenu = ({
  nestedMenuItems,
  anchorElement,
  handleClose,
  open,
  parentURL,
}) => {
  const [subAnchorElement, setSubAnchorElement] = useState(null);
  const [subAnchorOpen, setSubAnchorOpen] = useState(false);
  const handleSubAnchorClick = (event) => {
    event.stopPropagation();
    setSubAnchorElement(event.currentTarget);
    console.log(event.currentTarget);
    setSubAnchorOpen(true);
  };
  const handleSubAnchorClose = (event) => {
    event.stopPropagation();
    setSubAnchorOpen(false);
    setSubAnchorElement(null);
  };
  return (
    <>
      <Menu
        id="basic-menu"
        anchorEl={anchorElement}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        className={styles?.singleNavMenu}
      >
        {/* <MenuItem onClick={handleClose} key={index}> */}
        {nestedMenuItems.map((subMenuItem, index) => (
          <MenuItem key={index}>
            <NavLink
              to={`/${parentURL}/${subMenuItem?.url}`}
              className="flex-center-center"
            >
              {subMenuItem?.subMenuName}
              {subMenuItem?.subMenu.length !== 0 && (
                <ArrowRightIcon sx={{ color: "aqua" }} />
              )}
            </NavLink>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default SubMenu;
