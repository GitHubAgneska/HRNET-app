import PropTypes from "prop-types"
import { PageModalWrapper, ModalWrapper, ModalBlock, ModalBody, ModalBtnsWrapper } from './Modal-style'
import ModalButton from '../Button/Button'

const ModalComp = ({confirmCancelModal}) => {
    
    const { 
        modalBgBlur,
        width, height,
        buttonsWrapperWidth, 
        modalData,
        content,
        action,
        message,
        btnNames,
        handleCancel,
        confirmAction  
    } = confirmCancelModal
    
    return (
            <PageModalWrapper>

                <ModalWrapper width={width} height={height}>
                    <ModalBlock>

                        <ModalBody>
                            <p>{message}</p>
                            <p>{action} {modalData} ? </p>
                        </ModalBody>
                        
                        <ModalBtnsWrapper buttonsWrapperWidth={buttonsWrapperWidth}>
                            { btnNames.map(i => ( 
                                i==='cancel' ? 
                                    <ModalButton
                                        key={Math.random()}
                                        btnName={i}
                                        handleClick={ handleCancel}
                                        disabled={false}
                                    ></ModalButton>  
                                :
                                    <ModalButton
                                        key={Math.random()}
                                        btnName={i}
                                        handleClick={confirmAction}
                                        disabled={false}
                                    ></ModalButton>
                                ))}
                        </ModalBtnsWrapper>

                    </ModalBlock>
                </ModalWrapper>
            
            </PageModalWrapper>
    )
}

export default ModalComp

ModalComp.defaultProps = {
    modalBgBlur: true,
    width: '70%',
    height: '300px',
    buttonsWrapperWidth: '50%',
}

ModalComp.propTypes = { 
    modalBgBlur: PropTypes.bool,
    width: PropTypes.string,
    height: PropTypes.string,
    buttonsWrapperWidth: PropTypes.string,
    content: PropTypes.string,
    message: PropTypes.string,
    action: PropTypes.string,
    modalData: PropTypes.string,
    btnNames: PropTypes.array
}