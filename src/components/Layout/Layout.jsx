import { Outlet } from "react-router-dom";
import { Box } from "@mui/system";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Layout = () => {
  return (
    <Box>
      <Header />
      <Box
        sx={{
          transform: "translateY(-90px)",
        }}
      >
        <Outlet />
        <Footer />
      </Box>
    </Box>
  );
};

export default Layout;
