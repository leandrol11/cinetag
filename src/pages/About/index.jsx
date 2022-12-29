import Container from "components/Container";
import Title from "components/Title";
import styled from "styled-components";

const TextContainer = styled.div`
    background: var(--grey);
    width: 90%;
    margin: 0 auto;
    margin-bottom: 10px;
    padding: 30px;
    border-radius: 10px;

    .text {
        text-align: center;
        font-size: 20px;
    }
`
export default function About() {
    return (
        <>
            <Container>
                <Title>
                    <h1>Sobre a página</h1>
                </Title>
                <TextContainer>
                    <p className="text">
                        Esta página é o 8o projeto de estudos de React que faço
                        na Alura. Além de ter mudado os "filmes" originais, fiz
                        a estilização utilizando styled components ao invés de
                        css normal.
                    </p>
                </TextContainer>
            </Container>
        </>
    )
}