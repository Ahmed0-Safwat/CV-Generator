import React, { useState, useEffect } from "react";
import {
  TextField,
  Stack,
  Typography,
  MenuItem,
  IconButton,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useFormContext } from "react-hook-form";

const currencies = [
  { value: "20%", label: "Poor" },
  { value: "40%", label: "Fair" },
  { value: "60%", label: "Good" },
  { value: "80%", label: "Very Good" },
  { value: "100%", label: "Excellent" },
];

const ResumeSkills = () => {
  const [skillsFieldsCount, setSkillsFieldsCount] = useState(1);

  const {
    register,
    watch,
    setValue,
    formState: { errors },
  } = useFormContext();

  const skillsArrayLength = watch("skills").length;

  useEffect(() => {
    setSkillsFieldsCount(skillsArrayLength);
  }, [watch("skills").length]);

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

  const handleAddSkillsField = () => {
    setSkillsFieldsCount((prevCount) => prevCount + 1);
  };

  const handleRemoveSkillsField = () => {
    if (skillsFieldsCount > 1) {
      // Decrease the count of reference fields
      setSkillsFieldsCount((prevCount) => prevCount - 1);

      // Get current skills values
      const currentSkills = watch("skills");
      if (currentSkills && currentSkills.length > 0) {
        // Remove the last item from the array
        const updatedSkills = currentSkills.slice(0, -1);

        // Update the form state
        setValue("skills", updatedSkills);
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
          position: "relative", // Added position relative
        }}
      >
        <Typography sx={{ color: "#FFF", fontSize: "22px", fontWeight: "400" }}>
          SKILLS
        </Typography>
        <IconButton
          color="primary"
          sx={{ position: "absolute", top: "10px", right: "10px" }}
          onClick={handleAddSkillsField}
        >
          <AddIcon />
        </IconButton>
      </Stack>
      <Stack gap={2} sx={{ width: "100%", margin: "0 auto" }}>
        {Array.from({ length: skillsFieldsCount }).map((_, index) => (
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
          onClick={handleRemoveSkillsField}
        >
          <RemoveIcon />
        </IconButton>
      </Stack>
    </Stack>
  );
};

export default ResumeSkills;
