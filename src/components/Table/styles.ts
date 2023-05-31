import styled from "styled-components";

export const Container = styled.div`
    flex: 1;

    //botoes de controle
    .MuiToolbar-root{
        color: var(--gray-50);
    }

    //chackbox
    .MuiButtonBase-root{
        color: var(--gray-50);
    }
    
    //container maior
    .MuiDataGrid-root{
        background-color: var(--gray-800);
        padding: 2rem;
        border: none;
        border-radius: 8px;    
        color:var(--gray-50);
    }

   .MuiDataGrid-footerContainer{
        border: none;
   }

   //linhas entre linhas
   .css-1iyq7zh-MuiDataGrid-columnHeaders{
    border-color: red;
   }
        
`;
