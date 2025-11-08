import { PlusIcon } from "lucide-react";
import { Button } from "../ui/button";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { useState } from "react";
import { useTransactions } from "@/context/transaction";
import { TTransactionType } from "./transaction-columns";

export function AddTransactionModal() {
    const { transactions, setTransactions } = useTransactions();
    const [open, setOpen] = useState<boolean>(false);
    const [amount, setAmount] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [type, setType] = useState<string>("");

    const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const targetValue = e.target.value;
        if (/^\d*$/.test(targetValue)) {
            setAmount(targetValue);
        }
    }

    const handleDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setDescription(e.target.value);
    }

    const handleTypeChange = (value: string) => {
        setType(value);
    }

    const handleAddTransaction = () => {
        setTransactions([...transactions, { id: transactions.length + 1, amount: Number(amount), description, type: type as TTransactionType, createdAt: new Date().toISOString() }]);
        setOpen(false);
    }

    const resetForm = () => {
        setAmount("");
        setDescription("");
        setType("");
    }

    return (
        <Dialog open={open} onOpenChange={(value) => {
            setOpen(value);
            resetForm();
        }}>
            <DialogTrigger asChild>
                <Button variant="default">
                    <PlusIcon className="size-4" />
                    Add Transaction
                </Button>
            </DialogTrigger>
            <DialogContent className="w-[94vw] rounded-xl sm:max-w-md">
                <DialogHeader className="text-left">
                    <DialogTitle>Add Transaction</DialogTitle>
                    <DialogDescription>Add a new transaction to the database.</DialogDescription>
                </DialogHeader>
                <div className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="type">Type</Label>
                        <Select value={type} onValueChange={handleTypeChange}>
                            <SelectTrigger id="type" className="w-full">
                                <SelectValue placeholder="Select a type" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="credit">Credit</SelectItem>
                                <SelectItem value="debit">Debit</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="amount">Amount</Label>
                        <Input
                            id="amount"
                            type="text"
                            inputMode="numeric"
                            pattern="\d{6}"
                            placeholder="Enter amount"
                            value={amount}
                            onChange={handleAmountChange}
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="description">Description</Label>
                        <Textarea
                            id="description"
                            placeholder="Enter description"
                            value={description}
                            onChange={handleDescriptionChange}
                        />
                    </div>
                </div>
                <DialogFooter className="gap-y-2">
                    <DialogClose asChild>
                        <Button variant="secondary">Cancel</Button>
                    </DialogClose>
                    <Button type="button" variant="default" onClick={handleAddTransaction}>Add Transaction</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}