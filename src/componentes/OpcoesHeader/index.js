import styled from 'styled-components'

const Opcoes = styled.ul`
    display: flex;
`

const Opcao = styled.li`
    display: flex;
    min-width: 120px;
    height: 100%;
    padding-right: 20px;
    font-size: 16px;
    justify-content: center;
    text-align: center;
    align-items: center;
`

const textoOpcoes = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE']

function OpcoesHeader() {
    return (
        <Opcoes>
            {textoOpcoes.map((texto) => (
                <Opcao><p>{texto}</p></Opcao>
            ) )}
        </Opcoes>
    )
}

export default OpcoesHeader