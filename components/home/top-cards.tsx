import { CreditCardMinusIcon } from "../icons/credit-card-minus";
import { CreditCardPlusIcon } from "../icons/credit-card-plus";
import { Suitcase2Icon } from "../icons/suitcase-icon";
import IconWrapper from "../ui/icon-wrapper";
import NumberFlow from "@number-flow/react";

export function TopCards() {
    const cards = [
        {
            title: "Total Balance",
            icon: <Suitcase2Icon />,
            value: 1000000,
        },
        {
            title: "Total Inflow",
            icon: <CreditCardPlusIcon />,
            value: 10000,
        },
        {
            title: "Total Outflow",
            icon: <CreditCardMinusIcon />,
            value: 1000,
        }
    ]

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
                        <h1 className="flex items-baseline gap-1 font-sans text-3xl text-contrast-high">
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