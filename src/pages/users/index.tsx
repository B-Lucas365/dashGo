import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { TableComponent } from "../../components/Table";

import { TableMUI } from "../../components/TableMUI";
import { Container, Content } from "../../styles/users";

export default function UserList() {
  return (
    <Container>
      <Header />

      <Content>
        <Sidebar />
        <TableComponent />
      </Content>
    </Container>
  );
}
