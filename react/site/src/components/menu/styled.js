import styled from 'styled-components'

const Barra = styled.div `
    background: #10EAEA;
    width: 3px;
    height: 60px;
    border-radius: 1em;
`


const ContainerMenu = styled.div`
    display: flex;
    flex-direction: column;

    background-color: #2B3031;
    
    font-family: 'Roboto', sans-serif;

    width: 55vh;
    height: 100vh;

    position: sticky;
    top: 0px;

    .titulo-livro {
        display: flex;
        flex-direction: row;

        margin: 2.5em 5em 2.5em 4em;
    }

    .titulo {
        color: #10EAEA;
        font-size: 28px;
        font-weight: bold;

        padding-left: 0.3em;

        margin-top: -0.1em;
    }

    .gitlab img {
        width: 26px;
        height: 26px;
    }

    .titulo1 {
        color: #fff;
    }

    .faixa {
        background: #262626;
        color: black;

        height: 3.5em;
        width: 100%;
    }

    .salas {
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        color: #fff;

        padding: 1.3em 0em 1.3em 0em;

        width: 100%;
    }

    .geren {
        font-size: 18px;

        margin-left: 3em;
    }

    .setinha img {
        width: 24px;
        height: 24px;

        margin-left: -3em;
    }

    .fundos {
        display: flex;
        flex-direction: row;
        align-items: center;
        background-color: #fff;

        width: 100%;

        font-size: 18px;
    }

    .categorias {
        color: #1A1A1A;
        font-weight: 600;

        padding-left: 3.3em;
    }
`

export { ContainerMenu, Barra }