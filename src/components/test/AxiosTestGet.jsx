// const axios = require("axios");
import axios from "axios";
import { useEffect } from "react";

const AxiosTestGet = () => {
  // useEffect(() => {
  //   axios
  //     .get(`https://jsonplaceholder.typicode.com/users`)
  //     .then(function (response) {
  //       console.log(response);
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     })
  //     .finally(function () {
  //       console.log("Finally block of the axios code");
  //     });
  // }, []);
  async function axiosGetAsync() {
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/users`,
        {
          timeout: 10,
        }
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    } finally {
      console.log("Finally block of async axios get");
    }
  }
  // timeout of 10ms does forces an error
  /* message: "timeout of 10ms exceeded"*/
  useEffect(() => {
    axiosGetAsync();
  }, []);
};

export default AxiosTestGet;
