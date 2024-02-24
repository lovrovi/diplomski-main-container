import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

function Homepage() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default Homepage;
