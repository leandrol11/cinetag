import styled from "styled-components"

const { Link } = require("react-router-dom")

const Container = styled.div`
    font-size: 18px;
    font-weight: 400;
    padding: 20px;

    .btn{
        color: var(--white);
        text-decoration: none;
    }

    @media (max-width: 520px) {
        padding: 5px;
    }
`

const Btn = ({ url, children }) => {
    return (
        <Container>
            <Link className="btn" to={url} >
                {children}
            </Link>
        </Container>
    )
}

export default Btn