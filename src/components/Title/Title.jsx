import React from 'react'
import { string } from 'prop-types'
import styled from 'styled-components'


/**
 * Styles
 */

const Component = styled.h1`
  font-size: 3rem;
`

/**
 * Component
 */

const Title = ({ children }) => (

  <Component>{children}</Component>

)


Title.propTypes = {
  /**
   * The displayed text.
   */
  children: string.isRequired,
}


export default Title
