import * as React from "react";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { Container } from "./styles";
import { UserCreate } from "../../styles/users";
import Link from "next/link";
import { RiAddLine } from "react-icons/ri";

const columns: GridColDef[] = [
  { field: "name", headerName: "Usuário", width: 130 },
  { field: "dateCreated", headerName: "Data de cadastro", width: 130 }
];

const rows = [
  { id: 1, name: "Lucas Renan",  dateCreated: "02/06/2023" },
  { id: 2, name: "Mylena Vitoriano",  dateCreated: "03/06/2023" },
];

export const TableMUI = () => {
  return (
    <Container>
      <UserCreate>
        <h2>Usuários</h2>
        <Link href="">
          <RiAddLine />
          <button>Criar novo</button>
        </Link>
      </UserCreate>

      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </Container>
  );
};
