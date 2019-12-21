import React, { useState } from 'react'
import { string } from 'prop-types'
import styled from 'styled-components'

import { COLORS } from '../../styles/variables'


const Component = styled.aside`
  padding: 15px;
  background: ${COLORS.grey};
  border: 2px solid ${COLORS.black};

  button {

    svg {
      width: 48px;
      height: 48px;
      padding: 10px;
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
      
      {children}

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
