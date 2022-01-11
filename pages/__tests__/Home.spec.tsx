import React from 'react'
import { render, screen } from '@testing-library/react'
import Home from '..'

describe("Home page", (() => {
    test("it renders", (() => {
        render(<Home />)
        const label = screen.getByLabelText(/switch/i)
        expect(label).toBeInTheDocument()
        const credits = screen.getByText(/link al codepen del switch. todo el crédito a su creador./i)
        expect(credits).toBeInTheDocument()
        const link = screen.getByRole("link")
        expect(link).toHaveAttribute("href", "https://codepen.io/Katzwinkel/pen/yLNbwVV")
    }))
}))
