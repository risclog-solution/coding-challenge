import { DataGrid } from "@mui/x-data-grid";
import { useState, useEffect } from "react";
import { mapCustomerToDataGrid } from "../utils";
import type { Customer } from "../custom";
import customerData from "../assets/customer.json";

export const CustomDataGrid = () => {
  const [rows, setRows] = useState<Customer[]>([]);

  useEffect(() => {
    const mappedCustomerData = mapCustomerToDataGrid(customerData);
    setRows(mappedCustomerData);
  }, []);

  const columnDef = [
    { field: "id", headerName: "ID", width: 90 },
    { field: "name", headerName: "Name", width: 150 },
    { field: "email", headerName: "Email", width: 220 },
    { field: "phone", headerName: "Telefon", width: 150 },
    { field: "city", headerName: "Stadt", width: 150 },
    { field: "status", headerName: "Status", width: 120 },
    { field: "birthday", headerName: "Geburtstag", width: 150 },
  ];

  return <DataGrid columns={columnDef} rows={rows} />;
};
