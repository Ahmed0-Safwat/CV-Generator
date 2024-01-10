import React, { useState, useEffect } from "react";
import {
  TextField,
  Stack,
  Typography,
  MenuItem,
  IconButton,
} from "@mui/material";
import { useFormContext } from "react-hook-form";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const languageLevels = [
  { value: "Basic", label: "Basic" },
  { value: "Conversational", label: "Conversational" },
  { value: "Fluent", label: "Fluent" },
  { value: "Native/Bilingual", label: "Native/Bilingual" },
];

const ResumeLanguages = () => {
  const [languageFieldsCount, setLanguageFieldsCount] = useState(1);

  const {
    register,
    watch,
    setValue,
    formState: { errors },
  } = useFormContext();

  const langArrayLength = watch("languages").length;

  useEffect(() => {
    setLanguageFieldsCount(langArrayLength);
  }, [watch("languages").length]);

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

  const handleAddLanguageField = () => {
    setLanguageFieldsCount((prevCount) => prevCount + 1);
  };

  const handleRemoveLanguageField = () => {
    if (languageFieldsCount > 1) {
      // Decrease the count of reference fields
      setLanguageFieldsCount((prevCount) => prevCount - 1);

      const currentLanguages = watch("languages");
      if (currentLanguages && currentLanguages.length > 0) {
        // Remove the last item from the array
        const updatedLanguages = currentLanguages.slice(0, -1);

        // Update the form state
        setValue("languages", updatedLanguages);
      }
    }
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
          position: "relative",
        }}
      >
        <Typography sx={{ color: "#FFF", fontSize: "22px", fontWeight: "400" }}>
          LANGUAGES
        </Typography>
        <IconButton
          color="primary"
          sx={{ position: "absolute", top: "10px", right: "10px" }}
          onClick={handleAddLanguageField}
        >
          <AddIcon />
        </IconButton>
      </Stack>
      <Stack gap={2} sx={{ width: "100%", margin: "0 auto" }}>
        {Array.from({ length: languageFieldsCount }).map((_, index) => (
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
      <Stack
        direction="row"
        alignItems="flex-end"
        justifyContent="flex-end"
        mt={2}
        sx={{ position: "relative" }}
      >
        <IconButton
          color="secondary"
          sx={{
            position: "absolute",
            bottom: "-5px",
            right: "5px",
          }}
          onClick={handleRemoveLanguageField}
        >
          <RemoveIcon />
        </IconButton>
      </Stack>
    </Stack>
  );
};

export default ResumeLanguages;
