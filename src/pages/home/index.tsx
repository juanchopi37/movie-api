import { Typography, Stack, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      bgcolor="#242e34"
      color="#fff"
      gap={2}
    >
      <Typography variant="h4">¡Bienvenido!</Typography>
      <Typography>Has iniciado sesión correctamente.</Typography>
      <Button variant="contained" onClick={handleLogout}>
        Cerrar Sesión
      </Button>
    </Stack>
  );
};
