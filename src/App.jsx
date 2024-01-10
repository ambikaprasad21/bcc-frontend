import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import "react-datepicker/dist/react-datepicker.css";

import Homepage from "./pages/Homepage";
import Admin from "./pages/Admin";
import Schoolarship from "./pages/Schoolarship";
import NewSchEntry from "./pages/NewSchEntry";
import UpdateSchEntry from "./pages/UpdateSchEntry";
import Hero from "./pages/Hero";
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
import CreateJob from "./job/CreateJob";
import JobItem from "./job/JobItem";

function App() {
  return (
    <AuthProvider>
      <BreakNewsProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Homepage />}>
              <Route index element={<Hero />} />
              <Route path="new/job" element={<JobPage />} />
              <Route path="new/job/:id" element={<JobItem />} />

              <Route
                path="admin/dashboard/create/new/job/notification"
                element={
                  <ProtectedRoute>
                    <CreateJob />
                  </ProtectedRoute>
                }
              />
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
            <Route path="/*" element={<Navigate to="/" />} />
          </Routes>
        </BrowserRouter>
      </BreakNewsProvider>
    </AuthProvider>
  );
}

export default App;
