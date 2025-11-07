import {
  Table,
  TableBody,
  TableHeader,
  TableRow,
  TableCell,
} from "../ui/table";
import { HeaderGroup, Header, Table as TableType } from "@tanstack/react-table";
import { flexRender } from "@tanstack/react-table";
import NoResults from "@/components/ui/no-results";
import { cn } from "@/lib/utils";
import HeaderCell from "../ui/table-header-cell";

type DataTableProps<T> = {
  table: TableType<T>;
  pageSize?: number;
  handleRowClick?: (e: React.MouseEvent, address: string) => void;
  currentPage: number;
  slice?: boolean;
};

function DataTable<T>({
  table,
  pageSize,
  handleRowClick,
  currentPage,
  slice = false,
}: DataTableProps<T>) {
  let tableData = table.getRowModel().rows;

  if (slice) {
    tableData = tableData.slice(
      (currentPage - 1) * (pageSize || 10),
      currentPage * (pageSize || 10)
    );
  }

  return (
    <Table
      className="w-full table-auto overflow-hidden rounded-lg"
      style={{
        minWidth: table.getTotalSize(),
      }}
    >
      <TableHeader>
        {table.getHeaderGroups().map((headerGroup: HeaderGroup<T>) => (
          <tr key={headerGroup.id} className="border-b">
            {headerGroup.headers.map((header: Header<T, unknown>) => (
              <HeaderCell header={header as unknown as Header<object, unknown>} key={header.id} />
            ))}
          </tr>
        ))}
      </TableHeader>
      <TableBody>
        {table.getRowModel().rows.length === 0 ? (
          <NoResults
            colSpan={table.getAllColumns().length}
            message="No results found."
          />
        ) : (
          tableData.map((row, rowIndex) => (
            <TableRow
              key={row.id}
              data-state={row.getIsSelected() && "selected"}
              className={cn("h-12", handleRowClick && "cursor-pointer")}
              onClick={(e) =>
                handleRowClick &&
                handleRowClick(e, (row.original as any).address)
              }
              style={{
                width: row
                  .getVisibleCells()
                  .map((cell) => cell.column.getSize())[0],
              }}
            >
              {row.getVisibleCells().map((cell) => (
                <TableCell key={cell.id} className="py-3">
                  {cell.column.id === "rowIndex" ? (
                    <div className="text-contrast-low text-center leading-5">
                      {(currentPage - 1) * (pageSize || 10) + rowIndex + 1}
                    </div>
                  ) : (
                    flexRender(cell.column.columnDef.cell, cell.getContext())
                  )}
                </TableCell>
              ))}
            </TableRow>
          ))
        )}
      </TableBody>
    </Table>
  );
}

export default DataTable;
