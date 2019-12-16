import { configure, addParameters } from '@storybook/react'

import '../src/styles/global.css'
import './styles.css'


addParameters({
  backgrounds: [
    { name: `Light`, value: `#FBFBFB`, default: true },
    { name: `Dark`, value: `#222` },
  ],
})

configure([
  require.context(`../src/components`, false, /Intro\.stories\.mdx/),
  require.context(`../src/components`, true, /\.stories\.(js|mdx)$/),
], module)
