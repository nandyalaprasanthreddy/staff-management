import { useState } from "react";
import Box from "@mui/material/Box";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

type ToastType = "success" | "error" ;

interface SnackBarProps {
  openSnackBar: boolean;
  message: string;
  severityType: ToastType;
}
export const Toast = ({
  openSnackBar,
  message,
  severityType,
}: SnackBarProps) => {
  const [open, setOpen] = useState<boolean>(openSnackBar || false);

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Box>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert
          onClose={handleClose}
          severity={severityType}
          variant="filled"
          sx={{ width: "100%" }}
        >
          {message}
        </Alert>
      </Snackbar>
    </Box>
  );
};
