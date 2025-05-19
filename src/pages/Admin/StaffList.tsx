import { Box } from "@mui/material";
import { CustomPagination } from "../../components/CustomPagination";
import { CustomTable } from "../../components/CustomTable";
import { PAGE_SIZE } from "../../config/constants";

export const StaffList = () => {
  return (
    <Box>
      <Box> Admin Access</Box>
      <CustomPagination
        pagesize={PAGE_SIZE}
        totalBlogs={userLength}
        onActionClick={onActionClick}
      />
      <CustomTable
        data={users}
        TableConfig={TableConfig}
        onActionClick={handleActionClick}
      />
    </Box>
  );
};

export default StaffList;
