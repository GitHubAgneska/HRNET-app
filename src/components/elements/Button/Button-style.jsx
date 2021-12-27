import styled from 'styled-components'

export const StyledBtn = styled.button` 
    display: block;
    padding: 8px;
    font-size: 1.1rem;
    font-weight: bold;
    margin-top: 1rem;
    color: #fff;
    border-radius: 5px;
    width: ${props => props.width ? props.width : '100%'}
`

export const ModalButton = styled.button`
    width: ${props => props.width ? props.width : '100%'}
    display: block; 
    border: none;
    padding: 8px;
    margin: 5%;
    border-radius: 5px;

    font-size: 1.1rem;
    font-weight: bold;
    color:white;

    background-color: ${props => props.btnName ==='cancel' ? '#00bc77;' : '#ff006c;'}

    &:hover { 
        background-color:${props => props.btnName ==='cancel' ? '#007147;' :  '#8a063f;' }
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        font-size: 1.2rem;
    }
    transition: all 0.2s;
`