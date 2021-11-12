import { fireEvent, render, screen } from '@testing-library/react'
import EmployeeForm from './Employee-form'

// UI test: displays correct content
test('renders all expected fields', () => {
    const { container } = render(<EmployeeForm />)
    expect(container.getElementsByTagName('input').length).toBe(7)
    expect(container.getElementsByTagName('select').length).toBe(2)
    expect(container.getElementsByTagName('button').length).toBe(2)

})
