import React, { useState } from "react";
import { TextField, Stack, Typography, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useFormContext } from "react-hook-form";

const ResumeReferences = () => {
  const [referenceFieldsCount, setReferenceFieldsCount] = useState(1);

  const {
    register,
    watch,
    setValue,
    formState: { errors },
  } = useFormContext();

  const handlePhoneNumberChange = (event, index) => {
    const value = event.target.value;
    // Replace any non-digit characters with an empty string
    const filteredValue = value.replace(/\D/g, "");
    setValue(`references[${index}].phone`, filteredValue);
  };

  const referenceFields = [
    {
      label: "Name",
      placeholder: "e.g. Doe",
      type: "text",
      name: "name",
    },
    {
      label: "Job Title",
      placeholder: "Software Engineer",
      type: "text",
      name: "jobTitle",
    },
    {
      label: "Email",
      placeholder: "e.g. johndoe@gmail.com",
      type: "email",
      name: "email",
    },
    {
      label: "Phone Nom:",
      placeholder: "e.g. 456-768-798",
      type: "tel",
      name: "phone",
      onChange: handlePhoneNumberChange,
    },
  ];

  const handleAddField = () => {
    setReferenceFieldsCount((prev) => prev + 1);
  };

  const handleRemoveField = () => {
    if (referenceFieldsCount > 1) {
      // Decrease the count of reference fields
      setReferenceFieldsCount((prev) => prev - 1);

      // Get current references values
      const currentReferences = watch("references");
      if (currentReferences && currentReferences.length > 0) {
        // Remove the last item from the array
        const updatedReferences = currentReferences.slice(0, -1);

        // Update the form state
        setValue("references", updatedReferences);
      }
    }
  };

  return (
    <Stack width="100%" spacing={4}>
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
          REFERENCES
        </Typography>
        <IconButton
          color="primary"
          sx={{ position: "absolute", top: "10px", right: "10px" }}
          onClick={handleAddField}
        >
          <AddIcon />
        </IconButton>
      </Stack>
      {Array.from({ length: referenceFieldsCount }).map((_, index) => (
        <Stack key={index} direction="row" flexWrap="wrap" gap={2}>
          {referenceFields.map((field, fieldIndex) => (
            <TextField
              key={fieldIndex}
              {...register(`references[${index}].${field.name}`)}
              type={field.type}
              sx={{ width: "49%" }}
              required
              id={`outlined-${field.label.toLowerCase()}`}
              label={field.label}
              placeholder={field.placeholder}
              variant="outlined"
              name={field.name}
              value={watch(`references[${index}].${field.name}`)}
              onChange={
                field.name === "phone"
                  ? (e) => handlePhoneNumberChange(e, index)
                  : (e) =>
                      setValue(
                        `references[${index}].${field.name}`,
                        e.target.value
                      )
              }
              error={Boolean(errors.references?.[index]?.[field.name])}
              helperText={errors.references?.[index]?.[field.name]?.message}
            />
          ))}
        </Stack>
      ))}
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
          onClick={handleRemoveField}
        >
          <RemoveIcon />
        </IconButton>
      </Stack>
    </Stack>
  );
};

export default ResumeReferences;
