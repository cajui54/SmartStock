import styled from "styled-components";

const Tables = styled.section`
    width: 70%;
    min-height: 700px;
    margin: 40px;
    flex-grow: 2;
    table {
        width: 100%;
        margin: 10px;
        min-height: 200px;
        text-align: center;
        border-collapse: collapse ;
    }
    table caption {
        background-color: #4F4F4F;
        color: #fff;
        font-weight: bold;
        padding: 10px;
        letter-spacing: 1.1px;
    }
    table thead {
        background-color: #4F4F4F;
        color: #fff;
    }
    table thead th {
        padding: 10px 0;
        letter-spacing: 1.1px;
        text-align: center;
    }
    table tbody tr {
        margin: 50px 0;
    }
    table tbody td{
        height: 70px;
    }
    table tbody tr:nth-child(even) {
        background-color: #D3D3D3;
    }
    table tfoot {
        background-color: #A9A9A9;
    }
    table tfoot td {
        padding: 15px 0;
        color: #fff;
        font-weight: bold;
        letter-spacing: 1.1px;
    }
    table tbody button {
        border: none;
        padding: 3px;
        font-size: 20px;
        margin: 0 5px;
        cursor: pointer;
        color: #fff;
        border-radius: 5px;
    }
    table tbody button:nth-child(1){
        background-color: #DAA520;
    }
    table tbody button:nth-child(2){
        background-color: #B22222;
    }
`

export default Tables