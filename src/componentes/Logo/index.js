import logo from '../../imagens/logo.svg' 
import styled from 'styled-components'

const LogoContainer = styled.div`
    display: flex;
    font-size: 30px;
`

const LogoImagem = styled.img`
    margin-right: 20px;
`

function Logo() {
    return (
        <LogoContainer>
            <LogoImagem src={logo} alt='logo'/>
            <p><strong>Slav </strong>Books</p>
        </LogoContainer>
    )
}

export default Logo