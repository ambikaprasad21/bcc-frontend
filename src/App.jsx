import { BrowserRouter, Route, Routes } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import "react-datepicker/dist/react-datepicker.css";

import Homepage from "./pages/Homepage";
import Admin from "./pages/Admin";
import Schoolarship from "./pages/Schoolarship";
import NewSchEntry from "./pages/NewSchEntry";
import UpdateSchEntry from "./pages/UpdateSchEntry";
import Main from "./pages/Main";
import Login from "./pages/Login";
import { AuthProvider } from "./context/authContext";
import ProtectedRoute from "./components/ProtectedRoute";
import JobPage from "./job/JobPage";
import NotifiPage from "./notification/NotifiPage";
import NotifiItem from "./notification/NotifiItem";
import { NotifiProvider } from "./context/notifiContext";
import { BreakNewsProvider } from "./context/breakNewsContext";
import BreakingNewsPage from "./BreakingNews/BreakingNewsPage";
import CreateNews from "./BreakingNews/CreateNews";

function App() {
  return (
    <AuthProvider>
      <BreakNewsProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Homepage />}>
              <Route index element={<Main />} />
              <Route path="new/job" element={<JobPage />} />
              <Route
                path="admin/dashboard"
                element={
                  <ProtectedRoute>
                    <NotifiProvider>
                      <Admin />
                    </NotifiProvider>
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
                path="admin/dashboard/breaking/news"
                element={
                  <ProtectedRoute>
                    <BreakingNewsPage />
                  </ProtectedRoute>
                }
              />
              <Route
                path="admin/dashboard/notifications"
                element={
                  <ProtectedRoute>
                    <NotifiProvider>
                      <NotifiPage />
                    </NotifiProvider>
                  </ProtectedRoute>
                }
              />
              <Route
                path="admin/dashboard/notifications/:id"
                element={
                  <ProtectedRoute>
                    <NotifiProvider>
                      <NotifiItem />
                    </NotifiProvider>
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
              <Route
                path="admin/dashboard/breaking/news/create"
                element={
                  <ProtectedRoute>
                    <CreateNews />
                  </ProtectedRoute>
                }
              />

              <Route
                path="admin/dashboard/edit/schoolarship/:regno"
                element={
                  <ProtectedRoute>
                    <UpdateSchEntry />
                  </ProtectedRoute>
                }
              />
              <Route path="admin/login" element={<Login />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </BreakNewsProvider>
    </AuthProvider>
  );
}

export default App;
