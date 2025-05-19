import { TextField } from "@mui/material";
import { useField } from "formik";

type InputProps = {
  label: string;
  name: string;
  type?: string;
  select?: boolean;
  options?: { label: string; value: string | number }[];
};

export const FormikTextField = ({ label, ...props }: InputProps) => {
  const [field, meta] = useField(props.name);
  return (
    <TextField
      fullWidth
      label={label}
      {...field}
      {...props}
      error={meta.touched && !!meta.error}
      helperText={meta.touched && meta.error}
      margin="normal"
    />
  );
};
