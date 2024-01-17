import React, { useEffect } from "react";
import { TextField, Stack, Typography, IconButton } from "@mui/material";
import { useFormContext } from "react-hook-form";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Divider from "@mui/material/Divider";

const AcademicEducation = () => {
  const {
    register,
    watch,
    setValue,
    formState: { errors },
  } = useFormContext();

  const educationFields = ["Degree", "Discipline", "Institution", "Year"];

  // Retrieve existing education data
  const existingEducation = watch("education") || [];
  const initialEducationFieldsCount =
    existingEducation.length > 0 ? existingEducation.length : 1;

  const [educationFieldsCount, setEducationFieldsCount] = React.useState(
    initialEducationFieldsCount
  );

  useEffect(() => {
    // Set the initial fields count based on existing data
    setEducationFieldsCount(existingEducation.length);
  }, [existingEducation.length]);

  const renderTextField = (field, sectionIndex) => {
    const fieldName = `education[${sectionIndex}].${field.toLowerCase()}`;
    const error = Boolean(
      errors.education?.[sectionIndex]?.[field.toLowerCase()]
    );
    const helperText =
      errors.education?.[sectionIndex]?.[field.toLowerCase()]?.message;

    return (
      <TextField
        key={fieldName}
        {...register(fieldName)}
        required
        id={`outlined-${fieldName}`}
        label={field}
        value={watch(fieldName)}
        type={field === "Year" ? "number" : "text"}
        onChange={(e) => setValue(fieldName, e.target.value)}
        error={error}
        helperText={helperText}
        sx={{ width: "49%" }}
      />
    );
  };

  const handleAddField = () => {
    setEducationFieldsCount((prev) => prev + 1);
  };

  const handleRemoveField = () => {
    if (educationFieldsCount > 1) {
      setEducationFieldsCount((prev) => prev - 1);
    }

    const currentEdu = watch("education");
    if (currentEdu && currentEdu.length > 0) {
      // Remove the last item from the array
      const updatedEdu = currentEdu.slice(0, -1);

      // Update the form state
      setValue("education", updatedEdu);
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
          Academic Education
        </Typography>
        <IconButton
          color="primary"
          sx={{ position: "absolute", top: "10px", right: "10px" }}
          onClick={handleAddField}
        >
          <AddIcon />
        </IconButton>
        {educationFieldsCount > 1 && (
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
        {Array.from({ length: educationFieldsCount }).map((_, index) => (
          <React.Fragment key={index}>
            {index > 0 && <Divider sx={{ width: "100%", my: 2 }} />}
            {educationFields.map((field) => renderTextField(field, index))}
          </React.Fragment>
        ))}
      </Stack>
    </Stack>
  );
};

export default AcademicEducation;
