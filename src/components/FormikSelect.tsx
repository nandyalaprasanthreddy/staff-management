import { TextField, MenuItem } from "@mui/material";
import { useField } from "formik";

type InputProps = {
  label: string;
  name: string;
  type?: string;
  select?: boolean;
  options?: { label: string; value: string | number }[];
};

export const FormikSelect = ({ label, options = [], ...props }: InputProps) => {
  const [field, meta] = useField(props.name);
  const isError = meta.touched && Boolean(meta.error);

  return (
    <TextField
      select
      fullWidth
      label={label}
      {...field}
      {...props}
      error={isError}
      helperText={isError ? meta.error : ""}
      margin="normal"
    >
      {options.map((opt) => (
        <MenuItem key={opt.value} value={opt.value}>
          {opt.label}
        </MenuItem>
      ))}
    </TextField>
  );
};
