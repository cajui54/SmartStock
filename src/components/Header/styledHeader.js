import styled from "styled-components";

const Headers = styled.header `
    background-color: #ffff;
    box-shadow: 0 0 5px black ;
    position: fixed;
    width: 100%;
    top: 0;
    height: 90px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .container-title {
        margin-left: 15px;
        height: 80%;
        width: 250px;
        border-left: 5px solid #4F4F4F;
        padding: 10px;
        box-sizing: border-box;
    }
    .container-title h2 {
        color: #4F4F4F;
    }
    .container-title p {
        color: #696969;
    }
`
export default Headers;