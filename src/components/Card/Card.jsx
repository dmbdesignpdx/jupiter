import React from 'react'
import { string } from 'prop-types'
import styled from 'styled-components'

import { COLORS } from '../../styles/variables'

const { grey, blue, white, black, offwhite } = COLORS


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
  }
`

const Wrapper = styled.a`

  p span {
    display: block;
    font-weight: 700;
    font-size: 0.8em;
    margin-top: 1em;
  }

  article::before {
    transition: 0.2s;
  }

  &:hover,
  &:focus {

    article::before {
      transform: translate(12px, 12px);
    }

    p span {
      color: ${blue};
    }
  }

  &:active {
    transform: scale(0.96);
  }
`


/**
 * Component
 */

const Card = ({ title, copy, ...attrs }) => {
  if (!('href' in attrs)) return (

  <Component>

      <h3>{title}</h3>

      <p>{copy}</p>

    </Component>

  )

  return (

    <Wrapper {...attrs}>

      <Component>
  
        <h3>{title}</h3>
  
        <p>{copy} <span>Learn More</span></p>
  
      </Component>

    </Wrapper>

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
