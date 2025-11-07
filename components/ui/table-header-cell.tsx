import React from "react";
import { cn } from "@/lib/utils";
import { flexRender, Header } from "@tanstack/react-table";

interface HeaderCellProps<TData extends object> {
  header: Header<TData, unknown>;
}

export default function HeaderCell<TData extends object>({
  header,
}: HeaderCellProps<TData>) {
  const {
    isPlaceholder,
    getSize,
    getContext,
    column: { getCanSort, getToggleSortingHandler, columnDef, getIsSorted },
  } = header;

  const isSortingEnabled = getCanSort();

  return (
    <th
      onClick={isSortingEnabled ? getToggleSortingHandler() : undefined}
      className={cn(
        "text-contrast-low text-base h-12 pr-5 first:px-5 text-left font-medium"
      )}
      style={{ width: `${getSize()}px` }}
    >
      {!isPlaceholder && (
        <div
          className={cn(
            "flex items-center gap-2 rounded-md select-none whitespace-nowrap",
            isSortingEnabled &&
              "hover:text-contrast-high/50 hover:cursor-pointer"
          )}
        >
          {flexRender(columnDef.header, getContext())}
        </div>
      )}
    </th>
  );
}
