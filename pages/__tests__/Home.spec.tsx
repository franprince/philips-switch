import React from 'react'
import { render, screen } from '@testing-library/react'
import Home from '..'

describe("Home page", (() => {
    test("it renders", (() => {
        render(<Home />)
        const label = screen.getByLabelText(/switch/i)
        expect(label).toBeInTheDocument()
    }))
}))
