import React from 'react'
import { string } from 'prop-types'
import styled from 'styled-components'

import { COLORS } from '../../styles/variables'


/**
 * Styles
 */

const Component = styled.a`
  /* display: block; */
  position: relative;
  font-family: Menlo, monospace;
  font-size: 0.9rem;
  font-weight: 700;
  text-decoration: underline;
  white-space: nowrap;

  &::before {
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: -1;
    background: ${COLORS.primary};
    content: '';
    transition: 0.2s;
    transform: translateX(0) scaleX(0);
    transform-origin: 0 50%;
  }

  &:hover::before {
    transform: translateX(0.5em) scaleX(1);
  }
`


/**
 * Component
 */

const rel = `noopener noreferrer nofollow`

const Link = ({ children, ...attrs }) => (

  <Component
    {...attrs}
    rel={'target' in attrs ? rel : null}
  >

    {children}

  </Component>

)

Link.propTypes = {
  /**
   * The displayed text.
   */
  children: string,
}

Link.defaultProps = {
  children: `Learn More`,
}


export default Link
