import { TTransaction } from "@/components/home/transaction-columns";
import { create } from "zustand";

interface B402AIContextType {
  transactions: TTransaction[];
  setTransactions: (transactions: TTransaction[]) => void;
}

const useTransactions = create<B402AIContextType>((set) => ({
    transactions: typeof window !== "undefined" ? JSON.parse(localStorage.getItem("transactions") || "[]") : [],
    setTransactions: (transactions: TTransaction[]) => {
        if (typeof window !== "undefined") {
            localStorage.setItem("transactions", JSON.stringify(transactions));
            set({ transactions })
        }
    },
}));

export { useTransactions };
