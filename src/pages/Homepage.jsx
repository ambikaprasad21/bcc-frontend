import { Outlet, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useEffect } from "react";
import MoveStuffAround from "../components/MoveStuffAround";
import { useBreakNews } from "../context/breakNewsContext";
import LoginToast from "../components/LoginToast";
import { useAuth } from "../context/authContext";

const BASE_URL = "http://127.0.0.1:3000/api/v1/auth/islogged";

function Homepage() {
  const { breakNews, getBreakNews } = useBreakNews();
  const navigate = useNavigate();
  const { isAuthenticated, setIsAuthenticated } = useAuth();
  // useEffect(() => {
  //   async function isLogged() {
  //     const authToken = localStorage.getItem("authToken");

  //     if (authToken) {
  //       // Perform authentication using the token
  //       document.cookie = `jwt=${authToken}; path=/`;
  //       const res = await fetch(`${BASE_URL}`, {
  //         method: "GET",
  //         // credentials: "include",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //       });
  //       if (res.ok) {
  //         setIsAuthenticated(true);
  //       }
  //     }
  //   }

  //   isLogged();
  // }, []);

  useEffect(() => {
    const to = isAuthenticated ? "" : "/";
    navigate(to);
  }, []);
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
