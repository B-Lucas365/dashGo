import styled from "styled-components";


export const Container = styled.div`
    height: 400px;
    width: 100%;
`

export const Content = styled.div`
    display: flex;
    margin: 1.5rem auto;
    width: 100%;
    max-width: 1480px;
    padding: 0 1.5rem;
    
`

export const UserCreate = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    h2{
        font-size: large;
        font-weight: 400;
    }
    
    a{
        display: flex;
        align-items: center;
        border-radius: .3rem;
        background: var(--pink-500);
        border: 0;
        font-size: small;
        padding: 0.4rem .5rem;
        color: var(--gray-50);
        transition: .3s;
        text-decoration: none;
        cursor: pointer;
        
        &:hover{
            filter: brightness(.9);
        }

        button{
            background-color: transparent;
            border: none;
            color: #fff;
            font-size: small;
        }
    }
`

