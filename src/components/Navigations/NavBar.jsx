import { NAVIGATIONS } from "../../assets/utils/navigations";
import styles from "./NavBar.module.css";
import Box from "@mui/material/Box";
import OfficeSelections from "./OfficeSelections";
import SingleNavTab from "./SingleNavTab";

const NavBar = () => {
  return (
    <nav>
      <Box className={`${styles.navigations} `}>
        {NAVIGATIONS.map((navItem, index) => (
          <SingleNavTab key={index} navItem={navItem} />
        ))}
      </Box>
      <OfficeSelections />
    </nav>
  );
};

export default NavBar;
