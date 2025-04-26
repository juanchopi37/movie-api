import { Routes, Route, Navigate } from "react-router-dom";
import { Login, Register, Home } from "./pages";

const App = () => {
  return (
    <Routes>
      {/* Añadir ruta para la raíz que renderice Login */}
      <Route path="/" element={<Navigate to="/Login" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
};

export default App;
