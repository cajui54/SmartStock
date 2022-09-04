import styled from "styled-components";

const Mains = styled.main`
    width: 100%;
    min-height: 300px;

    fieldset {
        display: flex;
        justify-content: space-between;
        width: 95%;
        border-radius: 5px;
        min-height: 300px;
        margin: 20px auto;
        border-radius: 10px ;
        border: 1px solid #D3D3D3;
    }
    fieldset legend {
        font-weight: bold;
        color: #4F4F4F;
    }
    .menuForm {
        height: 500px;
        margin: 50px 20px;
        border-radius: 50px;
    }
    .menuForm button {
        font-size: 45px;
        background-color: transparent;
        border: none ;
        cursor: pointer;
        transition: all .6s ease-in-out;
    }
 
 
    .menuForm button:hover {
        transform: scale(1.2);
    }
    .menuForm button:nth-child(1) {
        color: green;
    }
    .open {
        display: none ;
    }
    
`
export default Mains