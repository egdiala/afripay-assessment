import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

interface Props {
  currentPage: number;
  total: number;
  onPageChange: (page: number) => void;
  pageSize?: number;
}

export default function Pagination({
  currentPage,
  total,
  onPageChange,
  pageSize = 10,
}: Props) {
  // const maxPage = Math.ceil(total / pageSize);

  // React.useEffect(() => {
  //   if (currentPage > maxPage) {
  //     onPageChange(maxPage || 1);
  //   }
  // }, [currentPage, maxPage, onPageChange]);

  return (
    <div className="mt-6 flex justify-between">
      <div>
        {total !== 0 && (
          <p className="text-contrast-low">
            {currentPage}/{Math.ceil(total / pageSize)}{" "}
            <span className="bg-contrast-high/15 mx-1 inline-block h-1 w-1 -translate-y-[1.5px] rounded-full"></span>{" "}
            {total} results
          </p>
        )}
      </div>
      <div className="flex items-center gap-2">
        <Button
          variant="secondary"
          size={"icon"}
          className="light:inset-shadow-transparent"
          disabled={currentPage === 1}
          onClick={() => onPageChange(currentPage - 1)}
        >
          <ChevronLeftIcon />
        </Button>
        <Button
          variant="secondary"
          size={"icon"}
          className="light:inset-shadow-transparent"
          disabled={currentPage === Math.ceil(total / pageSize)}
          onClick={() => onPageChange(currentPage + 1)}
        >
          <ChevronRightIcon />
        </Button>
      </div>
    </div>
  );
}
