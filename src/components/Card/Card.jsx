import React from 'react'
import { string } from 'prop-types'
import styled from 'styled-components'

import { COLORS } from '../../styles/variables'
import Link from '../Link/Link'

const { black, offwhite } = COLORS


/**
 * Styles
 */

const Component = styled.article`
  max-width: 420px;
  padding: 30px;
  position: relative;
  border: 2px solid ${black};
  background: ${offwhite};

  &::before {
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 12px;
    left: 12px;
    z-index: -1;
    content: '';
    background: ${black};
  }

  p {
    margin-top: 1em;

    ${({ isLink }) => isLink && `
      display: flex;
      flex-direction: column;
      
      a {
        margin-top: 1em;
        align-self: flex-start;
        z-index: 1;
      }
    `}
  }
`


/**
 * Component
 */

const Card = ({ title, copy, ...attrs }) => {
  const isLink = `href` in attrs

  return (

    <Component isLink>
  
      <h3>{title}</h3>
  
      <p>{copy} {isLink && <Link {...attrs} />}</p>
  
    </Component>
  
  )
}

Card.propTypes = {
  /**
   * The title of the card.
   */
  title: string.isRequired,
  /**
   * The content of the card.
   */
  copy: string.isRequired,
}


export default Card
