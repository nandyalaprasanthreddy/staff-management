import React, { useState, useRef } from "react";
import { Pagination } from "@mui/material";
import { TextField } from "@mui/material";
import { Box } from "@mui/material";
interface PaginationProps {
  pagesize: number;
  totalBlogs: number;
  onActionClick: (limit: number, page: number, search?: string) => void;
}
export const CustomPagination = ({
  pagesize,
  totalBlogs,
  onActionClick,
}: PaginationProps) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const pages = Math.ceil(totalBlogs / pagesize);
  const [inputValue, setInputValue] = useState<string>("");
  const timeoutId = useRef<number | null>(null);
  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setCurrentPage(value);
    onActionClick(pagesize, value - 1, inputValue);
  };
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    setCurrentPage(1);
    if (timeoutId.current !== null) {
      clearTimeout(timeoutId.current);
    }

    timeoutId.current = window.setTimeout(() => {
      onActionClick(pagesize, currentPage - 1, e.target.value);
    }, 100);
  };
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <Pagination
          count={pages}
          page={currentPage}
          onChange={handlePageChange}
          variant="outlined"
          color="primary"
        />
        <TextField
          variant="outlined"
          name="search"
          label="Search by user"
          autoFocus
          value={inputValue}
          onChange={handleInputChange}
          size="small"
        />
      </Box>
    </>
  );
};
