import { Button } from "./style";

interface PaginationProps {
  number: number;
  isCurrent?: boolean;
}

export const PaginationButton = ({
  isCurrent = false,
  number,
}: PaginationProps) => {
  if (isCurrent) {
    return <Button disabled>{number}</Button>;
  }

  return <Button className="more-pagination">{number}</Button>;
};
