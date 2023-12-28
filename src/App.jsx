import { BrowserRouter, Route, Routes } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import "react-datepicker/dist/react-datepicker.css";

import Homepage from "./pages/Homepage";
import Admin from "./pages/Admin";
import Schoolarship from "./pages/Schoolarship";
import NewSchEntry from "./pages/NewSchEntry";
import Main from "./pages/Main";
import Login from "./pages/Login";
import { AuthProvider } from "./context/authContext";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />}>
            <Route index element={<Main />} />
            <Route
              path="admin/dashboard"
              element={
                <ProtectedRoute>
                  <Admin />
                </ProtectedRoute>
              }
            />
            <Route
              path="admin/dashboard/schoolarship"
              element={
                <ProtectedRoute>
                  <Schoolarship />
                </ProtectedRoute>
              }
            />
            <Route
              path="admin/dashboard/create/schoolarship"
              element={
                <ProtectedRoute>
                  <NewSchEntry />
                </ProtectedRoute>
              }
            />
            <Route path="admin/login" element={<Login />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
