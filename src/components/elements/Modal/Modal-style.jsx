import styled from 'styled-components'

export const ModalWrapper = styled.div`
    position: absolute;
    z-index: 2;
    width: 100%;
    height:100vh;
    top: 0; left: 0;bottom:0;
    background: linear-gradient(0deg, rgba(2,0,36,1) 0%, rgba(49,9,121,0.8561625333727241) 0%, rgba(255,13,252,0.8561625333727241) 100%);
`
export const ModalBlock = styled.div` 
    width: 500px;
    height:300px;
    color: white;
    font-weight: bold;
    margin: 15% auto;
    border: 1px solid white;
    border-radius: 5px;
`
export const ModalBtnsWrapper = styled.div`
    width: 90%; margin: auto;
    display: flex; flex-flow: row nowrap;
    justify-content: space-between;

`
