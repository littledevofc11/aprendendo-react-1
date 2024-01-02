import perfil from '../../imagens/perfil.svg'
import sacola from '../../imagens/sacola.svg'
import styled from 'styled-components'

const Icone = styled.li`
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        margin-right: 40px;
        width:25% 
`

const Icones = styled.ul`
    display:flex;  
`

const icones = [perfil, sacola]
function IconesHeader () {
    return (
        <Icones>
            {icones.map( (icone) => (
            <Icone><img src={icone}></img></Icone>
            ))}
        </Icones>
    )
}

export default IconesHeader