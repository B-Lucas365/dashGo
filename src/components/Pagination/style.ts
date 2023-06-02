import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  margin-top: 2rem;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;

  .controls {
    display: flex;
    gap: .5rem;
    .more-pagination {
      background-color: var(--gray-700);
      &:hover {
        background-color: var(--gray-500);
      }
    }
  }
`;

export const Button = styled.button`
  font-size: x-small;
  background-color: var(--pink-500);
  cursor: pointer;
  border: none;
  padding: 0.8rem 1rem;
  color: var(--gray-50);
  border-radius: 0.5rem;

  :disabled {
    background-color: var(--pink-500);
    cursor: default;
  }
`;
