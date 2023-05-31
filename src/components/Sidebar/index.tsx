import Link from "next/link";
import {RiDashboardLine, RiContactsLine, RiInputMethodLine, RiGitMergeLine} from 'react-icons/ri'
import { Container, Stack } from "./styled";

export const Sidebar = () => {
  return (
    <Container>
      <Stack>
        <div className="group">
          <h2>GERAL</h2>
          <Stack className="items">
            <Link href='/'>
              <RiDashboardLine className="icon"/>
              <p>Dashboard</p>
            </Link>
            <Link href='/'>
              <RiContactsLine className="icon"/>
              <p>Users</p>
            </Link>
          </Stack>
        </div>
      </Stack>

      <Stack>
        <div className="group">
          <h2>AUTOMAÇAO</h2>
          <Stack className="items">
            <Link href='/'> 
              <RiInputMethodLine className="icon"/>
              <p>Formularios</p>
            </Link>
            <Link href='/'>
              <RiGitMergeLine className="icon"/>
              <p>Automaçao</p>
            </Link>
          </Stack>
        </div>
      </Stack>
    </Container>
  );
};
