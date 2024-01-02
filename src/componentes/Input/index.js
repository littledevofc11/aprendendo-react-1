import styled from "styled-components";

const Input = styled.input`
    order: 0.8px solid #FFFFFF;
    background: linear-gradient(90deg, rgba(248,248,250,1) 0%, rgba(133,133,184,1) 53%, rgba(2,171,228,1) 96%, rgba(0,212,255,1) 100%);
    border:0.7px solid #FFFFFF;
    padding:25px 130px;
    border-radius:10px;
    width:200px;    
    color:#FFFFFF;
    font-size:16px;
    margin-bottom:9px;

    &::placeholder {
        color: #FFFFFF
        font-size: 14px
    }
`

export default Input