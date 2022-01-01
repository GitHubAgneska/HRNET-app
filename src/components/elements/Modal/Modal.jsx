import PropTypes from "prop-types"
import { PageModalWrapper, ModalWrapper, ModalBlock, ModalBody, ModalBtnsWrapper } from './Modal-style'
import Button from '../Button/Button'
// import { Fragment } from "react"

const ModalComp = ({props, cancelModal, okCloselModal, resetForm }) => {

    const { 
        modalBgBlur,
        width, height,
        buttonsWrapperWidth, 
        modalData,
        content,
        action,
        message,
        btnNames
    } = props

    return (

            <PageModalWrapper>

                <ModalWrapper >
                    <ModalBlock width={width} height={height}>

                        <ModalBody>
                            <p>{message}</p>
                            <p>{action} {modalData}</p>
                            {/* { content && 
                                <Fragment>
                                    { Object.keys(content).map(i => ( <p key={Math.random()}>{i.value}</p>))}
                                </Fragment> } */}
                        </ModalBody>
                        
                        <ModalBtnsWrapper buttonsWrapperWidth={buttonsWrapperWidth}>
                            { btnNames.map(i => ( 
                                i==='no' || i=== 'ok' ? 
                                    <Button
                                        key={Math.random()}
                                        handleClick={cancelModal || okCloselModal}
                                        disabled={false}
                                        btnName={i}
                                    >{i}</Button>
                                :
                                    <Button
                                        key={Math.random()}
                                        handleClick={resetForm}
                                        disabled={false}
                                        btnName={i}
                                    >{i}</Button>
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
    /* content: PropTypes.string, */
    message: PropTypes.string,
    action: PropTypes.string,
    modalData: PropTypes.object,
    btnNames: PropTypes.array
}