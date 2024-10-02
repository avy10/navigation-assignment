/* import { useState } from "react";
import { Box, Typography } from "@mui/material";

const AppNavMUI = () => {
  return (
    <Box>
      <Typography variant="h6">This is a nav</Typography>
      <nav>
        {["Nav A", "Nav B", "Nav C", "Nav D"].map((navName) => (
          <SingleNavTab key={navName} navName={navName} />
        ))}
      </nav>
    </Box>
  );
};

export default AppNavMUI;

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
    <Box
      position="relative"
      border="2px solid red"
      padding="10px"
      onMouseOver={handleHover}
      onMouseLeave={handleLeave}
    >
      {navName}
      {open && <SubMenu navName={navName} />}
    </Box>
  );
};

const SubMenu = ({ navName }) => {
  return (
    <Box position="relative" border="2px solid black">
      {["Sub Menu A", "Sub Menu B", "Sub Menu C", "Sub Menu D"].map(
        (subMenu) => (
          <SingleSubMenu key={subMenu} subMenu={subMenu} />
        )
      )}
    </Box>
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
    <Typography onMouseOver={handleHover} onMouseLeave={handleLeave}>
      {subMenu}
      {showLevelTwoMenu && <LevelTwoSubMenu subMenu={subMenu} />}
    </Typography>
  );
};

const LevelTwoSubMenu = ({ subMenu }) => {
  return (
    <Box
      position="absolute"
      left="150px"
      top="-20px"
      fontSize="10px"
      width="150px"
    >
      <Typography>{subMenu} 1</Typography>
      <Typography>{subMenu} 2</Typography>
      <Typography>{subMenu} 3</Typography>
      <Typography>{subMenu} 4</Typography>
      <Typography>{subMenu} 5</Typography>
    </Box>
  );
};
 */

// with accessibility
/* aria-label Attributes:

    Added aria-label attributes to components to provide descriptive labels for screen readers, enhancing their usability for visually impaired users.

Role Attributes:

    Added role attributes such as button, menu, menuitem to define the roles of the components in the accessibility tree. This helps assistive technologies understand the purpose of these elements.

aria-haspopup and aria-expanded:

    In SingleNavTab, aria-haspopup="true" indicates that the button has a menu that can be opened. The aria-expanded attribute reflects whether the menu is currently open.

Keyboard Accessibility:

    Added tabIndex={0} to make the SingleNavTab focusable.
    Implemented a key press handler to allow users to activate the hover effect using the keyboard (Enter or Space key).

Menu Roles:

    The SubMenu and LevelTwoSubMenu components have been assigned a role="menu" to inform assistive technologies that these elements are menus.

Menu Item Roles:

    Each submenu item has role="menuitem" which helps to indicate that these are items in a menu. */

/* import { useState } from "react";
import { Box, Typography } from "@mui/material";

const AppNav = () => {
  return (
    <Box>
      <Typography variant="h6" aria-label="Navigation Menu">
        This is a nav
      </Typography>
      <nav aria-label="Main navigation">
        {["Nav A", "Nav B", "Nav C", "Nav D"].map((navName) => (
          <SingleNavTab key={navName} navName={navName} />
        ))}
      </nav>
    </Box>
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
    <Box
      role="button"
      aria-haspopup="true"
      aria-expanded={open}
      position="relative"
      border="2px solid red"
      padding="10px"
      onMouseOver={handleHover}
      onMouseLeave={handleLeave}
      tabIndex={0} // Make it focusable
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          if (open) {
            handleLeave();
          } else {
            handleHover();
          }
        }
      }}
      aria-label={`Navigation item: ${navName}`} // Adding aria-label
    >
      <Typography>{navName}</Typography>
      {open && <SubMenu navName={navName} />}
    </Box>
  );
};

const SubMenu = ({ navName }) => {
  return (
    <Box
      role="menu" // Role indicating this is a menu
      position="relative"
      border="2px solid black"
      aria-label={`Submenu for ${navName}`} // Adding aria-label
    >
      {["Sub Menu A", "Sub Menu B", "Sub Menu C", "Sub Menu D"].map(
        (subMenu) => (
          <SingleSubMenu key={subMenu} subMenu={subMenu} />
        )
      )}
    </Box>
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
    <Box
      role="menuitem" // Role indicating this is a menu item
      onMouseOver={handleHover}
      onMouseLeave={handleLeave}
      aria-label={`Submenu item: ${subMenu}`} // Adding aria-label
    >
      <Typography>{subMenu}</Typography>
      {showLevelTwoMenu && <LevelTwoSubMenu subMenu={subMenu} />}
    </Box>
  );
};

const LevelTwoSubMenu = ({ subMenu }) => {
  return (
    <Box
      role="menu" // Role indicating this is a menu
      position="absolute"
      left="150px"
      top="-20px"
      fontSize="10px"
      width="150px"
      aria-label={`Level 2 submenu for ${subMenu}`} // Adding aria-label
    >
      <Typography role="menuitem" aria-label={`${subMenu} item 1`}>
        {subMenu} 1
      </Typography>
      <Typography role="menuitem" aria-label={`${subMenu} item 2`}>
        {subMenu} 2
      </Typography>
      <Typography role="menuitem" aria-label={`${subMenu} item 3`}>
        {subMenu} 3
      </Typography>
      <Typography role="menuitem" aria-label={`${subMenu} item 4`}>
        {subMenu} 4
      </Typography>
      <Typography role="menuitem" aria-label={`${subMenu} item 5`}>
        {subMenu} 5
      </Typography>
    </Box>
  );
};
 */

