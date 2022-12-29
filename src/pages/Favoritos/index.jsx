import Banner from "components/Banner"
import Container from "components/Container"
import Title from "components/Title"
import bannerFavoritos from "images/banner-favoritos.png"
import FavoriteCardList from "./FavoriteCardList"

export default function Favoritos() {
    return (
        <>
            <Banner src={bannerFavoritos} alt="Imagem sala de cinema" />
            <Container>
                <Title>
                    <h1> Meus favoritos </h1>
                </Title>

                <FavoriteCardList />
            </Container>
        </>
    )
}