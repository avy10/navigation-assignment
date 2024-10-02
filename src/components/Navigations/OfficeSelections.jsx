import styles from "./OfficeSelections.module.css";
import { Box } from "@mui/material";
// import { OFFICES } from "../../assets/utils/offices";
import NativeSelect from "@mui/material/NativeSelect";
import { useEffect, useState } from "react";
import axios from "axios";
const OfficeSelections = () => {
  const [officeIndex, setOfficeIndex] = useState(10);
  const [users, setUsers] = useState([]);

  async function getUsers() {
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/users`
      );
      setUsers(response?.data);
    } catch (error) {
      console.log("error in data fetch", error);
    }
  }
  useEffect(() => {
    getUsers();
  }, []);
  return (
    <Box className={styles.selection} sx={{ minWidth: 220 }}>
      <span>Select Office</span>
      <NativeSelect
        defaultValue={officeIndex}
        onChange={(e) => setOfficeIndex(e.target.value)}
        inputProps={{
          name: "officeName",
        }}
        sx={{ color: "inherit" }}
      >
        {/* {OFFICES.map((officeName, index) => (
          <option value={index} key={index}>
            {officeName}
          </option>
        ))} */}
        {users.map((singleUserData) => (
          <option value={singleUserData?.id} key={singleUserData?.id}>
            {singleUserData?.name}
          </option>
        ))}
      </NativeSelect>
    </Box>
  );
};

export default OfficeSelections;
