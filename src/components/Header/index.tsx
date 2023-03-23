import { Container, Profile, SearchBox, User } from "./style"
import {RiNotificationLine, RiSearchLine, RiUserAddLine} from 'react-icons/ri'

export const Header = () => {
    return(
        <Container>
            <h1>DashGo<span>.</span></h1>
            <SearchBox>
                <input type="text" placeholder="Bucar na plataforma"/>
                <RiSearchLine className="icon-search"/>
            </SearchBox>

            <Profile>
                <div className="notifications">
                    <RiNotificationLine className="notification"/>
                    <RiUserAddLine className="userAdd"/>
                </div>
                
                <User>
                    <div>
                        <p>Lucas Renan</p>
                        <p className="email">lucas@outlook.com</p>
                    </div>
                    <div className="img-profile">
                        <img src="https://avatars.githubusercontent.com/u/82220876?s=40&v=4" alt="" />
                    </div>
                </User>

            </Profile>
        </Container>
    )
}