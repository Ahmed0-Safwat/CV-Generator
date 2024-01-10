import React, { useState, useEffect } from "react";
import { TextField, Stack, Typography, IconButton } from "@mui/material";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { useFormContext } from "react-hook-form";
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
    formState: { errors },
  } = useFormContext();

  const eduArrayLength = watch("education").length;

  useEffect(() => {
    setEducationFieldsCount(eduArrayLength);
  }, [watch("education").length]);

  const renderTextField = (field, sectionIndex) => {
    const baseFieldName = field.toLowerCase().replace(/\s/g, "");
    const fieldName = `education[${sectionIndex}].${baseFieldName}`;

    const error = Boolean(errors.education?.[sectionIndex]?.[baseFieldName]);
    const helperText =
      errors.education?.[sectionIndex]?.[baseFieldName]?.message;

    if (baseFieldName === "startdate" || baseFieldName === "enddate") {
      return (
        <LocalizationProvider dateAdapter={AdapterDateFns} key={fieldName}>
          <DesktopDatePicker
            label={field}
            inputFormat="MM/dd/yyyy"
            value={watch(fieldName)}
            onChange={(newValue) => setValue(fieldName, newValue)}
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
      if (currentEdu && currentEdu.length > 0) {
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
        <IconButton
          color="primary"
          sx={{ position: "absolute", top: "10px", right: "10px" }}
          onClick={handleAddEducationField}
        >
          <AddIcon />
        </IconButton>
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
                    marginTop: "15px", // Adjust the marginTop here
                  }}
                >
                  <IconButton
                    color="secondary"
                    sx={{
                      position: "absolute",
                      bottom: "-5px",
                      right: "5px",
                    }}
                    onClick={handleRemoveEducationField}
                  >
                    <RemoveIcon />
                  </IconButton>
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
