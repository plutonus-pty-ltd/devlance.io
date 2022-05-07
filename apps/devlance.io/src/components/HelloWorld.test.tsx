import React from 'react'
import { render, screen } from '@testing-library/react'
import HelloWorld from './HelloWorld'

describe('HelloWorld component', () => {
  it('should render', () => {
    render(<HelloWorld />)
    expect(screen.getByText('Boop')).toBeInTheDocument()
  })
})
