import React from "react";
import { TextField, Stack, Typography, IconButton } from "@mui/material";
import { useFormContext, Controller } from "react-hook-form";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const TeachingExp = () => {
  const {
    control,
    register,
    watch,
    setValue,
    formState: { errors },
  } = useFormContext();

  const teachingExpFields = ["Title", "Description", "Start Date", "End Date"];

  const renderTextField = (field, sectionIndex) => {
    const fieldName = `teachingExp[${sectionIndex}].${field
      .toLowerCase()
      .replace(/\s+/g, "")}`;

    const isDateField = field.includes("Date");
    const error = Boolean(errors.teachingExp?.[sectionIndex]?.[fieldName]);
    const helperText = errors.teachingExp?.[sectionIndex]?.[fieldName]?.message;

    console.log("sectionIndex", sectionIndex);
    console.log("helperText", helperText);

    console.log("errors", errors);
    console.log("error", error);

    if (isDateField) {
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
        label={field}
        value={watch(fieldName)}
        onChange={(e) => setValue(fieldName, e.target.value)}
        error={error}
        helperText={helperText}
        sx={{ width: "49%" }}
      />
    );
  };

  const [teachingExpFieldsCount, setTeachingExpFieldsCount] = React.useState(1);

  const handleAddField = () => {
    setTeachingExpFieldsCount((prev) => prev + 1);
  };

  const handleRemoveField = () => {
    if (teachingExpFieldsCount > 1) {
      setTeachingExpFieldsCount((prev) => prev - 1);

      const currentTeachingExp = watch("teachingExp");
      if (currentTeachingExp && currentTeachingExp.length > 0) {
        const updatedTeachingExp = currentTeachingExp.slice(0, -1);
        setValue("teachingExp", updatedTeachingExp);
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
          Teaching Experience
        </Typography>
        <IconButton
          color="primary"
          sx={{ position: "absolute", top: "10px", right: "10px" }}
          onClick={handleAddField}
        >
          <AddIcon />
        </IconButton>
        {teachingExpFieldsCount > 1 && (
          <IconButton
            color="secondary"
            sx={{ position: "absolute", top: "10px", right: "50px" }}
            onClick={handleRemoveField}
          >
            <RemoveIcon />
          </IconButton>
        )}
      </Stack>
      <Stack
        gap={2}
        sx={{ width: "100%", margin: "0 auto" }}
        direction="row"
        flexWrap="wrap"
      >
        {Array.from({ length: teachingExpFieldsCount }).map((_, index) => (
          <React.Fragment key={index}>
            {teachingExpFields.map((field) => renderTextField(field, index))}
          </React.Fragment>
        ))}
      </Stack>
    </Stack>
  );
};

export default TeachingExp;
