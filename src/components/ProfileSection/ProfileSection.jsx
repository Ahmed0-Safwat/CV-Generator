import React, { useState, useEffect } from "react";
import { Button, Avatar, Box } from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Logout from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";
import useSignoutUser from "../../api/login/signout";
import { useStore } from "../../hooks/useStore";
import shallow from "zustand/shallow";

const ProfileSection = ({ handleOpenModal }) => {
  const { globalState } = useStore(
    (state) => ({
      globalState: state.globalState,
    }),
    shallow
  );

  const { user, image } = globalState;
  const [userData, setUserData] = useState(user);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const navigate = useNavigate();

  const { mutate: signOutMutation } = useSignoutUser();

  useEffect(() => {
    setUserData(user);
  }, [user]);

  const handleSignout = () => {
    signOutMutation();
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("user");
    setUserData(null);
    navigate("/");
  };

  return userData ? (
    <React.Fragment>
      <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <Avatar
              src={`data:image/jpeg;base64,${image}` || ""}
              sx={{
                width: { xs: "32px", sm: "48px" },
                height: { xs: "32px", sm: "48px" },
              }}
            />
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem onClick={() => navigate("/profile")}>My Profile</MenuItem>
        <Divider />
        <MenuItem onClick={handleSignout}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </React.Fragment>
  ) : (
    <Button
      variant="contained"
      sx={{
        display: { xs: "none", lg: "block" },
        padding: "0px",
        borderRadius: "100px",
        minWidth: "120px",
        height: "46px",
        fontSize: "14px",
        fontWeight: "bold",
      }}
      onClick={handleOpenModal}
    >
      Login
    </Button>
  );
};

export default ProfileSection;
