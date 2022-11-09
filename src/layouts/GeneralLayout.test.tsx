import '@testing-library/jest-dom'

import { render } from '@testing-library/react'
import React from 'react'

import { GeneralLayout } from './GeneralLayout'

test('GeneralLayout component should be rendered', () => {
  render(
    <GeneralLayout>
      <span id={'test-span'}>Test</span>
    </GeneralLayout>
  )
  expect(document.getElementById('test-span')).toBeInTheDocument()
})
