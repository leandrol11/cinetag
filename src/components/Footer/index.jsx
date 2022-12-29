import styled from "styled-components"

const Container = styled.footer`
    text-align: center;
    padding: 20px;
    background-color: var(--black);

    .madeBy {
        font-size: 13px;
        color: var(--white);
    }
    
`

export default function Footer({ children }) {
    return (
        <Container>
            <span className="madeBy"> {children} </span>
        </Container>
    )
}