import '@testing-library/jest-dom'

import { render } from '@testing-library/react'
import React from 'react'

import { Card } from './Card'

test('Card component should be rendered', () => {
  render(
    <Card>
      <span id={'test-span'}>Test</span>
    </Card>
  )
  expect(document.getElementById('test-span')).toBeInTheDocument()
})
