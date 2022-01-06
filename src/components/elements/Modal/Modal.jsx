import ReactDOM from "react-dom"
import PropTypes from "prop-types"
import Button from '../Button/Button'
import { PageModalWrapper, ModalWrapper, ModalBlock, ModalBody, ModalContent, ModalBtnsWrapper } from './Modal-style'

const ModalComp = ({ modalType, props, isShowing, content}) => {
    const { 
        modalBgBlur,
        width, height,
        buttonsWrapperWidth, 
        modalData,
        action,
        message,
        modalBtns
    } = props
    // console.log('CONTENT=', content)

    return (
        isShowing ? ReactDOM.createPortal(

            <PageModalWrapper>

                <ModalWrapper >
                    <ModalBlock width={width} height={height}>
                        <ModalBody>
                            <p>{message}</p>
                            { content && 
                                <ModalContent>
                                    <p>{content.firstName} {content.lastName}</p>
                                    <p>{content.department} department</p>
                                </ModalContent>
                            }
                            <p>{action} {modalData}</p>
                        </ModalBody>

                        <ModalBtnsWrapper buttonsWrapperWidth={buttonsWrapperWidth}>
                            { modalBtns.map(b => (
                                <Button
                                type={b.type}
                                key={Math.random()}
                                handleClick={b.action}
                                disabled={false}
                                btnName={b.name}
                                >{b.name}</Button>
                            ))}
                        </ModalBtnsWrapper>
                    </ModalBlock>
                </ModalWrapper>
            
            </PageModalWrapper>,
            document.body
        ): null
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
    /* content: PropTypes.string, */
    message: PropTypes.string,
    action: PropTypes.string,
    modalData: PropTypes.object,
}