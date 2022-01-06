import styled, {keyframes} from 'styled-components'


const modalTransitionOpen = keyframes`
    from {
        transform: opacity(0);
        transform: translateY(-20px);
    }
    to {
        transform: opacity(1);
        transform: translateY(-55px);
    }
`;

export const PageModalWrapper = styled.div`
    height: 100vh;
    width: 100%;
    position: absolute;
    z-index: 2; top: 0;
    display: flex; align-items: center; justify-content: center;
    
    background: linear-gradient(0deg, rgba(2,0,36,1) 0%, rgba(49,9,121,0.8561625333727241) 0%, rgba(255,13,252,0.8561625333727241) 100%);
    font-size: 1.3em; font-family: Roboto, Helvetica, Arial, sans-serif;
`

export const ModalWrapper = styled.div`
    min-height: 40vh;
    display: flex; align-items: center; justify-content: center;
    background-color: white; 
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    border-radius: 15px;
    animation: ${modalTransitionOpen} 0.2s linear forwards;
    transition: fade-out 300ms ease-in-out;
    
    @media screen and (max-width:600px) { width:90%; }   
    @media screen and (min-width:600px) { width:60%;} 
`

export const ModalBlock = styled.div`
    position: relative;
    height:90%;
    display: flex; align-items: start; justify-content: center;
    padding:5%;
    color: black;
    text-align: center;
`

export const ModalBtnsWrapper = styled.div`
    position: absolute; bottom: 5%;
    height: 25%;
    width: 90%; margin: auto;
    padding-top: 2%;
    display: flex; flex-flow: row nowrap;
    justify-content: space-between;
    border-top: 3px solid gray;
`

export const ModalBody = styled.div`
`

export const ModalContent = styled.div`
    font-weight: bold;
    font-size: 1.2em;
    text-transform: capitalize;
    p { margin: 2% auto; }
    p:first-child{ color: darkblue; }
    p:nth-child(2){ color: darkviolet; }
`


