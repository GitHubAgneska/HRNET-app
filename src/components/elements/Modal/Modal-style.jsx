import styled, {keyframes} from 'styled-components'

/* export const ModalWrapper = styled.div`
    position: absolute;
    z-index: 2;
    width: 100%;
    height:100vh;
    top: 0; left: 0;bottom:0;
    background: linear-gradient(0deg, rgba(2,0,36,1) 0%, rgba(49,9,121,0.8561625333727241) 0%, rgba(255,13,252,0.8561625333727241) 100%);
` */
/* export const ModalBlock = styled.div` 
    width: 500px;
    height:300px;
    color: white;
    font-weight: bold;
    margin: 15% auto;
    border: 1px solid white;
    border-radius: 5px;
` */
export const ModalBlock = styled.div`
    position: relative;
    height:80%;width:80%;
    display: flex; align-items: start; justify-content: center;
    padding:5%;
    color: black;
    text-align: center;
`
export const ModalBtnsWrapper = styled.div`
    position: absolute; bottom: 5%;
    width: 90%; margin: auto;
    display: flex; flex-flow: row nowrap;
    justify-content: space-between;
    border-top: 3px solid gray;
`


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

    font-size: 1.3em; font-family: Roboto, Helvetica, Arial, sans-serif;

    animation: ${modalTransitionOpen} 0.2s linear forwards;
    transition: fade-out 300ms ease-in-out;
`

export const ModalWrapper = styled.div`
    width: ${ props => props.width ?? 'auto'};
    height: ${ props => props.height ?? 'auto'};
    
    display: flex; align-items: center; justify-content: center;
    background-color: white; 
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    border-radius: 15px;
`
    


export const ModalBody = styled.div`
`

export const iconWrapper = styled.div``


