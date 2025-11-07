import { TableRow, TableCell } from "./table";

type NoResultsProps = {
  colSpan: number;
  message: string;
};

export default function NoResults({ colSpan, message }: NoResultsProps) {
  return (
    <TableRow>
      <TableCell colSpan={colSpan} className="h-24 text-center">
        {message}
      </TableCell>
    </TableRow>
  );
}
