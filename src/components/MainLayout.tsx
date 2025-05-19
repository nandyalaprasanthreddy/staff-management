import { Box } from "@mui/material";
import Sidebar from "./Sidebar";
import type { Roles } from "../config/Sidebar.config";
interface MainLayoutProps {
  children: React.ReactNode;
  role: Roles;
}
const Mainlayout = ({ children, role }: MainLayoutProps) => {
  console.log(role);

  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar role={role} />
      <Box
        sx={{
          top: 0,
          left: "250px",
          width: "calc(100% - 250px)",
          height: "100vh",
          backgroundColor: "#f0f0f0",
          overflowY: "auto",
          position: "fixed",
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default Mainlayout;
