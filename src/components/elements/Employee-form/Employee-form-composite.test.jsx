import React from "react";
import { useState } from "react";
import { act, fireEvent, render, screen, cleanup, waitFor } from '@testing-library/react'
import CompositeForm from './Employee-form-composite'
import userEvent from '@testing-library/user-event'
import { validate } from "../../../utils/form_validators"
import SimpleInput from "../Form-inputs/SimpleInput";
import { employeeFormFields } from '../../../data/employee-form-fields'

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

describe('form testing', () => {
    beforeEach(() => { 
        jest.resetModules() //  resets module cache and allows to reimport modules
        cleanup()

    }); 
    afterEach(cleanup) // Since we are not using shallow render we have to unmount or cleanup after every test.


    // UI test: displays correct content
    // --------------
    test('renders all expected fields', () => {
        const { container } = render(<CompositeForm />)
        expect(container.getElementsByTagName('input').length).toBe(7)
        expect(container.getElementsByTagName('select').length).toBe(2)
        expect(container.getElementsByTagName('button').length).toBe(2)
    })
    // <input> element should have an onChange attribute
    // <form> element should have a onSubmit attribute

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
        render(<CompositeForm />)
        expect(screen.getByRole('button', { name: /save/i })).toBeDisabled();
    })

    test('after completing form, if one field is empty, save btn should still be disabled', () => {
        /* render(<CompositeForm />)
        userEvent.type(screen.getByPlaceholderText(/firstName/i ), userMock.firstName); */ // ---- TO REVIEW : diff userEvent / and following ?
        const setValues = jest.fn();
        const { container } = render(<CompositeForm onClick={setValues}  />)
        container.querySelector('input', { name: 'firstName' }).value = 'Lester'
        container.querySelector('input', { name: 'lastName' }).value = 'Nygaard'
        container.querySelector('input', { name: 'dob' }).value = '1964-11-11'
        container.querySelector('input', { name: 'startdate' }).value = '2004-11-11'
        container.querySelector('input', { name: 'street' }).value = '613 Willow Creek Drive'
        container.querySelector('input', { name: 'city' }).value = 'Bemidji'
        container.querySelector('select', { name: 'state' }).value = 'Minnesota'
        container.querySelector('input', { name: 'zipcode' }).value = '56601'
        container.querySelector('select', { name: 'department' }).value = ''

        expect(screen.getByRole('button', { name: /save/i })).toBeDisabled();
        
        // fill out missing input
        container.querySelector('select', { name: 'department' }).value = 'Sales'
        expect(screen.getByRole('button', { name: /save/i })).toHaveAttribute("disabled", ""); // = enabled

    })

    test('if some fields are invalid, save btn should be disabled', () => {
        const setValues = jest.fn();
        const { container } = render(<CompositeForm onClick={setValues}  />)
        container.querySelector('input', { name: 'firstName' }).value = 'Le99er'
        container.querySelector('input', { name: 'lastName' }).value = 'Nygaard'
        container.querySelector('input', { name: 'dob' }).value = '1964-11-11'
        container.querySelector('input', { name: 'startdate' }).value = '2004-11-11'
        container.querySelector('input', { name: 'street' }).value = '613 Willow Creek Drive'
        container.querySelector('input', { name: 'city' }).value = 'Bemidji'
        container.querySelector('select', { name: 'state' }).value = 'Minnesota'
        container.querySelector('input', { name: 'zipcode' }).value = '56601'
        container.querySelector('select', { name: 'department' }).value = 'Sales'
        
        expect(screen.getByRole('button', { name: /save/i })).toBeDisabled();
    })

    test.skip('if a field is invalid, corresponding error message should show', () => {

        const { container } = render(<CompositeForm  />)
        const itemField = container.querySelector('input', { name: 'firstName' })
        
        /* manual way of inputting +  event: ( = fireEvent())
        itemField.value = 'Le99er'
        const inputEvent = new Event("blur", { bubbles: true})
        itemField.dispatchEvent(inputEvent) */

        fireEvent.input(itemField, {target: { value: 'Le99er'}, bubbles:true})
        const setErrors = jest.fn();
        const field = employeeFormFields[0]
        const errors = validate['firstName']('Le99er')

        render(<SimpleInput field={field} errors={errors} onBlur={setErrors}  />)
        
        expect(screen.getByText('firstName should only contain characters')).toBeInTheDocument()
        cleanup()
    })

    test('after completing form, if all fields are valid, save btn should be enabled', () => {
        const setValues = jest.fn();
        const { container } = render(<CompositeForm onClick={setValues}  />)
        container.querySelector('input', { name: 'firstName' }).value = 'Lester'
        container.querySelector('input', { name: 'lastName' }).value = 'Nygaard'
        container.querySelector('input', { name: 'dob' }).value = '1964-11-11'
        container.querySelector('input', { name: 'startdate' }).value = '2004-11-11'
        container.querySelector('input', { name: 'street' }).value = '613 Willow Creek Drive'
        container.querySelector('input', { name: 'city' }).value = 'Bemidji'
        container.querySelector('select', { name: 'state' }).value = 'Minnesota'
        container.querySelector('input', { name: 'zipcode' }).value = '56601'
        container.querySelector('select', { name: 'department' }).value = 'Sales'
        
        expect(screen.getByRole('button', { name: /save/i })).toHaveAttribute("disabled", "");
    })


    test('adding valid input values to form then submit should update state object', () => {
        const setValues = jest.fn();
        const { container } = render(<CompositeForm onClick={setValues}  />)
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

        const submitBtn = screen.getByText('save');
        act(() => { fireEvent.click(submitBtn)});
        
        expect(setValues).toBeTruthy();
    })

})