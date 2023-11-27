import React from "react";
import { TextField, Stack, Typography } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import { useFormContext } from "react-hook-form";

const ResumePersonal = () => {
  const { register, setValue } = useFormContext();

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
    },
    {
      label: "Address",
      placeholder: "e.g. Lake Street-23",
      type: "text",
      name: "address",
    },
    { label: "Your Image", placeholder: "", type: "file", name: "img" },
  ];

  const renderTextFields = (start, end) => (
    <Stack
      direction="row"
      flexWrap="wrap"
      gap={2}
      sx={{ width: "100%", margin: "0 auto" }}
    >
      {textFieldData.slice(start, end).map((item, index) => (
        <TextField
          {...register(`personal.${item.name}`)}
          onChange={(value) => {
            setValue(`personal.${item.name}`, value.target.value);
          }}
          key={index}
          type={item.type}
          sx={{ width: "32%" }}
          required
          id={`outlined-${item.label.toLowerCase()}`}
          label={item.label}
          placeholder={item.placeholder}
          variant="outlined"
          name={item.name}
          {...(item.type === "file" && { focused: true })}
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
