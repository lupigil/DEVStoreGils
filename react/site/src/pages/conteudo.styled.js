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
        flex-direction: row;
        justify-content: space-between;

        background-color: #fff;

        padding: 1em 2em;

        width: 100%;
    }

    .perfil

    .msgPerfil {
        color: #615858;
    }

    .comandos {
        display: flex;
        flex-direction: row;
    }

    .atualizar {
        background: #986CDF;
    }

    .logout {
        background: #986CDF;
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
        margin: 4em 0em 3em 0em;

        box-shadow: 0px 0px 4px 1px rgba(186, 186, 186, 0.25);

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



    .matriculados {
        display: flex;
        flex-direction: column;

        background-color: #fff;

        padding: 2.5em 2em;
        margin: 0em 0em 2em 0em;

        box-shadow: 0px 0px 4px 1px rgba(186, 186, 186, 0.25);

    }

    table {
        border: 1px solid #E2E2E2;
    }

    th {
        padding: 1em 0em;
    }

    td {
        padding: 1em 2.5em;

        color: #6D6868;
        font-size: 18px;
    }

    .cabecalhoTb {
        font-size: 18px;
        color: #fff;

        background: #986CDF;
    }

    .registroTb1 {
        background: #F5F5F5;
    }
`

export { ContainerConteudo, Traco }