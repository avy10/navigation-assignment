import "./App.css";
import Header from "./components/Header/Header";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import DefaultNavPage from "./components/Navigations/DefaultNavPage";
import { NAVIGATIONS } from "./assets/utils/navigations";
import NavBar from "./components/Navigations/NavBar";
import AxiosTestGet from "./components/test/AxiosTestGet";
import MyInbox from "./components/pages/MyInbox";
import AxiosTestPost from "./components/test/AxiosTestPost";
import AxiosRequestConfig from "./components/test/AxiosRequestConfig";

const App = () => {
  return (
    <>
      <Header />
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Navigate to={"/MyInbox"} />} />
          {NAVIGATIONS.map((eachNavigation, index) => (
            <Route key={index} path={`/${eachNavigation?.url}`}>
              <Route
                index
                element={
                  <DefaultNavPage pageName={`${eachNavigation?.name}`} />
                }
              />
              {eachNavigation?.subMenu.length !== 0 &&
                eachNavigation.subMenu.map((subMenuItem, index) => (
                  <Route
                    key={index}
                    path={`${subMenuItem?.url}`}
                    element={
                      <DefaultNavPage pageName={subMenuItem?.subMenuName} />
                    }
                  ></Route>
                ))}
            </Route>
          ))}
          <Route path="/MyInbox" element={<MyInbox />} />
        </Routes>
      </BrowserRouter>
      {/* <AxiosTestGet /> */}
      {/* <AxiosTestPost /> */}
      {/* <AxiosRequestConfig /> */}
    </>
  );
};

export default App;
