import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { Table } from "../../components/Table";
import { Container, Content } from "../../styles/users";


export default function UserList(){
  return (
    <Container>
      <Header />

      <Content>
        <Sidebar />
        <Table />
      </Content>
    </Container>
  );
};
