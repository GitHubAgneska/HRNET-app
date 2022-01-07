import styled from 'styled-components'

export const FormWrapper = styled.div`
    padding-bottom: 2%;
`
export const FieldsWrapper = styled.div`
    @media screen and (max-width:600px) { width:100%; border: none;}   
    @media screen and (min-width:600px) { width:60%;}   
    height: 70vh;
    margin: auto;
    position: relative;
    border: 2px solid lightgrey;
    overflow: scroll;
    background-color: white;
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
export const IconWrapper = styled.div`
    width:1rem;
    position: absolute;
    right: 8px; top: 28px;
    img { max-width: 100%; }
`
export const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    margin: 1rem;
    position: relative;

    input, select {
        padding: 5px;
        font-size: .8em;
        border-radius: 20px;
        border: 1px solid lightgrey;
        /* border: ${ ({valid}) => valid  ? ' 2px solid green;' :'2px solid lightgrey;' } */
        :focus-within { border: 1px solid lightblue !important; }
    }

    select {
        background-color: transparent !important;
    }
    ::placeholder { 
        font-weight: light; opacity: 0.6; font-size: 0.5rem;
    }  
    :focus-within ::placeholder { opacity:0 }
    span { color: red; height: 5px; width:100%; font-size: 0.6rem}
`
export const FormBtnsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    margin: auto;
    justify-content: space-between;
`