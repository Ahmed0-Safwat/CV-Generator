import React from "react";
import { TextField, Stack, Typography, MenuItem } from "@mui/material";

const sectionData = [
  {
    title: "EDUCATION",
    fields: [
      ["University", "Department"],
      ["Start Date", "End Date"],
    ],
  },
  {
    title: "EXPERIENCE",
    fields: [
      ["Title", "Company / Organization", "Location"],
      ["Start Date", "End Date", "Description"],
    ],
  },
  {
    title: "PROJECTS",
    fields: [["Project Name", "Project Link", "Description"]],
  },
  { title: "SKILLS", fields: [["Skill", "Select"]] },
  { title: "LANGUAGES", fields: [["Language", "Select"]] },
];

const currencies = [
  { value: "20%", label: "Poor" },
  { value: "40%", label: "Fair" },
  { value: "60%", label: "Good" },
  { value: "80%", label: "Very Good" },
  { value: "100%", label: "Excellent" },
];

const ResumeSkills = () => {
  const renderTextField = (label, isSelect = false) => (
    <TextField
      fullWidth
      required={!isSelect}
      id={`outlined-${label.toLowerCase()}`}
      label={label}
      select={isSelect}
      helperText={isSelect && "Please Select Your Skill Level"}
    >
      {isSelect &&
        currencies.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
    </TextField>
  );

  const renderSection = (section) => (
    <Stack gap={4} key={section.title}>
      <Stack
        sx={{
          width: "100%",
          backgroundColor: "#1e2532",
          color: "white",
          margin: "5px auto",
          p: 1.5,
        }}
      >
        <Typography sx={{ color: "#FFF", fontSize: "22px", fontWeight: "400" }}>
          {section.title}
        </Typography>
      </Stack>
      <Stack gap={2} sx={{ width: "100%", margin: "0px auto" }}>
        {section.fields.map((fieldRow, index) => (
          <Stack
            key={index}
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            sx={{ width: "100%" }}
          >
            {fieldRow.map((field) => (
              <Stack key={field} sx={{ width: "100%" }}>
                {renderTextField(field, field === "Select")}
              </Stack>
            ))}
          </Stack>
        ))}
      </Stack>
    </Stack>
  );

  return (
    <Stack width="100%" spacing={4} sx={{ mb: 4, mt: 4 }}>
      {sectionData.map((section) => renderSection(section))}
    </Stack>
  );
};

export default ResumeSkills;
