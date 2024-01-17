import React, { useEffect } from "react";
import { TextField, Stack, Typography, IconButton } from "@mui/material";
import { useFormContext } from "react-hook-form";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const Courses = () => {
  const {
    register,
    watch,
    setValue,
    formState: { errors },
  } = useFormContext();

  // Retrieve existing courses data
  const existingCourses = watch("courses") || [];
  const initialCourseFieldsCount =
    existingCourses.length > 0 ? existingCourses.length : 1;

  const [courseFieldsCount, setCourseFieldsCount] = React.useState(
    initialCourseFieldsCount
  );

  useEffect(() => {
    // Set the initial fields count based on existing data
    setCourseFieldsCount(existingCourses.length);
  }, [existingCourses.length]);

  const renderTextField = (sectionIndex) => {
    const fieldName = `courses[${sectionIndex}].courses`; // Align with your schema
    const error = Boolean(errors.courses?.[sectionIndex]?.courses);
    const helperText = errors.courses?.[sectionIndex]?.courses?.message;

    return (
      <TextField
        key={fieldName}
        {...register(fieldName)}
        required
        id={`outlined-${fieldName}`}
        label="Course Name" // Label for the input
        value={watch(fieldName)}
        type="text"
        onChange={(e) => setValue(fieldName, e.target.value)}
        error={error}
        helperText={helperText}
        fullWidth // Ensure full width
      />
    );
  };

  const handleAddField = () => {
    setCourseFieldsCount((prev) => prev + 1);
  };

  const handleRemoveField = () => {
    if (courseFieldsCount > 1) {
      setCourseFieldsCount((prev) => prev - 1);

      const currentCourses = watch("courses");
      if (currentCourses && currentCourses.length > 0) {
        const updatedCourses = currentCourses.slice(0, -1);
        setValue("courses", updatedCourses);
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
          Courses
        </Typography>
        <IconButton
          color="primary"
          sx={{ position: "absolute", top: "10px", right: "10px" }}
          onClick={handleAddField}
        >
          <AddIcon />
        </IconButton>
        {courseFieldsCount > 1 && (
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
        direction="column" // Change to column for full width
      >
        {Array.from({ length: courseFieldsCount }).map((_, index) => (
          <React.Fragment key={index}>{renderTextField(index)}</React.Fragment>
        ))}
      </Stack>
    </Stack>
  );
};

export default Courses;
