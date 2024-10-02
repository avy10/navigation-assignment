import { useState } from "react";

const AppNav = () => {
  return (
    <div>
      This is a nav
      <nav>
        {["Nav A", "Nav B", "Nav C", "Nav D"].map((navName) => (
          <SingleNavTab key={navName} navName={navName} />
        ))}
      </nav>
    </div>
  );
};
export default AppNav;

const SingleNavTab = ({ navName }) => {
  const [open, setOpen] = useState(false);
  const handleHover = () => {
    setOpen(true);
    console.log("OPEN");
  };
  const handleLeave = () => {
    setOpen(false);
    console.log("CLOSE");
  };
  return (
    <div
      style={{
        position: "relative",
        border: "2px solid red",
        padding: "10px",
      }}
      onMouseOver={handleHover}
      onMouseLeave={handleLeave}
    >
      {navName}
      {open && <SubMenu navName={navName} />}
    </div>
  );
};

const SubMenu = ({ navName }) => {
  return (
    <div
      style={{
        position: "relative",
        border: "2px solid black",
      }}
    >
      {["Sub Menu A", "Sub Menu B", "Sub Menu C", "Sub Menu D"].map(
        (subMenu) => (
          <SingleSubMenu key={subMenu} subMenu={subMenu} />
        )
      )}
    </div>
  );
};
const SingleSubMenu = ({ subMenu }) => {
  const [showLevelTwoMenu, setShowLevelTwoMenu] = useState(false);
  const handleHover = () => {
    setShowLevelTwoMenu(true);
    console.log("OPEN");
  };
  const handleLeave = () => {
    setShowLevelTwoMenu(false);
    console.log("CLOSE");
  };
  return (
    <p key={subMenu} onMouseOver={handleHover} onMouseLeave={handleLeave}>
      {subMenu}
      {showLevelTwoMenu && <LevelTwoSubMenu subMenu={subMenu} />}
    </p>
  );
};
const LevelTwoSubMenu = ({ subMenu }) => {
  return (
    <div
      style={{
        position: "absolute",
        left: "150px",
        top: "-20px",
        fontSize: "10px",
        width: "150px",
      }}
    >
      <p>{subMenu} 1</p>
      <p>{subMenu} 2</p>
      <p>{subMenu} 3</p>
      <p>{subMenu} 4</p>
      <p>{subMenu} 5</p>
    </div>
  );
};
