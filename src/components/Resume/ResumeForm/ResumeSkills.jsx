import React from "react";
import { TextField, Stack, Typography, MenuItem } from "@mui/material";
import { useFormContext } from "react-hook-form";

const currencies = [
  { value: "20%", label: "Poor" },
  { value: "40%", label: "Fair" },
  { value: "60%", label: "Good" },
  { value: "80%", label: "Very Good" },
  { value: "100%", label: "Excellent" },
];

const ResumeSkills = () => {
  const {
    register,
    watch,
    setValue,
    formState: { errors },
  } = useFormContext();

  const renderSkillNameField = (sectionIndex) => {
    const fieldName = `skills[${sectionIndex}].skillName`;
    return (
      <TextField
        key={fieldName}
        {...register(fieldName)}
        fullWidth
        required
        id={`outlined-skillname`}
        label="Skill"
        value={watch(fieldName)}
        error={Boolean(errors.skills?.[sectionIndex]?.skillName)}
        helperText={errors.skills?.[sectionIndex]?.skillName?.message}
        onChange={(e) => setValue(fieldName, e.target.value)}
      />
    );
  };

  const renderSkillLevelField = (sectionIndex) => {
    const fieldName = `skills[${sectionIndex}].skillLevel`;
    return (
      <TextField
        key={fieldName}
        {...register(fieldName)}
        select
        fullWidth
        id={`outlined-skilllevel`}
        label="Skill Level"
        value={watch(fieldName)}
        onChange={(e) => setValue(fieldName, e.target.value)}
        error={Boolean(errors.skills?.[sectionIndex]?.skillLevel)}
        helperText={errors.skills?.[sectionIndex]?.skillLevel?.message}
      >
        {currencies.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
    );
  };

  return (
    <Stack width="100%" spacing={4} sx={{ mb: 4, mt: 4 }}>
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
          SKILLS
        </Typography>
      </Stack>
      <Stack gap={2} sx={{ width: "100%", margin: "0 auto" }}>
        {/* Adjust the index as per your data structure */}
        {[0].map((index) => (
          <Stack
            key={index}
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
          >
            {renderSkillNameField(index)}
            {renderSkillLevelField(index)}
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

export default ResumeSkills;
