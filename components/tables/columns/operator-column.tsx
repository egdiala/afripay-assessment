"use client";

import type { Operator } from "../../../types/operator";
import type { ColumnDef } from "@tanstack/react-table";
import { NumberFormat } from "../../../lib/number";
import { useGetEthPrice } from "@/hooks/use-eth-price";
import { truncateText } from "@workspace/ui/lib/utils";
import { TableImg } from "../../../components/ui/table/table-content/table-img";
import TruncateTextWithToolTip from "@workspace/ui/components/truncate-text-tool-tip";
import { useCurrencyToggleStore } from "../../../context/currencyToggleContext";

function TvlDollarValue({ tvl }: { tvl: number }) {
  const { data: ethPrice } = useGetEthPrice();
  const { currency } = useCurrencyToggleStore();
  const selectedCurrency = currency === "ETH" ? "ETH" : "USD";

  return (
    <div className="">
      {ethPrice && tvl != null
        ? selectedCurrency === "USD"
          ? `$${NumberFormat(tvl * ethPrice, { useSuffixes: true })}`
          : `Ξ${NumberFormat(tvl, { useSuffixes: true })}`
        : "N/A"}
    </div>
  );
}

export const OperatorColumns: ColumnDef<Operator>[] = [
  {
    id: "rowIndex",
    accessorKey: "rowIndex",
    header: "",
    enableSorting: false,
    size: 40,
  },
  {
    accessorKey: "metadataName",
    header: "Operator",
    cell: (info) => {
      const imgSrc = info.row.original.metadataLogo || "/default-img.svg";
      const name = (info.getValue() as string) || "Unknown";

      return (
        <div className="flex items-center gap-1.5">
          <TableImg imgSrc={imgSrc} />
          <TruncateTextWithToolTip text={name} maxLength={50} className="" />
        </div>
      );
    },
    enableSorting: false,
    minSize: 550,
    maxSize: 800,
  },
  {
    accessorKey: "tvl.tvl",
    header: "TVL",
    cell: (info) => {
      return <TvlDollarValue tvl={info.getValue() as number} />;
    },
    enableSorting: true,
    minSize: 40,
    maxSize: 100,
  },
  {
    accessorKey: "maxApy",
    header: "Max APY %",
    cell: (info) => {
      const maxApy = (info.getValue() as number) ?? null;
      return (
        <div className="">
          {maxApy != null && maxApy > 0 ? (
            `${NumberFormat(maxApy.toString(), {
              useSuffixes: true,
              decimal: 2,
            })}%`
          ) : (
            <div className="pl-4 text-zinc-600">{"–"}</div>
          )}
        </div>
      );
    },
    enableSorting: true,
    minSize: 40,
    maxSize: 100,
  },
  {
    accessorKey: "totalAvs",
    header: "AVS",
    cell: (info) => {
      const totalAvs = (info.getValue() as number) ?? null;
      return (
        <div className="">
          {totalAvs != null
            ? NumberFormat(totalAvs.toString(), {
                useSuffixes: true,
                decimal: 0,
              })
            : "N/A"}
        </div>
      );
    },
    enableSorting: true,
    minSize: 40,
    maxSize: 100,
  },
  {
    accessorKey: "totalStakers",
    header: "Stakers",
    cell: (info) => {
      const totalStakers = (info.getValue() as number) ?? null;
      return (
        <div className="">
          {totalStakers != null
            ? NumberFormat(totalStakers.toString(), {
                useSuffixes: true,
                decimal: 0,
              })
            : "N/A"}
        </div>
      );
    },
    enableSorting: true,
    minSize: 40,
    maxSize: 100,
  },
];
