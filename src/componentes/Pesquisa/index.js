import styled from 'styled-components'
import Input from '../Input'
import { useState } from 'react'
import { livros } from './dadosPesquisa.js'

const PesquisaContainer = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top:66px;
    
    `

const Titulo = styled.h2`
    color:#FFFFFF;
    font-size:55px;
    text-align:center;
    width:100%;
    animation:go-back 3s;


    @keyframes go-back {
        0% {
            transform: translateX(200px);
        }
        100% {
            transform: translateX(0);
        }
    }
`

const Subtitulo = styled.h3`
    color: white
    text-align:center;
    font-size:21px;
    font-weight:600;
    margin-bottom:40px;
    animation:go-back 3s;


    @keyframes go-back {
        0% {
            transform: translate(-200px);
        }
        100% {
            transform: translateX(0);
        }
    }
`

const Resultado = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    width:100%
    margin-bottom:25px;
    cursor:pointer;
    animation: in, 3s;

    p {
        width: 200px;
    }

    img {
        width:100px;
    }

    &:hover{
        border:1px solid white
    }

    @keyframes in {
        0% {
            transform: translate(-200px);
        }
        100% {
            transform: translateX(0);
        }
    }
`

function Pesquisa (){
    const [livrosPesquisados, setLivrosPesquisados] = useState([])

    console.log(livrosPesquisados)
    return (
        <PesquisaContainer>
            <Titulo>Já sabe por onde começar?</Titulo>
            <Subtitulo>Encontre seu livro em nossa estante</Subtitulo>
            <Input placeholder="Escreva sua próxima aventura" onBlur={evento => {
               const textoDigitado = evento.target.value
               if(textoDigitado.length >= 1){
                const resultadoPesquisa = livros.filter(livro => livro.nome.includes(textoDigitado))
                setLivrosPesquisados(resultadoPesquisa)
               }else{
                <div/>
               }

            }}/>
            {livrosPesquisados.map( livro => (
                <Resultado>
                <p>{livro.nome}</p>
                <img src={livro.src}/>
                </Resultado>
            ))}

        </PesquisaContainer>
    )
}

export default Pesquisa