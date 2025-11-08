"use client";

import { cn } from "@/lib/utils";
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
    cell: (info) => {
      return <div className="text-center">{info.getValue() as string}</div>;
    },
  },
  {
    accessorKey: "description",
    header: "Description",
    cell: (info) => {
      return <div className="text-left line-clamp-3 max-w-[550px] text-ellipsis">{info.getValue() as string}</div>;
    },
    enableSorting: false,
    minSize: 100,
    maxSize: 550,
  },
  {
    accessorKey: "amount",
    header: "Amount",
    cell: (info) => {
      return <span className="">{Intl.NumberFormat("en-NG", { style: "currency", currency: "NGN" }).format(info.getValue() as number)}</span>;
    },
    enableSorting: true,
  },
  {
    accessorKey: "type",
    header: "Type",
    cell: (info) => {
      const type = info.getValue() as TTransactionType;
      return <span className={cn("capitalize", type === "credit" ? "text-pistachio-dark" : "text-red-dark")}>{type}</span>;
    },
    enableSorting: false,
  },
  {
    accessorKey: "createdAt",
    header: "Date",
    cell: (info) => {
      const date = new Date(info.getValue() as string);
      return <span className="">{date.getDate()}-{date.getMonth() + 1}-{date.getFullYear()} {date.getHours()}:{date.getMinutes()}{date.getHours() > 12 ? "pm" : "am"}</span>;
    },
    enableSorting: true,
  }
];