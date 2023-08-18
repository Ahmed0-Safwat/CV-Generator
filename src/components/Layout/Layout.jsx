import { Outlet } from "react-router-dom";
import { Box } from "@mui/system";
import DrawerAppBar from "../AppBar/AppBar";

const Layout = () => {
  return (
    <Box>
      <DrawerAppBar />

      <Box
        sx={{
          padding: "16px",
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;