/* import { useState } from "react";
import { Box, Typography } from "@mui/material";

const AppNav = () => {
  return (
    <Box>
      <Typography variant="h6" aria-label="Navigation Menu">
        This is a nav
      </Typography>
      <nav aria-label="Main navigation">
        {["Nav A", "Nav B", "Nav C", "Nav D"].map((navName) => (
          <SingleNavTab key={navName} navName={navName} />
        ))}
      </nav>
    </Box>
  );
};
export default AppNav;

const SingleNavTab = ({ navName }) => {
  const [open, setOpen] = useState(false);

  const handleHover = () => setOpen(true);
  const handleLeave = () => setOpen(false);
  const handleKeyPress = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      setOpen((prev) => !prev);
    } else if (e.key === "Escape") {
      setOpen(false);
    }
  };

  return (
    <Box
      component="button"
      position="relative"
      border="2px solid red"
      padding="10px"
      aria-haspopup="true"
      aria-expanded={open}
      onMouseOver={handleHover}
      onMouseLeave={handleLeave}
      onKeyDown={handleKeyPress}
      tabIndex={0}
      aria-controls={`submenu-${navName}`}
      aria-label={`Navigation item: ${navName}`}
    >
      <Typography>{navName}</Typography>
      {open && <SubMenu navName={navName} />}
    </Box>
  );
};

const SubMenu = ({ navName }) => {
  const [activeIndex, setActiveIndex] = useState(-1);

  const handleKeyDown = (e, index) => {
    const totalItems = 4; // Number of submenu items
    switch (e.key) {
      case "ArrowDown":
        setActiveIndex((prevIndex) => (prevIndex + 1) % totalItems);
        break;
      case "ArrowUp":
        setActiveIndex(
          (prevIndex) => (prevIndex - 1 + totalItems) % totalItems
        );
        break;
      case "Escape":
        setActiveIndex(-1);
        break;
      default:
        break;
    }
  };

  return (
    <Box
      role="menu"
      aria-label={`Submenu for ${navName}`}
      id={`submenu-${navName}`}
      aria-labelledby={`submenu-${navName}`}
      position="relative"
      border="2px solid black"
    >
      {["Sub Menu A", "Sub Menu B", "Sub Menu C", "Sub Menu D"].map(
        (subMenu, index) => (
          <SingleSubMenu
            key={subMenu}
            subMenu={subMenu}
            active={activeIndex === index}
            handleKeyDown={(e) => handleKeyDown(e, index)}
          />
        )
      )}
    </Box>
  );
};

const SingleSubMenu = ({ subMenu, active, handleKeyDown }) => {
  const [showLevelTwoMenu, setShowLevelTwoMenu] = useState(false);

  const handleHover = () => setShowLevelTwoMenu(true);
  const handleLeave = () => setShowLevelTwoMenu(false);
  const handleKeyPress = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      setShowLevelTwoMenu((prev) => !prev);
    } else if (e.key === "Escape") {
      setShowLevelTwoMenu(false);
    }
  };

  return (
    <Box
      role="menuitem"
      tabIndex={0}
      aria-haspopup="true"
      aria-expanded={showLevelTwoMenu}
      aria-label={`Submenu item: ${subMenu}`}
      onMouseOver={handleHover}
      onMouseLeave={handleLeave}
      onKeyDown={handleKeyDown}
      onKeyPress={handleKeyPress}
      style={{ backgroundColor: active ? "#f0f0f0" : "transparent" }}
    >
      <Typography>{subMenu}</Typography>
      {showLevelTwoMenu && <LevelTwoSubMenu subMenu={subMenu} />}
    </Box>
  );
};

const LevelTwoSubMenu = ({ subMenu }) => {
  return (
    <Box
      role="menu"
      aria-label={`Level 2 submenu for ${subMenu}`}
      position="absolute"
      left="150px"
      top="-20px"
      fontSize="10px"
      width="150px"
    >
      {["1", "2", "3", "4", "5"].map((item, index) => (
        <Typography
          key={`${subMenu}-${index}`}
          role="menuitem"
          tabIndex={0}
          aria-label={`${subMenu} item ${item}`}
        >
          {subMenu} {item}
        </Typography>
      ))}
    </Box>
  );
};
 */

import { useState } from "react";
import { Box, Typography } from "@mui/material";

