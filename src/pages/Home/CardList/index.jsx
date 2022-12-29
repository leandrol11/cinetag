import Card from "components/Card"
import { useEffect, useState } from "react"
import styled from "styled-components"

const Container = styled.div`
    display: flex;
    align-itens: center;
    justify-content: center;
    flex-wrap: wrap;
    margin-bottom: 10px;
`

export default function CardList() {
    const [videos, setVideos] = useState([])

    useEffect(() => {
        fetch("https://my-json-server.typicode.com/leandrol11/cinetag_api/videos")
            .then(res => res.json())
            .then(data => {
                setVideos(data)
            })
    }, [])

    return (
        <Container>

            {videos.map((video) => {
                return (
                    <Card {...video} key={video.id} />
                )
            })}

        </Container>
    )
}