"use client";

import { ColumnDef, getCoreRowModel, useReactTable } from "@tanstack/react-table";
import DataTable from "../tables/data-tables";
import { TransactionColumns, TTransaction } from "./transaction-columns";
import { Button } from "../ui/button";
import { PlusIcon } from "lucide-react";
import { AddTransactionModal } from "./add-transaction-modal";
import { useTransactions } from "@/context/transaction";

export function TransactionTable() {
    const { transactions } = useTransactions();

    const table = useReactTable({
        data: transactions || [],
        columns: TransactionColumns as unknown as ColumnDef<TTransaction>[],
        getCoreRowModel: getCoreRowModel(),
        manualSorting: true,
        enableSortingRemoval: false,
        sortDescFirst: true,
        manualPagination: true,
    });
    
    return (
        <div className="space-y-4">
            <div className="flex items-center justify-between">
                <Button variant="default">
                    <PlusIcon className="size-4" />
                    Add Transaction
                </Button>
                <AddTransactionModal />
            </div>
            <div className="grid border border-contrast-high-10 relative rounded-lg">
                <DataTable
                    table={table}
                    pageSize={10}
                    currentPage={1}
                />
            </div>
        </div>
    );
}