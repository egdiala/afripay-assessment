"use client";

import { useTransactions } from "@/context/transaction";
import { CreditCardMinusIcon } from "../icons/credit-card-minus";
import { CreditCardPlusIcon } from "../icons/credit-card-plus";
import { Suitcase2Icon } from "../icons/suitcase-icon";
import IconWrapper from "../ui/icon-wrapper";
import NumberFlow from "@number-flow/react";
import { useMemo } from "react";

export function TopCards() {
    const { transactions } = useTransactions();
    const totalInflow = transactions.filter((transaction) => transaction.type === "credit").reduce((acc, transaction) => acc + transaction.amount, 0);
    const totalOutflow = transactions.filter((transaction) => transaction.type === "debit").reduce((acc, transaction) => acc + transaction.amount, 0);

    const cards = useMemo(() => {
        return [
            {
                title: "Total Balance",
                icon: <Suitcase2Icon />,
                value: totalInflow - totalOutflow,
            },
            {
                title: "Total Inflow",
                icon: <CreditCardPlusIcon />,
                value: totalInflow,
            },
            {
                title: "Total Outflow",
                icon: <CreditCardMinusIcon />,
                value: totalOutflow,
            }
        ]
    },[totalInflow, totalOutflow])

    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {
                cards.map((card) => (
                    <div key={card.title} className="flex flex-col justify-between gap-10 border border-contrast-high-10 p-6 rounded-lg">
                        <div className="flex items-center gap-3">
                            <IconWrapper>
                                {card.icon}
                            </IconWrapper>
                            <span className="text-lg text-contrast-low">{card.title}</span>
                        </div>
                        <h1 className="font-sans text-3xl text-contrast-high text-ellipsis whitespace-nowrap overflow-hidden">
                            <NumberFlow
                                value={card.value}
                                format={{
                                    style: "currency",
                                    currency: "NGN",
                                    currencyDisplay: "narrowSymbol",
                                }}
                                locales="en-NG"
                            />
                        </h1>
                    </div>
                ))
            }
        </div>
    );
}