import { useEffect } from "react";
import { api } from "../../assets/utils/axiosConfigTestOne";
const AxiosRequestConfig = () => {
  useEffect(() => {
    api.get(`/users`).then(function (response) {
      console.log(response);
    });
  }, []);
};

export default AxiosRequestConfig;
