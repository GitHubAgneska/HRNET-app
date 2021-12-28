import styled from 'styled-components'

export const FormWrapper = styled.div`
    padding-bottom: 2%;
`
export const FieldsWrapper = styled.div`
    height: 500px;
    overflow: scroll;
    background-color: white;
    position: relative;
    width:60%;
    margin: auto;
    border-radius:5px;
    text-align: center;
`

export const FormInputsWrapper = styled.fieldset`
    display: flex;
    @media screen and (max-width:600px) {flex-direction: column;}
    justify-content: center;
    margin: 3% auto;
    &:not(:nth-child(3)) { border: none; flex-flow: row nowrap; }
    &:nth-child(3) { flex-flow: row wrap; width: 80%;}
`
export const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    margin: 1rem;
    input, select {
        padding: 5px;
        font-size: 1.2rem;
        border-radius: 20px;
    }

    label { opacity: 0; }
    :focus-within label  {
        opacity: 1;
        transition: opacity 2s;
    }
    :focus-within input {
        border: 2px solid pink;
    }

    :focus-within ::placeholder {
        opacity:0
    }
    select {
        background-color: transparent !important;
        border: 1px solid grey !important;
    }
    ::placeholder { 
        font-weight: light; opacity: 0.6;
    }  
    span { color: red; height: 5px; width:100%;font-size: 0.8rem}
`
export const FormBtnsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    margin: auto;
    justify-content: space-between;
    button:nth-child(1) { transition: background-color 0.2s; }
    button:nth-child(1):not(disabled) { background-color: #00bc77; }
    button:nth-child(1):disabled { background-color: grey }
    button:nth-child(1):hover:not(:disabled) { background-color: #00bc70 }
`