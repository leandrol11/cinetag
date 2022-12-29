import logo from "images/Logo.png"
import { Link } from "react-router-dom"
import styled from "styled-components"
import Btn from "./Btn"

const Container = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    background-color: var(--black);
    width: 100%;

    .btnContainer {
        display: flex;
        justify-content: space-around;
        align-items: center;
    }

    @media (max-width: 520px) {
        display: block;
        text-align: center;
    }

`

const NavBar = () => {
    return (
        <Container>
            <Link className="logo" to="./">
                <img src={logo} alt="Logo CineTag" />
            </Link>

            <nav className="btnContainer">
                <Btn url="./">
                    Home
                </Btn>
                <Btn url="./favoritos">
                    Favoritos
                </Btn>
                <Btn url="./sobre">
                    Sobre
                </Btn>
            </nav>
        </Container>
    )
}

export default NavBar