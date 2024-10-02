import styles from "./Header.module.css";
import swat_logo from "../../assets/icons/swat_logo.png";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";

const Header = () => {
  return (
    <div className={styles.header}>
      <Box className={`${styles.swatLogo} flex-center-center`}>
        <img src={swat_logo} />
        <span>SWAT</span>
        <span className={styles.department}>
          Division of Corporation Finance
        </span>
      </Box>
      <Box className={`${styles.userControl} flex-center-center`}>
        <span className={styles.userActions}>Preferences</span>
        <Divider
          orientation="vertical"
          variant="middle"
          sx={{ backgroundColor: "white", height: "12px" }}
        />
        <span>Welcome Anne Parker</span>
        {/* <Divider orientation="vertical" flexItem /> */}
        <Divider
          orientation="vertical"
          variant="middle"
          sx={{ backgroundColor: "white", height: "12px" }}
        />
        {/* <Divider orientation="vertical" variant="middle" flexItem sx={{backgroundColor : "white"}} /> */}
        <span>SWAT Reference Library</span>
        <Divider
          orientation="vertical"
          variant="middle"
          sx={{ backgroundColor: "white", height: "12px" }}
        />
        {/* <Divider orientation="vertical" variant="middle" flexItem sx={{backgroundColor : "white"}} /> */}
        <span className={styles.userActions}>Logout</span>
      </Box>
    </div>
  );
};

export default Header;
