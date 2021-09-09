import styled from "styled-components";

const DevInput = styled.input `
    width: 185px;
    height: 33px;

    border: 1px solid #A8A8A8;
    border-radius: 5px;

    cursor: text;
`

const DevButton = styled.button `
    background: #E911C6;

    border-radius: 44px;
    border: none;

    color: #fff;
    font-size: 14px;

    padding: 10px 22px;

    cursor: pointer;

    &:hover {
        background-color: #aa3997;
        transition: 1s;
    }
`

export { DevInput, DevButton } 