"use client";

import { Button } from "../ui/button";
import { useMemo, useState } from "react";
import DataTable from "../tables/data-tables";
import CsvDownloader from 'react-csv-downloader';
import { useTransactions } from "@/context/transaction";
import { FileSpreadsheet, ListFilter } from "lucide-react";
import { AddTransactionModal } from "./add-transaction-modal";
import { ColumnDef, getCoreRowModel, useReactTable } from "@tanstack/react-table";
import { TransactionColumns, type TTransaction, type TTransactionType } from "./transaction-columns";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu";

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
                <div className="flex items-center gap-2">
                    <CsvDownloader filename="afripay_transactions_export.csv" datas={filteredTransactions.map((transaction) => ({
                        id: transaction.id.toString(),
                        description: transaction.description,
                        amount: Intl.NumberFormat("en-NG", { style: "currency", currency: "NGN" }).format(transaction.amount),
                        type: transaction.type,
                        createdAt: transaction.createdAt.toString(),
                    }))}>
                   <Button variant="secondary">
                        <FileSpreadsheet className="size-4" />
                        Export
                    </Button>

                    </CsvDownloader>
                   <AddTransactionModal />
                </div>
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