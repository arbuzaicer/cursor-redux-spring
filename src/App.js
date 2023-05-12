import { Route, Routes } from "react-router-dom";

import AddNewUser from "./pages/AddNewUser";
import Users from "./pages/Users";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="add-user" element={<AddNewUser />} />
        <Route path="users" element={<Users />} />
        <Route index element={<Users />} />
      </Routes>
    </div>
  );
}

export default App;
