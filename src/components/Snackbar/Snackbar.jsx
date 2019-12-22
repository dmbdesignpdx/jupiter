import React, { useState } from 'react'
import { string } from 'prop-types'
import styled from 'styled-components'

import { COLORS } from '../../styles/variables'


const Component = styled.aside`
  display: flex;
  width: calc(100% - 40px);
  max-width: 420px;
  padding: 4px 4px 4px 16px;
  margin: 0 auto;
  align-items: center;
  border: 2px solid ${COLORS.black};
  background: ${COLORS.primary};
  justify-content: space-between;

  button {

    svg {
      width: 48px;
      height: 48px;
      padding: 12px;
      stroke: #000;
      stroke-width: 2;
      fill: none;
    }

    span {

    }
  }
`

const Snackbar = ({ children }) => {
  const [showing, setShowing] = useState(true)

  const close = () => setShowing(false)
  
  if (!showing) return null
  else return (

    <Component>
      
      <p>{children}</p>

      <button
        className="graphical"
        onClick={close}
      >
        <svg viewBox="0 0 48 48">
          <path d="M4,4 44,44" />
          <path d="M44,4 4,44" />
        </svg>
        <span>Close</span>
      </button>
      
    </Component>
  
  )
}

Snackbar.propTypes = {
  /**
   * The displayed content.
   */
  children: string.isRequired,
}


export default Snackbar
