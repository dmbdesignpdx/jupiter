import React from 'react'
import { string } from 'prop-types'
import styled from 'styled-components'
import { oneOf } from 'prop-types'

import { COLORS } from '../../styles/variables'


/**
 * Styles
 */

const Component = styled.button`
  padding: 0.3em 0;

  &:hover,
  &:focus {

    span {
      box-shadow: 9px 9px 0 ${COLORS.black};
      transform: translate(-3px, -3px);
  }
  } 

  &:active {

    span {
      box-shadow: 3px 3px 0 ${COLORS.black};
      transform: translate(-1px, -1px);
      transition: 0s;
    }
  }
`

const Text = styled.span`
  display: block;
  padding: 0.5em 1em;
  font-size: 0.8rem;
  font-weight: 700;
  background: ${props => COLORS[props.theme]};
  box-shadow: 3px 3px 0 ${COLORS.black};
  transition: 0.2s;
  backface-visibility: hidden;
`


/**
 * Component
 */

const Button = ({ theme, children, ...attrs }) => (

  <Component {...attrs}>

    <Text theme={theme}>{children}</Text>

  </Component>

)

Button.propTypes = {
  /**
   * Choose a theme.
   */
  theme: oneOf([`primary`, `secondary`]),
  /**
   * The displayed text.
   */
  children: string,
}

Button.defaultProps = {
  theme: `primary`,
  children: `Learn More`,
}


export default Button
