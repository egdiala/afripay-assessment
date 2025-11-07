"use client";

import type { ColumnDef } from "@tanstack/react-table";

import type { CuratedMetadata } from "@/EEUI/types/avs";
import { NumberFormat } from "@/EEUI/lib/number";
import { useGetEthPrice } from "@/hooks/use-eth-price";
import { useCurrencyToggleStore } from "@/context/currency-toggle-context";
import { Badge } from "@workspace/ui/components/badge";
import LogoImage from "@/components/logo-image";
import { getAdditionalValue } from "@/utils";
import { useGetSingleAvsData } from "@/services/queries/use-discover";
import { Skeleton } from "@workspace/ui/components/skeleton";

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

function MaxApyValue({ address }: { address: string }) {
  const { data: singleAvs, isLoading } = useGetSingleAvsData(address);

  if (isLoading) {
    return <Skeleton className="h-[20px] min-w-3" />
  }
  
  return (
    <div className="">
      {(singleAvs?.apys?.currentApy?.totalApy || 0).toFixed(2)}%
    </div>
  );
}

export const AvsColumns: ColumnDef<Avs>[] = [
  {
    id: "rowIndex",
    accessorKey: "rowIndex",
    header: "",
    enableSorting: false,
    size: 40,
  },
  {
    accessorKey: "metadataName",
    header: "AVS",
    cell: (info) => {
      const imgSrc = getAdditionalValue(info.row.original.additionalInfo, "curatedLogo", "metadataLogo") || "/default-img.png";

      const name = getAdditionalValue(info.row.original.additionalInfo, "curatedName", "metadataName") || "";

      return (
        <div className="flex items-center gap-3">
          <LogoImage
            src={imgSrc}
            alt={name}
            className="w-7 h-7 rounded-md"
            avatarClassName="size-full"
            insetShadowClassName="light:before:rounded-[calc(var(--radius-md)-1px)]"
          />
          <span className="line-clamp-2 flex-1 leading-5">{name}</span>
        </div>
      );
    },
    enableSorting: false,
    minSize: 365,
    maxSize: 800,
  },
  {
    accessorKey: "curatedMetadata",
    header: "Category",
    cell: (info) => {
      const additionalInfo = info.row.original.additionalInfo;
      const curatedMetadata = info.getValue() as CuratedMetadata;
      const tags = curatedMetadata?.tags;
      return (
        <div className="flex gap-1.5">
          {(getAdditionalValue(additionalInfo, "curatedTags")?.split(",") || tags)?.map((tag: string, index: number) => (
            <Badge key={index} variant="area-outline">
              {tag}
            </Badge>
          ))}
        </div>
      );
    },
    enableSorting: false,
    minSize: 200,
    maxSize: 200,
  },
  {
    accessorKey: "tvl.tvl",
    header: "TVL",
    cell: (info) => {
      return <TvlDollarValue tvl={info.getValue() as number} />;
    },
    enableSorting: true,
    minSize: 100,
    maxSize: 100,
  },
  {
    accessorKey: "maxApy",
    header: "Max APY %",
    cell: (info) => {
      const address = info.row.original.address
      return (
        <MaxApyValue address={address} />
      );
    },
    enableSorting: true,
    minSize: 40,
    maxSize: 100,
  },
  {
    accessorKey: "totalOperators",
    header: "Operators",
    cell: (info) => {
      const totalOperators = (info.getValue() as number) ?? null;
      return (
        <div className="">
          {totalOperators != null
            ? NumberFormat(totalOperators.toString(), {
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
