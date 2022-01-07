import styled, {keyframes} from 'styled-components'

export const FormWrapper = styled.div`
    @media screen and (min-width:600px) { padding: 2%;}  
    @media screen and (max-width:600px) { padding-bottom: 5%;background-color: lightgray;}
`
export const StyledForm = styled.form`
    
`
export const FieldsWrapper = styled.div`
    @media screen and (max-width:600px) { width:100%; border: none;}   
    @media screen and (min-width:600px) { width:60%; height: 70vh;}   
    
    margin: auto;
    position: relative;
    border: 2px solid lightgrey;
    overflow: scroll;
    background-color: white;
    border-radius:5px;
    text-align: center;
`

const iconTransition = keyframes`
    from {
        transform: opacity(0);
        transform: translateX(-55px);
    }
    to {
        transform: opacity(1);
        transform: translateX(-20px);
    }
`

export const IconWrapper = styled.div`
    width:1rem;
    position: absolute;
    right: 8px; top: 29px;
    img { max-width: 100%; }
    animation: ${iconTransition} 0.2s linear forwards;

`
export const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    margin: 1rem;
    position: relative;

    input:not([type='date']){ text-transform: capitalize; }

    input, select {
        padding: 5px;
        font-size: .8em;
        border-radius: 20px;
        border: 1px solid lightgrey;
        :focus-within { border: 2px solid lightblue !important; }
        
        /* border: ${ ({valid}) => valid  ? ' 2px solid green;' :'2px solid lightgrey;' } */
    }
    select { background-color: transparent !important; }
    
    ::placeholder { font-weight: light; opacity: 0.6; font-size: 0.5rem; }  
    :focus-within ::placeholder { opacity:0 }

    span { color: red; height: 5px; width:100%; font-size: 0.6rem}
`
export const FormBtnsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    margin: auto;
    justify-content: space-between;
`