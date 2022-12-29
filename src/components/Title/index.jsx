import styled from "styled-components"

const SectionTitle = styled.div`
    color: var(--black);
    text-align: center;
    padding: 20px;
`

const Title = ({ children }) => {
    return (
        <SectionTitle>
            {children}
        </SectionTitle>
    )
}

export default Title