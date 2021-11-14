import styled from 'styled-components'
import EmployeeForm from '../elements/Employee-form/Employee-form'

const TitleWrapper = styled.div`
    width:90%;
    margin: 2% auto;
    border: 1px solid grey;
    border-radius:5px;
    text-align: center;
`
const StyledTitle = styled.h1`
    color: grey;
    font-size:1em;
`

const CreateEmployee = () => { 
    return (
        <main>
            <TitleWrapper>
                <StyledTitle>Create employee</StyledTitle>
            </TitleWrapper>
            <EmployeeForm />
        </main>
    )
}

export default CreateEmployee