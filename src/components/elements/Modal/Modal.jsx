import PropTypes from "prop-types"
import { ModalWrapper, ModalBlock, ModalBtnsWrapper } from './Modal-style'
import Button from "../Button/Button"

const BaseModal = ({toggleConfirmModal, resetForm}) => { 
    
    const confirmNo = () => { toggleConfirmModal() }
    const confirmYes = (e) => { resetForm(e) }
    
    return (
        <ModalWrapper>
            <ModalBlock>
                <p>Are you sure you want to reset the form ?</p>
                <p>All data will be lost</p>
                <ModalBtnsWrapper>
                    <Button btnName="NO" handleClick={confirmNo} width="30%" />
                    <Button btnName="YES" handleClick={confirmYes} width="30%" />
                </ModalBtnsWrapper>
            </ModalBlock>
        </ModalWrapper>
    )
}

export default BaseModal

BaseModal.propTypes = {

}