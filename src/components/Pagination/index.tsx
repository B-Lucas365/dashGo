import { Container, Button } from "./style";

export const Pagination = () => {
  return (
    <Container>
      <div className="current-page">
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </div>
      <div className="controls">
        <Button disabled>1</Button>
        <Button className="more-pagination">2</Button>
        <Button className="more-pagination">3</Button>
        <Button className="more-pagination">4</Button>
      </div>
    </Container>
  );
};
