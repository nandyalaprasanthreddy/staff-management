import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import type { TableTypes, TableDataType } from "../config/config.types";

interface TableProps {
  data: TableDataType[];
  TableConfig: TableTypes[];
  onActionClick: (row: TableDataType) => void;
}
export const CustomTable = ({ data, TableConfig, onActionClick }: TableProps) => {
  return (
    <Box sx={{ margin: 1 }}>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              {TableConfig.map((col) => (
                <TableCell key={col.field}>{col.headerName}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row, i) => (
              <TableRow key={i}>
                {TableConfig.map((col) => (
                  <TableCell key={col.field}>
                    {col.field === "action" ? (
                      <Button
                        variant="outlined"
                        onClick={() => onActionClick(row)}
                      >
                        {col.headerName}
                      </Button>
                    ) : (
                      row[col.field]
                    )}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};
