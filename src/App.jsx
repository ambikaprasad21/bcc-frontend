import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Admin from "./pages/Admin";
import Schoolarship from "./pages/Schoolarship";
import NewSchEntry from "./pages/NewSchEntry";
import Main from "./pages/Main";
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />}>
          <Route index element={<Main />} />
          <Route path="admin/dashboard" element={<Admin />} />
          <Route
            path="admin/dashboard/schoolarship"
            element={<Schoolarship />}
          />
          <Route
            path="admin/dashboard/create/schoolarship"
            element={<NewSchEntry />}
          />
          <Route path="admin/login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
