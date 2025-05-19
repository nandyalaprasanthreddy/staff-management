import { Button } from "@mui/material";

interface LoadingButtonProps {
  loading: boolean;
}
export const LoadingButton = ({ loading }: LoadingButtonProps) => {
  return (
    <Button size="small" loading={loading} variant="text" disabled></Button>
  );
};