const AppNav = () => {
  return (
    <Box>
      <Typography variant="h6" aria-label="Navigation Menu">
        This is a nav
      </Typography>
      <nav aria-label="Main navigation">
        {["Nav A", "Nav B", "Nav C", "Nav D"].map((navName) => (
          <SingleNavTab key={navName} navName={navName} />
        ))}
      </nav>
    </Box>
  );
};
export default AppNav;

const SingleNavTab = ({ navName }) => {
  const [open, setOpen] = useState(false);

  const handleHover = () => setOpen(true);
  const handleLeave = () => setOpen(false);
  const handleKeyPress = (e) => {
    e.stopPropagation();
    if (e.key === "Enter" || e.key === " ") {
      setOpen((prev) => !prev);
    } else if (e.key === "Escape") {
      setOpen(false);
    }
  };

  return (
    <Box
      component="button"
      position="relative"
      border="2px solid red"
      padding="10px"
      aria-haspopup="true"
      aria-expanded={open}
      onMouseOver={handleHover}
      onMouseLeave={handleLeave}
      onKeyDown={handleKeyPress}
      tabIndex={0}
      aria-controls={`submenu-${navName}`}
      aria-label={`Navigation item: ${navName}`}
    >
      <Typography>{navName}</Typography>
      {open && <SubMenu navName={navName} />}
    </Box>
  );
};

const SubMenu = ({ navName }) => {
  const [activeIndex, setActiveIndex] = useState(-1);

  const handleKeyDown = (e, index) => {
    const totalItems = 4; // Number of submenu items
    e.stopPropagation();
    switch (e.key) {
      case "ArrowDown":
        setActiveIndex((prevIndex) => (prevIndex + 1) % totalItems);
        break;
      case "ArrowUp":
        setActiveIndex(
          (prevIndex) => (prevIndex - 1 + totalItems) % totalItems
        );
        break;
      case "Escape":
        setActiveIndex(-1);
        break;
      default:
        break;
    }
  };

  return (
    <Box
      role="menu"
      aria-label={`Submenu for ${navName}`}
      id={`submenu-${navName}`}
      aria-labelledby={`submenu-${navName}`}
      position="relative"
      border="2px solid black"
    >
      {["Sub Menu A", "Sub Menu B", "Sub Menu C", "Sub Menu D"].map(
        (subMenu, index) => (
          <SingleSubMenu
            key={subMenu}
            subMenu={subMenu}
            active={activeIndex === index}
            handleKeyDown={(e) => handleKeyDown(e, index)}
          />
        )
      )}
    </Box>
  );
};

const SingleSubMenu = ({ subMenu, active, handleKeyDown }) => {
  const [showLevelTwoMenu, setShowLevelTwoMenu] = useState(false);

  const handleHover = () => setShowLevelTwoMenu(true);
  const handleLeave = () => setShowLevelTwoMenu(false);
  const handleKeyPress = (e) => {
    e.stopPropagation();
    if (e.key === "Enter" || e.key === " ") {
      setShowLevelTwoMenu((prev) => !prev);
    } else if (e.key === "Escape") {
      setShowLevelTwoMenu(false);
    }
  };

  return (
    <Box
      role="menuitem"
      tabIndex={0}
      aria-haspopup="true"
      aria-expanded={showLevelTwoMenu}
      aria-label={`Submenu item: ${subMenu}`}
      onMouseOver={handleHover}
      onMouseLeave={handleLeave}
      onKeyDown={handleKeyDown}
      onKeyPress={handleKeyPress}
      style={{ backgroundColor: active ? "#f0f0f0" : "transparent" }}
    >
      <Typography>{subMenu}</Typography>
      {showLevelTwoMenu && <LevelTwoSubMenu subMenu={subMenu} />}
    </Box>
  );
};

const LevelTwoSubMenu = ({ subMenu }) => {
  const [activeIndex, setActiveIndex] = useState(-1);

  const handleKeyDown = (e, index) => {
    const totalItems = 5; // Number of level two submenu items
    switch (e.key) {
      case "ArrowDown":
        setActiveIndex((prevIndex) => (prevIndex + 1) % totalItems);
        break;
      case "ArrowUp":
        setActiveIndex(
          (prevIndex) => (prevIndex - 1 + totalItems) % totalItems
        );
        break;
      case "Escape":
        setActiveIndex(-1);
        break;
      default:
        break;
    }
  };

  return (
    <Box
      role="menu"
      aria-label={`Level 2 submenu for ${subMenu}`}
      position="absolute"
      left="150px"
      top="-20px"
      fontSize="10px"
      width="150px"
      border="1px solid blue"
    >
      {["1", "2", "3", "4", "5"].map((item, index) => (
        <Typography
          key={`${subMenu}-${index}`}
          role="menuitem"
          tabIndex={0}
          onKeyDown={(e) => {
            e.stopPropagation();
            handleKeyDown(e, index);
          }}
          aria-label={`${subMenu} item ${item}`}
          style={{
            backgroundColor: activeIndex === index ? "#f0f0f0" : "transparent",
          }}
        >
          {subMenu} {item}
        </Typography>
      ))}
    </Box>
  );
};
