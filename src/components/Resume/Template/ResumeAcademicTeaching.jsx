import React from "react";
import { TextField, Stack, Typography, IconButton } from "@mui/material";
import { useFormContext } from "react-hook-form";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const TeachingExp = () => {
  const {
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
    const error = Boolean(
      errors.teachingExp?.[sectionIndex]?.[
        field.toLowerCase().replace(/\s+/g, "")
      ]
    );
    const helperText =
      errors.teachingExp?.[sectionIndex]?.[
        field.toLowerCase().replace(/\s+/g, "")
      ]?.message;

    return (
      <TextField
        key={fieldName}
        {...register(fieldName)}
        required
        id={`outlined-${fieldName}`}
        label={field}
        value={watch(fieldName)}
        type={field.includes("Date") ? "date" : "text"}
        onChange={(e) => setValue(fieldName, e.target.value)}
        error={error}
        helperText={helperText}
        sx={{ width: "49%" }}
        InputLabelProps={field.includes("Date") ? { shrink: true } : null}
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
