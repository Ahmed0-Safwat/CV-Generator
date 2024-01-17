import React, { useState, useEffect } from "react";
import { TextField, Stack, Typography, IconButton } from "@mui/material";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { useFormContext, Controller } from "react-hook-form";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const ResumeEducation = () => {
  const [educationFieldsCount, setEducationFieldsCount] = useState(1);

  const {
    register,
    watch,
    setValue,
    control,
    formState: { errors },
  } = useFormContext();

  const eduArrayLength = watch("education")?.length;

  useEffect(() => {
    setEducationFieldsCount(eduArrayLength);
  }, [eduArrayLength]);

  const renderTextField = (field, sectionIndex) => {
    const baseFieldName = field.toLowerCase().replace(/\s/g, "");
    const fieldName = `education[${sectionIndex}].${baseFieldName}`;
    const error = Boolean(errors.education?.[sectionIndex]?.[baseFieldName]);
    const helperText =
      errors.education?.[sectionIndex]?.[baseFieldName]?.message;

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
                sx={{ width: "49%" }}
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
        sx={{ width: "49%" }}
      />
    );
  };

  const handleAddEducationField = () => {
    setEducationFieldsCount((prevCount) => prevCount + 1);
  };

  const handleRemoveEducationField = () => {
    if (educationFieldsCount > 1) {
      // Decrease the count of reference fields
      setEducationFieldsCount((prevCount) => prevCount - 1);

      const currentEdu = watch("education");
      if (currentEdu && currentEdu?.length > 0) {
        // Remove the last item from the array
        const updatedEdu = currentEdu.slice(0, -1);

        // Update the form state
        setValue("education", updatedEdu);
      }
    }
  };

  const educationFields = [
    "University",
    "Department",
    "Start Date",
    "End Date",
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
          EDUCATION
        </Typography>
        <Stack
          direction="row"
          alignItems="center"
          spacing={2}
          sx={{ position: "absolute", top: "10px", right: "10px" }}
        >
          <IconButton color="primary" onClick={handleAddEducationField}>
            <AddIcon />
          </IconButton>
          <IconButton color="secondary" onClick={handleRemoveEducationField}>
            <RemoveIcon />
          </IconButton>
        </Stack>
      </Stack>
      <Stack gap={2} sx={{ margin: "0 auto" }} direction="row" flexWrap="wrap">
        {Array.from({ length: educationFieldsCount }).map((_, index) =>
          educationFields.map((field, fieldIndex) => (
            <React.Fragment key={fieldIndex}>
              {renderTextField(field, index)}
              {fieldIndex === educationFields.length - 1 && (
                <Stack
                  direction="row"
                  alignItems="flex-end"
                  spacing={2}
                  sx={{
                    position: "relative",
                    width: "100%",
                    marginTop: "15px",
                  }}
                >
                  {/* The remove icon is now part of the same Stack */}
                </Stack>
              )}
            </React.Fragment>
          ))
        )}
      </Stack>
    </Stack>
  );
};

export default ResumeEducation;
