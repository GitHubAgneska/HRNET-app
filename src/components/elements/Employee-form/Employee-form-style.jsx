import styled from 'styled-components'

export const FormWrapper = styled.div`
    width: 90%; height:100vh;
    margin: auto;
    border: 1px solid grey;
    border-radius:5px;
    text-align: center;
`

export const FormInputsWrapper = styled.fieldset`
    display: flex;
    @media screen and (max-width:600px) {flex-direction: column;}
    justify-content: center;
    margin: 3% auto;
    &:not(:nth-child(3)) { border: none; flex-flow: row nowrap; }
    &:nth-child(3) { flex-flow: row wrap; width: 80%;}
`

export const FormBtnsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    /* width: 45%; */
    margin: auto;
    justify-content: space-between;
    button:nth-child(1) { transition: background-color 0.2s; }
    button:nth-child(1):not(disabled) { background-color: #00bc77; }
    button:nth-child(1):disabled { background-color: grey }
    button:nth-child(1):hover { background-color: #00bc70 }
`

export const InputWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    text-align: left;
    margin: 1rem;
    input {
        padding: 5px;
        font-size: 1.2rem;
        
        &:focus { font-weight: bold; }
    }
    ::placeholder { font-weight: light; opacity: 0.8; }  
    span { color: red; height: 50px; width:100%;}
`