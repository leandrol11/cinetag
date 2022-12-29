import Banner from "components/Banner"
import bannerHome from "images/banner-home.png"
import Title from "components/Title"
import CardList from "./CardList"
import Container from "components/Container"

export default function Home() {
    return (
        <>
            <Banner src={bannerHome} alt="Imagem sala de cinema" />
            <Container>
                <Title>
                    <h1> Um lugar para guardar seus filmes! </h1>
                </Title>

                <CardList />
            </Container>
        </>
    )
}