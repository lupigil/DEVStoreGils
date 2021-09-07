import styled from 'styled-components'

const ContainerCabecalho = styled.div`
    display: flex;
    flex-direction: column;

    align-items: center;
    background-color: #2B3031;
    border-radius: 3px;

    font-family: 'Roboto', sans-serif;

    .titulo {
        padding: 1.3em 3.5em 1.3em 2em;

        color: #EA10C7;
        font-size: 28px;
    }

    .titulo1 {
        color: #fff;
    }

    .faixa {
        background-color: black;
        color: black;

        height: 3em;
        width: 100%;
    }

    .salas {
        color: #fff;

        padding: 1.3em 4.5em 1.3em 0em;
    }

    .fundos {
        display: flex;
        flex-direction: row;
        align-items: center;
        background-color: #fff;

        width: 100%;
    }

    .traco {
        background: linear-gradient(180deg, #DB21BD -10.17%, #DB21BD 115.25%);
        width: 3px;
        height: 46px;
        border-radius: 1em;
    }

    .categorias {
        color: #1A1A1A;

        padding-left: 3.3em;
    }
`

export { ContainerCabecalho }