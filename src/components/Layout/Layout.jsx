import { Outlet } from "react-router-dom";
import { Box } from "@mui/system";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import WithUserProvider from "../../providers/WithUserProvider";

const Layout = () => {
  return (
    <Box height="100%">
      <Header />
      <Box
        height="100%"
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

export default WithUserProvider(Layout);
