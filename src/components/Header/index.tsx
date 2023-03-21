import { Container, SearchBox } from "./style"
import {RiSearchLine} from 'react-icons/ri'

export const Header = () => {
    return(
        <Container>
            <h1>DashGo<span>.</span></h1>
            <SearchBox>
                <input type="text" placeholder="Bucar na plataforma"/>
                <RiSearchLine className="icon-search"/>
            </SearchBox>
        </Container>
    )
}