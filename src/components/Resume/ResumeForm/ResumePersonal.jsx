import React from "react";
import { TextField, Stack, Typography } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import { useStore } from "../../../hooks/useStore";

const ResumePersonal = () => {
  const textFieldData = [
    { label: "First Name", placeholder: "e.g. John" },
    { label: "Middle Name", placeholder: "e.g. Herbert" },
    { label: "Last Name", placeholder: "e.g. Doe" },
    { label: "Your Image", placeholder: "Upload Your Image" },
    { label: "Designation", placeholder: "e.g. Sr. Accountants" },
    { label: "Address", placeholder: "e.g. Lake Street-23" },
    { label: "Email", placeholder: "e.g. johndoe@gmail.com" },
    { label: "Phone Nom:", placeholder: "e.g. 456-768-798" },
    { label: "Summary", placeholder: "e.g. Doe" },
  ];

  const renderTextFields = (start, end) => (
    <Stack
      direction="row"
      justifyContent="space-between"
      flexWrap="wrap"
      sx={{ width: "100%", margin: "0 auto" }}
    >
      {textFieldData.slice(start, end).map((item, index) => (
        <TextField
          key={index}
          sx={{ width: "32%" }}
          required
          id={`outlined-${item.label.toLowerCase()}`}
          label={item.label}
          placeholder={item.placeholder}
        />
      ))}
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
