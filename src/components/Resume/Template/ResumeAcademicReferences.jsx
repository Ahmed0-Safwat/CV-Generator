import React from "react";
import { TextField, Stack, Typography, IconButton } from "@mui/material";
import { useFormContext } from "react-hook-form";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const AcademicReferences = () => {
  const {
    register,
    watch,
    setValue,
    formState: { errors },
  } = useFormContext();

  const referenceFields = ["Reference"];

  const renderTextField = (field, sectionIndex) => {
    const fieldName = `references[${sectionIndex}].${field
      .toLowerCase()
      .replace(/\s+/g, "")}`;
    const error = Boolean(
      errors.references?.[sectionIndex]?.[
        field.toLowerCase().replace(/\s+/g, "")
      ]
    );
    const helperText =
      errors.references?.[sectionIndex]?.[
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
        type="text"
        onChange={(e) => setValue(fieldName, e.target.value)}
        error={error}
        helperText={helperText}
        sx={{ width: "100%" }}
      />
    );
  };

  const [referenceFieldsCount, setReferenceFieldsCount] = React.useState(1);

  const handleAddField = () => {
    setReferenceFieldsCount((prev) => prev + 1);
  };

  const handleRemoveField = () => {
    if (referenceFieldsCount > 1) {
      setReferenceFieldsCount((prev) => prev - 1);

      const currentRefs = watch("references");
      if (currentRefs && currentRefs.length > 0) {
        const updatedRefs = currentRefs.slice(0, -1);
        setValue("references", updatedRefs);
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
          Academic References
        </Typography>
        <IconButton
          color="primary"
          sx={{ position: "absolute", top: "10px", right: "10px" }}
          onClick={handleAddField}
        >
          <AddIcon />
        </IconButton>
        {referenceFieldsCount > 1 && (
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
        direction="column"
      >
        {Array.from({ length: referenceFieldsCount }).map((_, index) => (
          <React.Fragment key={index}>
            {referenceFields.map((field) => renderTextField(field, index))}
          </React.Fragment>
        ))}
      </Stack>
    </Stack>
  );
};

export default AcademicReferences;
