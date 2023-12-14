import React, { useState, useEffect } from "react";
import {
  TextField,
  Stack,
  Typography,
  Avatar,
  Box,
  IconButton,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import { useFormContext } from "react-hook-form";

const ResumePersonal = () => {
  const {
    register,
    setValue,
    watch,
    formState: { errors },
  } = useFormContext();

  const [imageURL, setImageURL] = useState(null);
  const selectedImageFile = watch("personal.img");

  useEffect(() => {
    if (
      selectedImageFile &&
      selectedImageFile.length > 0 &&
      selectedImageFile[0] instanceof File
    ) {
      const newImageUrl = URL.createObjectURL(selectedImageFile[0]);
      setImageURL(newImageUrl);

      return () => URL.revokeObjectURL(newImageUrl);
    }
  }, [selectedImageFile]);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setValue("personal.img", file); // Store the File object
    }
  };

  const handlePhoneNumberChange = (event) => {
    const value = event.target.value;
    // Replace any non-digit characters with an empty string
    const filteredValue = value.replace(/\D/g, "");
    setValue("personal.phone", filteredValue);
  };

  const textFieldData = [
    {
      label: "First Name",
      placeholder: "e.g. John",
      type: "text",
      name: "firstName",
    },
    {
      label: "Middle Name",
      placeholder: "e.g. Herbert",
      type: "text",
      name: "middleName",
    },
    {
      label: "Last Name",
      placeholder: "e.g. Doe",
      type: "text",
      name: "lastName",
    },
    {
      label: "Email",
      placeholder: "e.g. johndoe@gmail.com",
      type: "email",
      name: "email",
    },
    {
      label: "Phone Nom:",
      placeholder: "e.g. 456-768-798",
      type: "tel",
      name: "phone",
      onChange: handlePhoneNumberChange,
    },
    {
      label: "Address",
      placeholder: "e.g. Lake Street-23",
      type: "text",
      name: "address",
    },
    { label: "Your Image", placeholder: "", type: "file", name: "img" },
  ];

  const renderImageUpload = () => (
    <Stack direction="column" alignItems="center" sx={{ width: "32%" }}>
      <input
        accept="image/*"
        id="icon-button-file"
        type="file"
        style={{ display: "none" }}
        onChange={handleImageChange}
        {...register("personal.img")}
      />
      <label htmlFor="icon-button-file">
        <IconButton
          color="primary"
          aria-label="upload picture"
          component="span"
        >
          {imageURL ? (
            <Avatar
              alt="Profile"
              src={imageURL}
              sx={{
                width: { xs: "64px", sm: "108px", md: "144px" },
                height: { xs: "64px", sm: "108px", md: "144px" },
                cursor: "pointer",
              }}
            />
          ) : (
            <AddAPhotoIcon
              sx={{
                width: { xs: "16px", sm: "32px" },
                height: { xs: "16px", sm: "32px" },
                color: "#a83a6d",
              }}
            />
          )}
        </IconButton>
      </label>
      {errors.personal?.img && (
        <Typography color="error">{errors.personal?.img?.message}</Typography>
      )}
    </Stack>
  );

  const renderTextFields = (start, end) => (
    <Stack
      direction="row"
      flexWrap="wrap"
      gap={2}
      sx={{ width: "100%", margin: "0 auto" }}
    >
      {textFieldData
        .slice(start, end)
        .map((item, index) =>
          item.type !== "file" ? (
            <TextField
              {...register(`personal.${item.name}`)}
              onChange={
                item.onChange ||
                ((value) =>
                  setValue(`personal.${item.name}`, value.target.value))
              }
              key={index}
              type={item.type}
              sx={{ width: "32%" }}
              required
              id={`outlined-${item.label.toLowerCase()}`}
              label={item.label}
              placeholder={item.placeholder}
              variant="outlined"
              name={item.name}
              error={Boolean(errors.personal?.[item.name])}
              helperText={errors.personal?.[item.name]?.message}
            />
          ) : (
            renderImageUpload()
          )
        )}
    </Stack>
  );

  return (
    <Stack width="100%" spacing={4} sx={{ mb: 4, mt: 4 }} alignItems="center">
      <Stack direction="column" justifyContent="center" alignItems="center">
        <PersonIcon sx={{ width: 42, height: 42 }} />
        <Typography variant="h6" sx={{ ml: 1 }}>
          Personal Info
        </Typography>
      </Stack>
      <Stack
        sx={{
          width: "100%",
          backgroundColor: "#1e2532",
          color: "white",
          m: "5px auto",
          p: 1.5,
        }}
      >
        <Typography variant="h5" sx={{ color: "#FFF" }}>
          ABOUT SECTION
        </Typography>
      </Stack>
      {renderTextFields(0, 3)}
      {renderTextFields(3, 6)}
      {renderTextFields(6, 9)}
    </Stack>
  );
};

export default ResumePersonal;
