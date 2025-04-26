import {
  // Typography,
  Stack,
  TextField,
  Button,
  Box,
} from "@mui/material";
import logo from "../../assets/logo.svg";
import { useState } from "react";
import { inputStyles } from "../../styles/mui-styles";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validación de los datos
    if (!formData.email || !formData.password) {
      alert("Por favor, completa todos los campos");
      return;
    }

    // Guardar los datos en el Local Storage
    try {
      const userData = JSON.parse(localStorage.getItem("userData") || "{}");
      if (
        userData.email === formData.email &&
        userData.password === formData.password
      ) {
        alert("Usuario logueado correctamente");
        navigate("/home");
      } else {
        alert("Email o contraseña incorrectos");
      }
    } catch (error) {
      console.error("Error al iniciar sesión", error);
      alert("Hubo un error al iniciar sesión");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      bgcolor="#242e34"
      component="main"
    >
      <Stack
        bgcolor="#0d253f"
        gap={2}
        p={5}
        borderRadius="16px"
        component="form"
        onSubmit={handleSubmit}
      >
        <Box component="img" src={logo} alt="Logo" />
        <TextField
          label="Email"
          variant="outlined"
          sx={inputStyles}
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <TextField
          label="Password"
          variant="outlined"
          sx={inputStyles}
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        <Button variant="contained" type="submit">
          Sing In
        </Button>
        <Button variant="contained" onClick={() => navigate("/register")}>
          Register
        </Button>
      </Stack>
    </Stack>
  );
};
