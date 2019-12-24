import {
  configure,
  addParameters,
  addDecorator,
} from '@storybook/react'
import { withA11y } from '@storybook/addon-a11y'

import { COLORS } from '../src/styles/variables'
import '../src/styles/global.css'
import './styles.css'


addDecorator(withA11y)

addParameters({
  backgrounds: [
    { name: `Light`, value: COLORS.offwhite, default: true },
    { name: `Dark`, value: COLORS.nearblack },
  ],
})

configure([
  require.context(`../src/components`, false, /Intro\.stories\.mdx/),
  require.context(`../src/components`, true, /\.stories\.(js|mdx)$/),
], module)
