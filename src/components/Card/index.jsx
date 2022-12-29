import styled from "styled-components"
import favoritarIcon from "images/favoritar.png"
import desfavoritarIcon from "images/desfavoritar.png"
import { useFavoriteContext } from "context/Favorite"
import { Link } from "react-router-dom"

const Container = styled.div`
    padding: 5px;
    margin: 10px;
    width: 300px;
    background-color: var(--grey);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 5px;
    box-shadow: 3px 3px rgba(0,0,0,0.3);

    .link{
        text-decoration: none;
        color: var(--black);
    }

    .poster {
        width: 100%;
        border-radius: 5px;
    }

    .title, .favorite {
        padding: 5px;
    }

    .favorite {
        width: 25px;
        cursor: pointer;
    }
`

export default function Card({ id, titulo, capa }) {
    const { favorite, addFavorite } = useFavoriteContext()

    const isFavorite = favorite.some((fav) => fav.id === id)
    const icon = !isFavorite ? favoritarIcon : desfavoritarIcon

    return (
        <Container>
            <Link className="link" to={`/${id}`}>
                <img className="poster" src={capa} alt="Imagem da capa do filme" />
                <h2 className="title">{titulo}</h2>
            </Link>
            <img
                className="favorite"
                src={icon}
                alt="Botão para favoritar"
                onClick={() => {
                    addFavorite({ id, titulo, capa })
                }}
            />
        </Container>
    )
}