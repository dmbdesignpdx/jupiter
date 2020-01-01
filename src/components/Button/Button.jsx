import React from 'react'
import { string, oneOf } from 'prop-types'
import styled from 'styled-components'

import { COLORS } from '../../styles/variables'

const { black } = COLORS


/**
 * Styles
 */

const Component = styled.button`
  padding: 0.3em 0;
  transition: transform 0.2s;
  transform-style: preserve-3d;

  &:hover,
  &:focus {
    transform: translate(-3px, -3px);

    span::before {
      transform: translate(6px, 6px);
    }
  } 

  &:active {
    transform: translate(-1px, -1px);
    transition: 0s;

    span::before {
      transform: translate(1px, 1px);
      transition: 0s;
    }
  }
`

const Text = styled.span`
  display: block;
  padding: 0.6em 1em;
  position: relative;
  font-size: 0.9rem;
  font-weight: 700;
  background: ${props => COLORS[props.theme]};

  &::before {
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 3px;
    left: 3px;
    z-index: -1;
    content: '';
    background: ${black};
    transition: transform 0.2s;
    backface-visibility: hidden;
  }
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
