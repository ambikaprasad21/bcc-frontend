import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

function LoginToast({ children }) {
  const [searchParams, setSearchParams] = useSearchParams();
  // const [count, setCount] = useState(1);
  const loginSuccess = searchParams.get("loginSuccess");

  useEffect(() => {
    if (loginSuccess) {
      toast.success("Login Successfully", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        style: {
          fontFamily: " sans-serif",
          fontSize: "1.5rem",
          fontWeight: 500,
        },
      });
    }

    // setCount((c) => c + 1);
    setSearchParams({});
  }, [loginSuccess, setSearchParams]);

  return <ToastContainer />;
}

export default LoginToast;
