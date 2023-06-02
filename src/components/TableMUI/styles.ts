import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
  background-color: var(--gray-800);
  padding: 2rem;

  //botoes de controle
  .MuiToolbar-root {
    color: var(--gray-300);
    font-size: small;
  }

  //chackbox e botoes de controle
  .MuiButtonBase-root {
    color: var(--gray-300);
  }

  .MuiSelect-icon {
    color: var(--gray-300);
  }

  .MuiTablePagination-actions {
    button {
      color: var(--gray-300);
    }
  }

  .MuiDataGrid-cell--textLeft {
    color: var(--gray-50);
  }

  //container maior
  .MuiDataGrid-root {
    background-color: var(--gray-800);
    padding: 2rem;
    border: none;
    border-radius: 8px;
    color: var(--gray-500);
  }

  .MuiDataGrid-footerContainer {
    border: none;
  }

  //cor das linhas
  .css-12u49z-MuiDataGrid-root .MuiDataGrid-withBorderColor {
    border-color: var(--gray-700);
  }

  //titulos da tabela
  .css-t89xny-MuiDataGrid-columnHeaderTitle {
    font-size: 16px;
    font-weight: bold;
  }

  //dados da tabela
  .MuiDataGrid-cellContent {
    font-weight: bold;
    font-size: 12px;
  }

  //cor do check box selecionado
  .css-12wnr2w-MuiButtonBase-root-MuiCheckbox-root.Mui-checked {
    color: var(--pink-500);
  }
`;
