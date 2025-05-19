export type TableCols = {
  userName: string;
  role: string;
  depName: string;
};

export type TableTypes = {
  field: keyof TableCols;
  headerName: string;
};

export type TableDataType = {
  userName: string;
  role: string;
  depName: string;
};
