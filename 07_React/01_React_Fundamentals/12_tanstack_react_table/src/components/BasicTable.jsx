import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  getPaginationRowModel,
  getSortedRowModel,
  getFilteredRowModel,
} from "@tanstack/react-table";
import Mdata from "../../data.json";
import { useMemo, useState } from "react";
import "./table.css";
const BasicTable = () => {
  const [sorting, setSorting] = useState([]);
  const [filter, setfilter] = useState("");

  const data = useMemo(() => Mdata, []);
  const columnsDef = [
    { header: "ID", accessorKey: "id" },
    { header: "First Name", accessorKey: "first_name" },
    { header: "Last Name", accessorKey: "last_name" },
    { header: "Email", accessorKey: "email" },
    { header: "Gender", accessorKey: "gender" },
    { header: "Date Of Birth", accessorKey: "date_of_birth" },
  ];
  const columns = useMemo(() => columnsDef, []);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    state: {
      sorting: sorting,
      globalFilter: filter,
    },
    onSortingChange: setSorting,
    onGlobalFilterChange: setfilter,
    getFilteredRowModel: getFilteredRowModel(),
  });

  return (
    <>
      <input
        type="text"
        value={filter}
        onChange={(e) => setfilter(e.target.value)}
      />
      <table>
        <thead>
          {table.getHeaderGroups().map((HeaderGroup) => (
            <tr key={HeaderGroup.id}>
              {HeaderGroup.headers.map((header) => (
                <th
                  key={header.id}
                  onClick={header.column.getToggleSortingHandler()}
                >
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                  {
                    { asc: " 🔼", desc: " 🔽" }[
                      header.column.getIsSorted() ?? null
                    ]
                  }
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <button onClick={() => table.setPageIndex(0)}>First Page</button>
        <button
          disabled={!table.getCanPreviousPage()}
          onClick={() => table.previousPage()}
        >
          Previous Page
        </button>
        <button
          disabled={!table.getCanNextPage()}
          onClick={() => table.nextPage()}
        >
          Next Page
        </button>
        <button onClick={() => table.setPageIndex(table.getPageCount() - 1)}>
          Last Page
        </button>
      </div>
    </>
  );
};
export default BasicTable;
