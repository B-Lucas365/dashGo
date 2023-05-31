import styled from "styled-components";

export const Container = styled.aside`
    width: 16rem;
    margin-right: 2rem;
    display: flex;
    flex-direction: column;
    gap: 3rem;
`

export const Stack = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3rem; 
    align-items: flex-start; 

    .automation{
        margin-top: 3rem;
    }
    
    .group{
        h2{
            font-weight: bolder;
            color: var(--gray-400);
            font-size: small;
        }

        .items{
            gap: 1rem;
            margin-top: 2rem;
            align-items: stretch;
            a{
                display: flex;
                align-items: center;
                color: #fff;
                text-decoration: none;
                

                .icon{
                    font-size: 1.5rem;
                }
                
                p{
                    margin-left: 1rem;
                    font-weight: normal;
                }
            }
        }


    }

`