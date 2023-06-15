import { PaginationButton } from "./PaginationButton";
import { Container } from "./style";

export const Pagination = () => {
  return (
    <Container>
      <div className="current-page">
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </div>
      <div className="controls">
        <PaginationButton number={1} isCurrent/>
        <PaginationButton number={2}/>
        <PaginationButton number={3}/>
        <PaginationButton number={4}/>
        <PaginationButton number={5}/>
      </div>
    </Container>
  );
};
