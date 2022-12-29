import Card from "components/Card"
import { useFavoriteContext } from "context/Favorite"
import styled from "styled-components"

const Container = styled.div`
    display: flex;
    align-itens: center;
    justify-content: center;
    flex-wrap: wrap;
    margin-bottom: 10px;
`

export default function FavoriteCardList() {
    const { favorite } = useFavoriteContext()

    return (
        <Container>
            {
                favorite.map((fav) => {
                    return <Card {...fav} key={fav.id} />
                })
            }
        </Container>
    )
}