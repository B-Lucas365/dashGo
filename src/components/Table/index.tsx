import Link from "next/link";
import { useState } from "react";
import { UserCreate } from "../../styles/users";
import { Container, Table } from "./styles";
import { RiAddLine } from "react-icons/ri";
import { Pagination } from "../Pagination";
import Checkbox from "@mui/material/Checkbox";

export const TableComponent = () => {
  return (
    <Container>
      <UserCreate>
        <h2>Usuários</h2>
        <Link href="">
          <RiAddLine />
          <button>Criar novo</button>
        </Link>
      </UserCreate>

      <Table>
        <thead>
          <tr>
            <th className="">
              <Checkbox
                sx={{
                  color: "#D53F8C ",
                  "&.Mui-checked": {
                    color: "#ED64A6",
                  },
                }}
              />
            </th>

            <th>Usuário</th>
            <th>Data de cadastro</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td className="">
              <Checkbox
                sx={{
                  color: "#D53F8C ",
                  "&.Mui-checked": {
                    color: "#ED64A6",
                  },
                }}
              />
            </td>

            <td>
              <div>
                <p className="name">Lucas Renan</p>
                <p className="email">lucas.silva@uol.com</p>
              </div>
            </td>

            <td>04 de junho, 2023</td>
          </tr>
        </tbody>
      </Table>
      <Pagination />
    </Container>
  );
};
