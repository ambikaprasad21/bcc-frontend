// import { useEffect } from "react";
import Repair from "../components/Repair";
import Timing from "../components/Timing";
// import { useAuth } from "../context/authContext";
import Carousal from "./../components/Carousal";
import Services from "./../components/Services";

function Main() {
  return (
    <>
      <Carousal />
      <Services />
      <Timing />
      <Repair />
    </>
  );
}

export default Main;
