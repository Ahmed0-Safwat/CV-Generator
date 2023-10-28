import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import Box from "@mui/material/Box";
import { useStore } from "../../hooks/useStore";

function ImageUpload() {
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      useStore.setState({
        globalState: {
          ...useStore.getState().globalState,
          image: URL.createObjectURL(file),
        },
      });

      console.log("URL.createObjectURL(file)", URL.createObjectURL(file));

      const sessionStorageUser = JSON.parse(sessionStorage.getItem("user"));

      sessionStorage.setItem(
        "user",
        JSON.stringify({
          ...sessionStorageUser,
          image: URL.createObjectURL(file),
        })
      );

      // const formData = new FormData();
      // formData.append("image", file);

      // fetch(
      //   "https://moaaz2002-001-site1.atempurl.com/api/profileimages/upload",
      //   {
      //     method: "POST",
      //     body: formData,
      //   }
      // )
      //   .then((response) => response.json())
      //   .then((data) => {
      //     console.log(data);
      //   })
      //   .catch((error) => {
      //     console.error("Error:", error);
      //   });
    }
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
