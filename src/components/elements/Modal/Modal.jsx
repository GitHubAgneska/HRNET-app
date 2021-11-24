import PropTypes from "prop-types"
import { ModalWrapper, ModalBlock, ModalBtnsWrapper } from './Modal-style'
import Button from "../Button/Button"
import { modalTypes } from '../../../data/modal-types'
import { useEffect } from "react"
import { useState } from "react"

const BaseModal = ({ type, message, content, toggleConfirmModal, resetForm }) => {
    
    /* const [ modal, setCurrentModal ] = useState({})
    
    useEffect(() => {
        
        let currentType = modalTypes.find(m => m.type === {type})?? {}; // ! runtime err if no '?'
        let currentModal = currentType?.body?? {}
        
        setCurrentModal(currentModal);
        console.log('modal===', modal);

    }, [type, modal]) */
    
    const closeModal = (e ) => { toggleConfirmModal(); resetForm(e) } // only close modal 
    
    
    return (
        <ModalWrapper>
            <ModalBlock>
                <p>{message}</p>
                <p>{content}</p>
                <Button btnName="YES" handleClick={(e)=>closeModal(e)} width="30%" />
                {/* <p>{modal.header}</p>
                <p>{modal.content}</p> */}
                
                {/* <ModalBtnsWrapper>
                    {modal.actions.map( a => {
                        <Button
                            btnName={a.btnName}
                            key={Math.random()}
                            handleClick={() => {
                                return a.actions.actions.component === 'modal'? 
                                    a.actions.actions.type : null
                            }}
                        />
                    })}
                </ModalBtnsWrapper> */}


            {/*  <ModalBtnsWrapper>
                { actions.map(a => (
                    <Button 
                        btnName={a.btnName}
                        key={Math.random()} 
                        handleClick={() => a.method}
                        />
                ))
            }
            </ModalBtnsWrapper> */}

            {/*  <ModalBtnsWrapper>
                    <Button btnName="NO" handleClick={confirmClose} width="30%" />
                    <Button btnName="YES" handleClick={(e)=>resetForm(e)} width="30%" />
                    <Button btnName="Close" handleClick={confirmClose} width="30%" />
                </ModalBtnsWrapper> */}
            </ModalBlock>
        </ModalWrapper>
    )
}

export default BaseModal

BaseModal.propTypes = {

}