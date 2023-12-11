import React from "react";
import { TextField, Stack, Typography, MenuItem } from "@mui/material";
import { useFormContext } from "react-hook-form";

const languageLevels = [
  { value: "Basic", label: "Basic" },
  { value: "Conversational", label: "Conversational" },
  { value: "Fluent", label: "Fluent" },
  { value: "Native/Bilingual", label: "Native/Bilingual" },
];

const ResumeLanguages = () => {
  const {
    register,
    watch,
    setValue,
    formState: { errors },
  } = useFormContext();

  const renderLanguageNameField = (sectionIndex) => {
    const fieldName = `languages[${sectionIndex}].languageName`;

    return (
      <TextField
        key={fieldName}
        {...register(fieldName)}
        fullWidth
        required
        id={`outlined-languagename`}
        label="Language"
        value={watch(fieldName)}
        onChange={(e) => setValue(fieldName, e.target.value)}
        error={Boolean(errors.languages?.[sectionIndex]?.languageName)}
        helperText={errors.languages?.[sectionIndex]?.languageName?.message}
      />
    );
  };

  const renderLanguageLevelField = (sectionIndex) => {
    const fieldName = `languages[${sectionIndex}].languageLevel`;

    return (
      <TextField
        key={fieldName}
        {...register(fieldName)}
        select
        fullWidth
        id={`outlined-languagelevel`}
        label="Proficiency Level"
        value={watch(fieldName)}
        onChange={(e) => setValue(fieldName, e.target.value)}
        error={Boolean(errors.languages?.[sectionIndex]?.languageLevel)}
        helperText={errors.languages?.[sectionIndex]?.languageLevel?.message}
      >
        {languageLevels.map((option) => (
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
          LANGUAGES
        </Typography>
      </Stack>
      <Stack gap={2} sx={{ width: "100%", margin: "0 auto" }}>
        {[0].map((index) => (
          <Stack
            key={index}
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
          >
            {renderLanguageNameField(index)}
            {renderLanguageLevelField(index)}
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

export default ResumeLanguages;
