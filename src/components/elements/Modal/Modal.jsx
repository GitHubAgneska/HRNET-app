import ReactDOM from "react-dom"
import PropTypes from "prop-types"
import { Fragment } from "react"
import Button from '../Button/Button'
import { PageModalWrapper, ModalWrapper, ModalBlock, ModalBody, ModalBtnsWrapper } from './Modal-style'

const ModalComp = ({ props, cancelReset, confirmReset, okCloselModal, isShowing, hide, content}) => {
    const { 
        modalBgBlur,
        width, height,
        buttonsWrapperWidth, 
        modalData,
        action,
        message,
        btnNames
    } = props
    console.log('CONTENT=', content)

    return (
        isShowing ? ReactDOM.createPortal(

            <PageModalWrapper>


                <ModalWrapper >
                    <ModalBlock width={width} height={height}>

                        <ModalBody>
                            <p>{message}</p>
                            <p>{action} {modalData}</p>
                            { content && content.error &&
                                <Fragment>
                                <p>{content.firstName} {content.lastName}</p>
                                
                                {/* { Object.keys(content).map(i => ( <p key={Math.random()}>{i.value}</p>))} */}
                                </Fragment>
                            }
                            { content && !content.error &&
                                <Fragment>
                                    <p>{content.firstName} {content.lastName}</p>
                                    <p>{content.department} department</p>
                                    {/* { Object.keys(content).map(i => ( <p key={Math.random()}>{i.value}</p>))} */}
                                </Fragment> 
                            }
                        </ModalBody>
                        
                        <ModalBtnsWrapper buttonsWrapperWidth={buttonsWrapperWidth}>
                            { btnNames.map(i => ( 
                                i==='no' || i=== 'ok' ? 
                                    <Button
                                        key={Math.random()}
                                        handleClick={cancelReset || okCloselModal || confirmReset}
                                        disabled={false}
                                        btnName={i}
                                    >{i}</Button>
                                :
                                    <Button
                                        key={Math.random()}
                                        handleClick={confirmReset}
                                        disabled={false}
                                        btnName={i}
                                    >{i}</Button>
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
    btnNames: PropTypes.array
}