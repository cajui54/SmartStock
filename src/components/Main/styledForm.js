import styled from "styled-components";

const Forms = styled.form`
    width: 300px;
    height: 500px;
    margin: 50px 20px;
    border-radius: 5px;
    border-top: 3px solid #4F4F4F;
    
    .container-logo {
        width: 100px;
        height: 100px;
        border-radius: 100%;
        display: flex;
        flex-direction: column ;
        align-items: center;
        justify-content: center;
        margin: 50px auto;
        border: 3px solid #4F4F4F;
        color: #4F4F4F;
    }
    .container-logo i {
        font-size: 35px;
    }
    .container-logo p {
        margin-top: 5px;
        font-weight: bold ;
    }
    fieldset {
        display: flex;
        flex-direction: column ;
        justify-content: space-between;
        align-items: center ;
    }
    fieldset label {
        width: 90%;
        height: 40px;
        margin: 15px 0;
        display: flex;
        flex-direction: column ;
    }
    fieldset label input, fieldset label select {
        padding: 5px;
        margin: 10px;
        width: 80%;
        border-radius: 5px;
        border: 1px solid #C0C0C0;
        outline: none;
    }
    fieldset .container-btns {
        width: 80%;
        margin: 30px 10px;
        padding: 10px;
    }
    fieldset .container-btns button {
        margin: 0 10px;
        padding: 7px 8px;
        border: none;
        border-radius: 3px;
        font-weight: bold;
        cursor: pointer;
    }
    fieldset .container-btns button:nth-child(1) {
        background-color: #4F4F4F;
        color: #fff;   
    }
    fieldset .container-btns button:nth-child(2) {
        background-color: black;
        color: #fff;   
    }
    .error {
        background-color: #FFC0CB;
        border: 1px solid #F08080;
    }

`

export default Forms;