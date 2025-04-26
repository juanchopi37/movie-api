import { Stack, TextField, Typography, Button } from "@mui/material";
import { useState } from "react";
import { inputStyles } from "../../styles/mui-styles";
import { useNavigate } from "react-router-dom";

interface FormData {
  email: string;
  password: string;
  name: string;
  lastname: string;
}

export const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
    name: "",
    lastname: "",
  });

  // Manejador para los cambios de los inputs

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validación de los datos

    if (!formData.email || !formData.password || !formData.name || !formData.lastname) {
      alert("Por favor, completa todos los campos");
      return;
    }

    try {
      localStorage.setItem("userData", JSON.stringify(formData));
      alert("Usuario registrado correctamente");

      navigate("/login");
    } catch (error) {
      console.error("Error al registrar el usuario", error);
      alert("Hubo un error al registrar el usuario");
    }
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
        <Typography variant="h1" color="#fff">
          Registro
        </Typography>
        <TextField
          label="Email"
          variant="outlined"
          sx={inputStyles}
          value={formData.email}
          onChange={handleChange}
          type="email"
          name="email"
          required
        ></TextField>
        <TextField
          label="Password"
          variant="outlined"
          sx={inputStyles}
          name="password"
          value={formData.password}
          onChange={handleChange}
          type="password"
          required
        ></TextField>
        <Stack justifyContent="center" direction="row">
          <TextField
            label="Name"
            variant="outlined"
            sx={inputStyles}
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          ></TextField>
          <TextField
            label="Lastname"
            variant="outlined"
            sx={inputStyles}
            name="lastname"
            value={formData.lastname}
            onChange={handleChange}
            required
          ></TextField>
        </Stack>

        <Stack justifyContent="center" direction="row"></Stack>
        <Button variant="contained" type="submit">
          Register
        </Button>
      </Stack>
    </Stack>
  );
};
