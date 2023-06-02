import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
  background-color: var(--gray-800);
  border-radius: 8px;
  padding: 2rem;
`;

export const Table = styled.table`
  color: var(--gray-500);
  width: 100%;

  th,
  td {
    padding: 1.5rem;

    border-bottom: 1px solid var(--gray-700);
    text-align: left;
  }

  .th-check,
  .td-check {
    width: 2rem;
  }

  th {
    color: var(--gray-300);
  }

  td {
    color: var(--gray-50);
    .name {
      font-weight: bold;
    }

    .email {
      font-size: small;
      color: var(--gray-300);
    }
  }
`;



export const InputCheck = styled.div`
  //estilizacao do inputu chack
  input[type="checkbox"] {
    display: none;
  }

  label {
    display: inline-block;
    position: relative;
    cursor: pointer;
  }

  .checkmark {
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    color: #fff;
    font-size: 14px;
    width: 22px;
    height: 22px;
    border: 2px solid var(--gray-500);
    border-radius: 4px;
    background-color: transparent;

    .icon-check {
      display: none;
    }
  }

  input[type="checkbox"]:checked + .checkmark {
    background-color: var(--pink-500);
    border: none;

    .icon-check {
      display: block;
      width: 85%;
      height: 100%;
    }
  }
`;
