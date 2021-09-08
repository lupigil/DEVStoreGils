import styled from 'styled-components'

const Traco = styled.div `
    background: #986CDF;
    width: 6px;
    height: 25px;
    border-radius: 1.2em;
`


const ContainerConteudo = styled.div`
    display: flex;
    flex-direction: column;

    align-items: center;
    background: #F5F5F5;
    color: #615858;

    width: 170vh;

    font-family: 'Roboto', sans-serif;


    .cabecalhoConteudo {
        display: flex;
        justify-content: space-between;

        background-color: #fff;

        padding: 1em 2em;
    }

    .titulo {
        display: flex;
        flex-direction: row;

        padding-bottom: 40px;
    }

    .novoAluno {
        font-size: 32px;
        font-weight: bold;

        color: #3C3939;
        line-height: 25px;

        padding-left: 0.4em;
    }

    .cadastros {
        background-color: #fff;

        padding: 2.5em 15em 2.5em 4em;
        margin: 4em 0em 2em 0em; 
    }

    .box-input {
        display: flex;
        flex-direction: row;
    }

    .box-input1 {
        display: flex;
        flex-direction: row;

        margin-left: 5em;
    }

    .containerInput1 {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;

        padding-left: 1.9em;
        margin-bottom: 1em;

        width: 81vh;
    }

    .label {
        color: #615858;
        font-size: 18px;
        margin-right: 0.5em;
        margin-top: 7px;
    }

    .containerInput2 {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;

        width: 100vh;
    }

    .btn-cadastro {
        margin-left: 2em;
    }


    .alunosMatri {
        font-size: 32px;
        font-weight: bold;

        color: #3C3939;
        line-height: 25px;

        padding-left: 0.4em;
    }
`

export { ContainerConteudo, Traco }