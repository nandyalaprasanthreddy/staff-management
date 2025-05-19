import {useState} from "react"
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import { SidebarItems } from "../config/Sidebar.config";
import type { Roles } from "../config/Sidebar.config";
import { Link as RouterLink } from "react-router-dom";

interface SideBarProps {
  role: Roles;
}
const Sidebar = ({ role }: SideBarProps) => {
  const [target, setTarget] = useState<number | null>(null);
  console.log(role);
  const handleClick = (value: number) => {
    setTarget(value);
  };
  return (
    <Box
      sx={{
        width: "250px",
        height: "100vh",
        backgroundColor: "slateblue",
        color: "#fff",
        overflowY: "auto",
        position: "fixed",
        top: 0,
        left: 0,
      }}
    >
      <Typography
        variant="h6"
        gutterBottom
        sx={{ paddingLeft: 7, paddingTop: 2 }}
      >
        My Sidebar
      </Typography>

      <List>
        {SidebarItems[role].map((obj, i) => (
          <ListItem
            key={obj.text}
            component={RouterLink}
            to={obj.path}
            onClick={() => handleClick(i)}
            type="button"
            sx={{
              color: "black",
              textDecoration: "none",
              paddingLeft: 7,
              backgroundColor: target === i ? "white" : "",
              borderRadius: target === i ? 2 : "",
              "&:hover": {
                backgroundColor: "#7679B9",
                borderRadius: 2,
                color: "white",
              },
            }}
          >
            <ListItemText primary={obj.text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Sidebar;
