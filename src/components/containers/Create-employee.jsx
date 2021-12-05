import styled from 'styled-components'
import CompositeForm from '../elements/Employee-form/Employee-form-composite'
import { TitleWrapper, StyledTitle } from '../../style/global_style'


const CreateEmployee = () => {

    return (
        <main>
            <TitleWrapper>
                <StyledTitle>Create employee</StyledTitle>
            </TitleWrapper>
            <CompositeForm />
        </main>
    )
}

export default CreateEmployee