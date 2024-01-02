import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useEffect } from "react";
import MoveStuffAround from "../components/MoveStuffAround";
import { useBreakNews } from "../context/breakNewsContext";
import LoginToast from "../components/LoginToast";

function Homepage() {
  const { breakNews, getBreakNews } = useBreakNews();

  useEffect(() => {
    getBreakNews();
  }, []);
  return (
    <>
      <MoveStuffAround news={breakNews} />
      <Header />
      <Outlet />
      <Footer />
      <LoginToast />
    </>
  );
}

export default Homepage;
