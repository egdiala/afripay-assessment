"use client";

import { ColumnDef, getCoreRowModel, type OnChangeFn, type SortingState, useReactTable } from "@tanstack/react-table";
import DataTable from "../tables/data-tables";
import { useCallback, useState } from "react";
import { TransactionColumns, TTransaction } from "./transaction-columns";
import { Button } from "../ui/button";
import { PlusIcon } from "lucide-react";

export function TransactionTable() {

    const pageSize = 10;
    const [currentPage, setCurrentPage] = useState<number>(1);
    const count = 0;

    const [sorting, setSorting] = useState<SortingState>([
        { id: "tvl_tvl", desc: true },
    ]);

    const handleSortingChange = useCallback<OnChangeFn<SortingState>>(
        (updaterOrValue) => {
        setSorting((old) => {
            const newSort =
            typeof updaterOrValue === "function"
                ? updaterOrValue(old)
                : updaterOrValue;

            // setCurrentPage(1);
            return newSort;
        });
        },
        []
    );

    const table = useReactTable({
        data: [],
        columns: TransactionColumns as unknown as ColumnDef<TTransaction>[],
        getCoreRowModel: getCoreRowModel(),
        state: {
            sorting,
        },
        onSortingChange: handleSortingChange,
        manualSorting: true,
        enableSortingRemoval: false,
        sortDescFirst: true,
        manualPagination: true,
        pageCount: Math.ceil((count || 0) / pageSize),
    });
    
    return (
        <div className="space-y-4">
            <div className="flex items-center justify-between">
                <Button variant="default">
                    <PlusIcon className="size-4" />
                    Add Transaction
                </Button>
                <Button variant="default">
                    <PlusIcon className="size-4" />
                    Add Transaction
                </Button>
            </div>
            <div className="grid border border-contrast-high-10 relative rounded-lg">
                <DataTable
                    table={table}
                    pageSize={pageSize}
                    currentPage={currentPage}
                />
            </div>
        </div>
    );
}