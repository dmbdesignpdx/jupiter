import React from 'react'
import { string } from 'prop-types'
import styled from 'styled-components'


/**
 * Styles
 */

const Component = styled.article`
  max-width: 420px;
  padding: 30px;
  background: #EEE;
  border: 2px solid #000;
  position: relative;

  &::before {
    display: block;
    width: 100%;
    height: 100%;
    background: #0AC;
    position: absolute;
    top: 12px;
    left: -12px;
    z-index: -1;
    content: '';
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
    opacity: 0.7;
  }

  &:hover,
  &:focus {

    article::before {
      transform: translate(24px, -24px);
    }

    p span {
      color: #0AC;
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
  title: string.isRequired,
  copy: string.isRequired,
}


export default Card
