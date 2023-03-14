import styled from "styled-components";

export const Container = styled.header`
    display: flex;
    width: 100vw;
    height: 100vh;
    align-items: center;
    justify-content: center;
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 360px;
    background: var(--gray-800);
    padding: 2rem;
    border-radius: .5rem;
    gap: .5rem;

    input{
        background: var(--gray-900);
        padding: .6rem;
        border-radius: .3rem;
        border: 1px solid var(--gray-50);
        color: var(--gray-50);
        outline: none;
        transition: .3s;
        
        &:focus{
            border: 1px solid var(--pink-500);
        }
        
    }
    button{
        padding: .6rem;
        margin-top: 1.5rem;
        border-radius: .3rem;
        background: var(--pink-500);
        outline: none;
        border: 0;
        color: var(--gray-50);
        transition: .3s;
        cursor: pointer;
        
        &:hover{
            filter: brightness(.9);
        }
    }
`