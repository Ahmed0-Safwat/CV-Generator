import React, { useEffect } from "react";
import { TextField, Stack, Typography, IconButton } from "@mui/material";
import { useFormContext } from "react-hook-form";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Divider from "@mui/material/Divider";

const Publications = () => {
  const {
    register,
    watch,
    setValue,
    formState: { errors },
  } = useFormContext();

  const publicationFields = ["Description"];

  // Retrieve existing publications data
  const existingPublications = watch("publications") || [];
  const initialPublicationFieldsCount =
    existingPublications.length > 0 ? existingPublications.length : 1;

  const [publicationFieldsCount, setPublicationFieldsCount] = React.useState(
    initialPublicationFieldsCount
  );

  useEffect(() => {
    // Set the initial fields count based on existing data
    setPublicationFieldsCount(existingPublications.length);
  }, [existingPublications.length]);

  const renderTextField = (field, sectionIndex) => {
    const fieldName = `publications[${sectionIndex}].${field
      .toLowerCase()
      .replace(/\s+/g, "")}`;
    const error = Boolean(
      errors.publications?.[sectionIndex]?.[
        field.toLowerCase().replace(/\s+/g, "")
      ]
    );
    const helperText =
      errors.publications?.[sectionIndex]?.[
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
        type={field === "Year" ? "number" : "text"}
        onChange={(e) => setValue(fieldName, e.target.value)}
        error={error}
        helperText={helperText}
        sx={{ width: field === "Description" ? "100%" : "49%" }}
      />
    );
  };

  const handleAddField = () => {
    setPublicationFieldsCount((prev) => prev + 1);
  };

  const handleRemoveField = () => {
    if (publicationFieldsCount > 1) {
      setPublicationFieldsCount((prev) => prev - 1);

      const currentPubs = watch("publications");
      if (currentPubs && currentPubs.length > 0) {
        const updatedPubs = currentPubs.slice(0, -1);
        setValue("publications", updatedPubs);
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
          Publications
        </Typography>
        <IconButton
          color="primary"
          sx={{ position: "absolute", top: "10px", right: "10px" }}
          onClick={handleAddField}
        >
          <AddIcon />
        </IconButton>
        {publicationFieldsCount > 1 && (
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
        {Array.from({ length: publicationFieldsCount }).map((_, index) => (
          <React.Fragment key={index}>
            {index > 0 && <Divider sx={{ width: "100%", my: 2 }} />}
            {publicationFields.map((field) => renderTextField(field, index))}
          </React.Fragment>
        ))}
      </Stack>
    </Stack>
  );
};

export default Publications;
