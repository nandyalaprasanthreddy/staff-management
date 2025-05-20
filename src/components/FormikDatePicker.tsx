import { useField, useFormikContext } from "formik";
import { TextField } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

type FormikDatePickerProps = {
  name: string;
  label: string;
};

export const FormikDatePicker = ({ name, label }: FormikDatePickerProps) => {
  const [field, meta] = useField(name);
  const { setFieldValue } = useFormikContext();

  const isError = meta.touched && Boolean(meta.error);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        label={label}
        value={field.value || null}
        onChange={(val) => setFieldValue(name, val)}
        renderInput={(params) => (
          <TextField
            {...params}
            fullWidth
            margin="normal"
            error={isError}
            helperText={isError ? meta.error : ""}
          />
        )}
      />
    </LocalizationProvider>
  );
};
