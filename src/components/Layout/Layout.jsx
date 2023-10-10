import { Outlet } from "react-router-dom";
import { Box } from "@mui/system";
import DrawerAppBar from "../AppBar/AppBar";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Layout = () => {
  return (
    <Box>
      {/* <DrawerAppBar /> */}
      <Header />

      <Box>
        <Outlet />
        <Footer />
      </Box>
    </Box>
  );
};

export default Layout;
