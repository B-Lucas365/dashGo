import styled from 'styled-components'

export const Container = styled.header`
    display: flex;
    width: 100%;
    max-width: 1480px;
    height: 5rem;
    margin: 0 auto;
    align-items: center;
    padding: 0 1.5rem;

    h1{
        font-size: x-large;
        font-weight: 700;
        letter-spacing: -0.025em;
        width: 16rem ;

        span{
            color: var(--pink-500);
            font-size: xx-large;
            margin-left: .2rem;
        }
    }
`

export const SearchBox = styled.label`
    display: flex;
    flex: 1;
    justify-content: space-between;
    padding: 1rem 2rem;
    margin-left: 1.5rem;
    max-width: 400px;
    align-items: center;
    color: var(--gray-200);
    position: relative;
    background-color: var(--gray-800);
    border-radius:9999px;

    input{
        color: var(--gray-50);
        border: none;
        outline: none;
        background: transparent;
        padding: 0 1rem;
        margin-right: 1rem;
        
        ::placeholder{
            color: var(--gray-400);
        }
    }

    .icon-search{
        font-size: 1.5rem;
    }


`
