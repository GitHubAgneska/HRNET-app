import PropTypes from "prop-types"
import { ModalWrapper, ModalBlock, ModalBtnsWrapper } from './Modal-style'
import Button from "../Button/Button"

const BaseModal = (props) => { 
    
    const confirmNo = () => { }
    const confirmYes = () => { }
    
    return (
        <ModalWrapper>
            <ModalBlock>
                <p>Are you sure you want to reset the form ?</p>
                <p>All data will be lost</p>
                <ModalBtnsWrapper>
                    <Button btnName="NO" onClick={confirmNo} width="20%" />
                    <Button btnName="YES" onClick={confirmYes} width="20%" />
                </ModalBtnsWrapper>
            </ModalBlock>
        </ModalWrapper>
    )
}

export default BaseModal

BaseModal.propTypes = {

}