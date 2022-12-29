import Container from "components/Container";
import styled from "styled-components";

const Warning = styled.p`
    font-size: 50px;
    text-align: center;
    padding: 50px 0;
`
export default function NotFound() {
    return (
        <>
            <Container>
                <span>
                    <Warning>Página não encontrada</Warning>
                </span>
            </Container>
        </>
    )
}