import React from "react";
import { TextField, Stack, Typography, IconButton } from "@mui/material";
import { useFormContext } from "react-hook-form";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const Certificates = () => {
  const {
    register,
    watch,
    setValue,
    formState: { errors },
  } = useFormContext();

  const renderTextField = (sectionIndex) => {
    const fieldName = `certificates[${sectionIndex}].honor`; // Align with your schema
    const error = Boolean(errors.certificates?.[sectionIndex]?.honor);
    const helperText = errors.certificates?.[sectionIndex]?.honor?.message;

    return (
      <TextField
        key={fieldName}
        {...register(fieldName)}
        id={`outlined-${fieldName}`}
        label="Certificate Name" // Adjust label as needed
        value={watch(fieldName)}
        type="text"
        onChange={(e) => setValue(fieldName, e.target.value)}
        error={error}
        helperText={helperText}
        fullWidth // Ensure full width
      />
    );
  };

  const [certificateFieldsCount, setCertificateFieldsCount] = React.useState(1);

  const handleAddField = () => {
    setCertificateFieldsCount((prev) => prev + 1);
  };

  const handleRemoveField = () => {
    if (certificateFieldsCount > 1) {
      setCertificateFieldsCount((prev) => prev - 1);

      const currentCerts = watch("certificates");
      if (currentCerts && currentCerts.length > 0) {
        const updatedCerts = currentCerts.slice(0, -1);
        setValue("certificates", updatedCerts);
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
          Certificates
        </Typography>
        <IconButton
          color="primary"
          sx={{ position: "absolute", top: "10px", right: "10px" }}
          onClick={handleAddField}
        >
          <AddIcon />
        </IconButton>
        {certificateFieldsCount > 1 && (
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
        {Array.from({ length: certificateFieldsCount }).map((_, index) => (
          <React.Fragment key={index}>{renderTextField(index)}</React.Fragment>
        ))}
      </Stack>
    </Stack>
  );
};

export default Certificates;
