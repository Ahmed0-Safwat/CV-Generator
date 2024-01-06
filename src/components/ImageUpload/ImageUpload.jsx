import React from "react";
import IconButton from "@mui/material/IconButton";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import Box from "@mui/material/Box";
import { useStore } from "../../hooks/useStore";
import useProfileImage from "../../api/login/profileImg";
import usePutProfileImage from "../../api/login/putProfileImg";

function ImageUpload() {
  const { mutate: uploadImage } = useProfileImage();
  const { mutate: changeImage } = usePutProfileImage();

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const formData = new FormData();
      formData.append("ImageFile", file);

      const sessionStorageUser = JSON.parse(sessionStorage.getItem("user"));
      if (
        !sessionStorageUser ||
        sessionStorageUser?.image === "User has no Image"
      ) {
        uploadImage(formData);
      } else {
        changeImage(formData);
      }

      updateGlobalStateAndSession(file);
    }
  };

  const updateGlobalStateAndSession = (file) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64String = reader.result
        .replace("data:", "")
        .replace(/^.+,/, "");

      useStore.setState({
        globalState: {
          ...useStore.getState().globalState,
          image: base64String,
        },
      });

      const sessionStorageUser = JSON.parse(
        sessionStorage.getItem("user") || "{}"
      );
      sessionStorage.setItem(
        "user",
        JSON.stringify({
          ...sessionStorageUser,
          image: base64String,
        })
      );
      sessionStorage.setItem("localImage", JSON.stringify("true"));
    };
    reader.readAsDataURL(file);
  };

  return (
    <Box
      sx={{
        position: "absolute",
        bottom: "15px",
        right: 0,
      }}
    >
      <input
        accept="image/*"
        id="icon-button-file"
        type="file"
        style={{ display: "none" }}
        onChange={handleImageUpload}
      />
      <label htmlFor="icon-button-file">
        <IconButton
          color="primary"
          aria-label="upload picture"
          component="span"
        >
          <AddAPhotoIcon
            sx={{
              width: { xs: "16px", sm: "32px" },
              height: { xs: "16px", sm: "32px" },
              color: "#a83a6d",
            }}
          />
        </IconButton>
      </label>
    </Box>
  );
}

export default ImageUpload;
