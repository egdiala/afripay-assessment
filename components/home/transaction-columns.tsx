"use client";

import { ColumnDef } from "@tanstack/react-table";

export type TTransactionType = "credit" | "debit";

export type TTransaction = {
    id: number;
    description: string;
    amount: number;
    type: TTransactionType;
    createdAt: Date | string;
}

export const TransactionColumns: ColumnDef<TTransaction>[] = [
  {
    id: "id",
    accessorKey: "id",
    header: "ID",
    enableSorting: false,
    size: 40,
  },
  {
    accessorKey: "description",
    header: "Description",
    cell: (info) => {
      return <span className="">{info.getValue() as string}</span>;
    },
    enableSorting: false,
    minSize: 550,
    maxSize: 800,
  },
  {
    accessorKey: "amount",
    header: "Amount",
    cell: (info) => {
      return <span className="">{info.getValue() as number}</span>;
    },
    enableSorting: true,
  },
  {
    accessorKey: "type",
    header: "Type",
    cell: (info) => {
      return <span className="">{info.getValue() as string}</span>;
    },
    enableSorting: false,
  },
  {
    accessorKey: "createdAt",
    header: "Date",
    cell: (info) => {
      return <span className="">{info.getValue() as string}</span>;
    },
    enableSorting: true,
    minSize: 40,
    maxSize: 100,
  }
];