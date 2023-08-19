import { Outlet } from "react-router-dom";
import { Box } from "@mui/system";
import DrawerAppBar from "../AppBar/AppBar";

const Layout = () => {
  return (
    <Box>
      <DrawerAppBar />

      <Box>
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;
