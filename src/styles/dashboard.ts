import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export const ContentDashboard = styled.div`
  display: flex;
  width: 100%;
  max-width: 1480px;
  margin: 1.5rem auto;
  padding: 0 1.5rem;
`;


export const SimpleGrid = styled.div`
  display: flex;
  flex: 1;
  gap: 1rem;
  align-items: flex-start;

  > * {
    min-width: 320px;
    width: 100%;
    height: 100%;
  }

  .box{
    padding: 2rem 2rem 1rem 2rem;
    background-color: var(--gray-800);
    border-radius: 8px;

    p{
      font-size: large;
      margin-bottom: 1rem;
    }
  }
`
