import React from "react";
import { act, fireEvent, render, screen } from '@testing-library/react'
import EmployeeForm from './Employee-form'
import userEvent from '@testing-library/user-event'

const userMock = { 
    firstName: 'Lester',
    lastName :'Nygaard',
    dob: '1964-11-11',
    startdate: '2004-11-11',
    street: '613 Willow Creek Drive',
    city: 'Bemidji',
    state: 'Minnesota',
    zipcode: '56601',
    department: 'Sales'
}


// UI test: displays correct content
// --------------
test('renders all expected fields', () => {
    const { container } = render(<EmployeeForm />)
    expect(container.getElementsByTagName('input').length).toBe(7)
    expect(container.getElementsByTagName('select').length).toBe(2)
    // expect(container.getElementsByTagName('button').length).toBe(2)
})
// <input> element should have an onChange attribute
// <form> element should have a onSubmit attribute
// 

// Behavior tests
// --------------
// <input> element with type= "text" should have a placeholder attribute with value xxx
// <input> element with type= "select" should have a default value xxx
// <input> elements should be empty
// should update the state when a value is input => handleInputChange() method
// should display an error when no value is input at submit / blur => handleBlur() method
// <span> element should be null when validationError: false
// <span> elements should be 'Please enter xxxx ' when validationError: true

test('at form init, save btn should be disabled', () => { 
    render(<EmployeeForm />)
    expect(screen.getByRole('button', { name: /save/i })).toBeDisabled();
})

test('after completing form, if one field is empty, save btn should still be disabled', () => {
    render(<EmployeeForm />)
    
    userEvent.type(screen.getByPlaceholderText(/firstName/i ), userMock.firstName);

})

test('after completing form, if all fields are valid, save btn should be enabled', () => {
    render(<EmployeeForm />)
})



// fill inputs and retrieve values with handleSubmit()
test('adding input values to form then submit should update state object', () => {
    const setValues = jest.fn();
    const { container } = render(<EmployeeForm onClick={setValues}  />)
    container.querySelector('input', { name: 'firstName' }).value = 'Lester'
    container.querySelector('input', { name: 'lastName' }).value = 'Nygaard'
    container.querySelector('input', { name: 'dob' }).value = '1964-11-11'
    container.querySelector('input', { name: 'startdate' }).value = '2004-11-11'
    container.querySelector('input', { name: 'street' }).value = '613 Willow Creek Drive'
    container.querySelector('input', { name: 'city' }).value = 'Bemidji'
    container.querySelector('select', { name: 'state' }).value = 'Minnesota'
    container.querySelector('input', { name: 'zipcode' }).value = '56601'
    container.querySelector('select', { name: 'department' }).value = 'Sales'
    
    const handleClick = jest.spyOn(React, "useState");
    handleClick.mockImplementation(size => [size, setValues]);


    const submitBtn = screen.getByText('Save');
    act(() => { fireEvent.click(submitBtn)});
    expect(setValues).toBeTruthy();

})
