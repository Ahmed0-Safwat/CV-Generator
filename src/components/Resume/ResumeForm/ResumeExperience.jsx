import React, { useState, useEffect } from "react";
import { TextField, Stack, Typography, IconButton } from "@mui/material";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { useFormContext, Controller } from "react-hook-form";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const ResumeExperience = () => {
  const [experienceFieldsCount, setExperienceFieldsCount] = useState(1);

  const {
    control,
    register,
    watch,
    setValue,
    formState: { errors },
  } = useFormContext();

  const expArrayLength = watch("experience")?.length;

  useEffect(() => {
    setExperienceFieldsCount(expArrayLength);
  }, [expArrayLength]);

  const renderTextField = (field, sectionIndex) => {
    let baseFieldName = field.toLowerCase().replace(/\s/g, "");
    if (baseFieldName === "company/organization") baseFieldName = "company";
    if (field === "Title") baseFieldName = "jobTitle";

    const fieldName = `experience[${sectionIndex}].${baseFieldName}`;

    const error = Boolean(errors.experience?.[sectionIndex]?.[baseFieldName]);
    const helperText =
      errors.experience?.[sectionIndex]?.[baseFieldName]?.message;

    if (baseFieldName === "startdate" || baseFieldName === "enddate") {
      return (
        <LocalizationProvider dateAdapter={AdapterDateFns} key={fieldName}>
          <Controller
            name={fieldName}
            control={control}
            render={({ field: { onChange, value } }) => (
              <DesktopDatePicker
                label={field}
                inputFormat="MM/dd/yyyy"
                value={value}
                onChange={onChange}
                sx={{ width: "32%" }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    required
                    error={error}
                    helperText={helperText}
                  />
                )}
              />
            )}
          />
        </LocalizationProvider>
      );
    }

    return (
      <TextField
        key={fieldName}
        {...register(fieldName)}
        required
        id={`outlined-${fieldName}`}
        label={field}
        value={watch(fieldName)}
        onChange={(e) => setValue(fieldName, e.target.value)}
        error={error}
        helperText={helperText}
        sx={{ width: "32%" }}
      />
    );
  };

  const handleAddExperienceField = () => {
    setExperienceFieldsCount((prevCount) => prevCount + 1);
  };

  const handleRemoveExperienceField = () => {
    if (experienceFieldsCount > 1) {
      setExperienceFieldsCount((prevCount) => prevCount - 1);

      const currentEXP = watch("experience");
      if (currentEXP && currentEXP?.length > 0) {
        const updatedEXP = currentEXP?.slice(0, -1);
        setValue("experience", updatedEXP);
      }
    }
  };

  const experienceFields = [
    "Title",
    "Company / Organization",
    "Location",
    "Start Date",
    "End Date",
    "Description",
  ];

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
          EXPERIENCE
        </Typography>
        <Stack
          direction="row"
          alignItems="center"
          spacing={2}
          sx={{ position: "absolute", top: "10px", right: "10px" }}
        >
          <IconButton color="primary" onClick={handleAddExperienceField}>
            <AddIcon />
          </IconButton>
          <IconButton color="secondary" onClick={handleRemoveExperienceField}>
            <RemoveIcon />
          </IconButton>
        </Stack>
      </Stack>
      <Stack
        gap={2}
        sx={{ width: "100%", margin: "0 auto" }}
        direction="row"
        flexWrap="wrap"
      >
        {Array.from({ length: experienceFieldsCount }).map((_, index) =>
          experienceFields.map((field) => (
            <React.Fragment key={field}>
              {renderTextField(field, index)}
            </React.Fragment>
          ))
        )}
      </Stack>
    </Stack>
  );
};

export default ResumeExperience;
