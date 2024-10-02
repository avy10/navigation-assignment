import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const DefaultNavPage = ({ pageName }) => {
  const location = useLocation();

  //   const history = useHistory();
  // history.location.pathname
  useEffect(() => {
    // console.log(pageName);
    console.log(location.pathname);
  }, [pageName, location.pathname]);
  return <div>{pageName}</div>;
};

export default DefaultNavPage;
