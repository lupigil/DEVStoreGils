import styled from "styled-components";

const DevInput = styled.input `
    width: 185px;
    height: 33px;

    border: 1px solid #A8A8A8;
    border-radius: 5px;

    cursor: text;

    background: #FFFFFF;
`

const DevButton = styled.button `
    background: #119FDC;

    border-radius: 44px;
    border: none;

    color: #fff;
    font-size: 14px;

    padding: 10px 22px;
    margin-left: 5em;

    cursor: pointer;

    width: 106px;
    height: 36px;

    &:hover {
        background-color: #1180ad;
        transition: 1s;
    }
`

const DevTextArea = styled.textarea `
    background: #FFFFFF;

    border-radius: 5px;
    border: 1px solid #A8A8A8;

    resize: none;

    cursor: text;

    width: 537px;
    height: 154px;
`

export { DevInput, DevButton, DevTextArea } 