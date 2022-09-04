import styled from "styled-components";

const Metric = styled.section`
    margin-top: 120px;
    height: 300px;
    display: flex;
    align-items: center;

    fieldset {
        background-color: #fff;
        width: 95%;
        height: 80%;
        margin: 0 auto;
        border-radius: 10px ;
        border: 1px solid #D3D3D3;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    fieldset legend {
        font-weight: bold;
        color: #4F4F4F;
    }
    fieldset .containerMetrics {
        width: 20%;
        height: 70%;
        box-shadow: 0 0 5px black;
        box-sizing: border-box;
        border-radius: 5px;
        padding: 5px;
        cursor: pointer;
        transition: all .5s ease-in-out ;
    }
    .containerMetrics:hover {
        transform: scale(1.1);
    }
    fieldset .containerMetrics h3 {
        color: #4F4F4F	;
        font-size: 25px;
        margin: 10px;
    }
    fieldset .containerMetrics:nth-child(2){
        margin-left: 10px;
    }
    fieldset .containerMetrics:nth-child(5){
        margin-right: 10px;
    }
    .info {
        font-size: 40px;
        margin: 20px 40px;
        font-weight: bold ;
        color: black;
    }
    .containerMetrics:nth-child(3) .info{
        font-size: 30px;
    }
    .info-containerMetrics{
        display: flex;
        justify-content: space-evenly;
        align-items: center;
    }
    .info-containerMetrics i{
        color: #4F4F4F	;
        font-size: 40px;
    }
    
    .info-containerMetrics .fa-money-check-dollar {
        color: #228B22;
        margin-right: 20px;
    }
    .info-containerMetrics .fa-boxes-stacked {
        color: #B8860B;
    }
    .info-containerMetrics .fa-arrow-turn-up {
        color: #228B22;
    }
    .info-containerMetrics .fa-arrow-turn-down {
        color: #DC143C;
    }
`

export default Metric;