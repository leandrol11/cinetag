import styled from "styled-components"

const Banner = styled.img`
    width: 100%;
    height: 350px;

    @media (max-width: 1200px) {
        height: 275px;
    }

    @media (max-width: 800px) {
        height: 200px;
    }
`

export default Banner