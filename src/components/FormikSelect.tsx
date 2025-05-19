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
  return (
    <TextField
      select
      fullWidth
      label={label}
      {...field}
      error={meta.touched && !!meta.error}
      helperText={meta.touched && meta.error}
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
