import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Switch from '../Switch'

const mockFetch = jest.fn()

window.fetch = mockFetch;

describe("Switch component", (() => {
    test("it works", (() => {
        render(<Switch />)
        const label = screen.getByLabelText(/switch/i)
        userEvent.click(label)
        expect(label).toBeChecked()
        expect(mockFetch).toHaveBeenCalledTimes(1)
        expect(mockFetch).toHaveBeenCalledWith("/api/philips/true")
        userEvent.click(label)
        expect(label).not.toBeChecked()
        expect(mockFetch).toHaveBeenCalledTimes(2)
        expect(mockFetch).toHaveBeenCalledWith("/api/philips/false")
    }))
}))
