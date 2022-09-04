import styled from "styled-components";

const Navegation = styled.nav`
    margin-right: 150px;
    min-width: 450px;
    ul{
        list-style: none;
        display: flex;
        align-items: center;
        justify-content: space-between ;
    }
    a i {
        margin: 5px 0;
        font-size: 25px;
    }
    a {
        display: flex;
        flex-direction: column ;
        align-items: center;
        color: #4F4F4F;
        text-decoration: none;
        font-weight: bold ;
        transition: color .5s ease-in-out ;
    }
    a:hover {
        color: #87CEEB;
    }
`

export default Navegation;

