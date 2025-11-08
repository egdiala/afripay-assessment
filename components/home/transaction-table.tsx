"use client";

import { ColumnDef, getCoreRowModel, useReactTable } from "@tanstack/react-table";
import DataTable from "../tables/data-tables";
import { TransactionColumns, type TTransaction, type TTransactionType } from "./transaction-columns";
import { Button } from "../ui/button";
import { ListFilter } from "lucide-react";
import { AddTransactionModal } from "./add-transaction-modal";
import { useTransactions } from "@/context/transaction";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { useMemo, useState } from "react";

export function TransactionTable() {
    const [filter, setFilter] = useState<TTransactionType | undefined>(undefined);
    const { transactions } = useTransactions();

    const filteredTransactions = useMemo(() => {
        return transactions.filter((transaction) => {
            if (filter === undefined) {
                return true;
            }
            return transaction.type.toLowerCase() === filter.toLowerCase();
        });
    }, [transactions, filter]);

    const table = useReactTable({
        data: filteredTransactions || [],
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
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline" className="capitalize">
                            <ListFilter />
                            {filter === undefined ? "Filter" : filter}
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start" className="origin-top-left">
                        <DropdownMenuItem onClick={() => setFilter(undefined)}>  
                            All
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setFilter("credit")}>
                            Credit
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setFilter("debit")}>
                            Debit
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
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