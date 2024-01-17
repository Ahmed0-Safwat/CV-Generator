import React from "react";
import { TextField, Stack, Typography, IconButton } from "@mui/material";
import { useFormContext, Controller } from "react-hook-form";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import Divider from "@mui/material/Divider";

const Certificates = () => {
  const {
    control,
    register,
    watch,
    setValue,
    formState: { errors },
  } = useFormContext();

  const certificatesFields = ["Start Date", "End Date", "Description"];

  const renderTextField = (field, sectionIndex) => {
    const fieldName = `certificates[${sectionIndex}].${field
      .toLowerCase()
      .replace(/\s+/g, "")}`;

    const isDateField = field.includes("Date");
    const error = Boolean(errors.certificates?.[sectionIndex]?.[fieldName]);
    const helperText =
      errors.certificates?.[sectionIndex]?.[fieldName]?.message;

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
        sx={{ width: "100%" }}
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
        direction="row"
        flexWrap="wrap"
      >
        {Array.from({ length: certificateFieldsCount }).map((_, index) => (
          <React.Fragment key={index}>
            {index > 0 && <Divider sx={{ width: "100%", my: 2 }} />}
            {certificatesFields.map((field) => renderTextField(field, index))}
          </React.Fragment>
        ))}
      </Stack>
    </Stack>
  );
};

export default Certificates;
