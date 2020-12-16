import React from 'react'
import { act, fireEvent, render } from '@testing-library/react'
import MyValidateForm from './MyValidateForm'

describe('MyValidateForm', () => {
    it('when submit email the right format, should submit with that email', () => {
        const mockSubmit = jest.fn()

        const { getByLabelText, getByText } = render(
            <MyValidateForm handleSubmit={mockSubmit} />
        )

        act(() => {
            fireEvent.change(getByLabelText('EMAIL'), {
                target: { value: 'pai@gmail.com' },
            })
        })

        act(() => {
            fireEvent.submit(getByText('Submit'))
        })

        expect(mockSubmit).toHaveBeenCalledWith('pai@gmail.com')
    })
    it('IsError for email.', () => {
        const mockSubmit = jest.fn()

        const { getByLabelText, getByText, debug } = render(
            <MyValidateForm handleSubmit={mockSubmit} />
        )

        act(() => {
            fireEvent.change(getByLabelText('EMAIL'), {
                target: { value: 'pai' },
            })
        })

        act(() => {
            fireEvent.submit(getByText('Submit'))
        })

        expect(mockSubmit).toHaveBeenCalledTimes(0)
    })
})
