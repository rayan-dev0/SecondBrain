import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Dashboard } from "./pages/dashboard";
import { Signup } from "./pages/Signup";
import { Signin } from "./pages/Signin";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/share/:shareId" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
