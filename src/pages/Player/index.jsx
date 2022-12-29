import Banner from "components/Banner"
import Container from "components/Container"
import Title from "components/Title"
import bannerPlayer from "images/banner-player.png"
import { useParams } from "react-router-dom"
import styled from "styled-components"
import NotFound from "pages/NotFound"
import { useEffect, useState } from "react"

const PlayerContainer = styled.section`
    padding: 0 20px 40px 20px;
    text-align: center;
    
    iframe {
        height: 100vh;
    }
`

export default function Player() {
    const [video, setVideo] = useState()

    const params = useParams()

    useEffect(() => {
        fetch(`https://my-json-server.typicode.com/leandrol11/db_cinetag/videos?id=${params.id}`)
            .then(res => res.json())
            .then(data => {
                setVideo(...data)
            })
    }, [])

    if (!video) {
        return <NotFound />
    }

    return (
        <>
            <Banner src={bannerPlayer} alt="Banner da página de player" />
            <Container>
                <Title>
                    <h1>Player</h1>
                </Title>

                <PlayerContainer>
                    <iframe
                        width="100%"
                        src={video.link}
                        title={video.titulo}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </PlayerContainer>

            </Container>
        </>
    )
}