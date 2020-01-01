import React, { useState } from 'react'
import { string } from 'prop-types'
import styled from 'styled-components'

import Button from '../Button/Button'
import { COLORS } from '../../styles/variables'


const Component = styled.aside`
  display: flex;
  padding: 12px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  justify-content: space-between;
  align-items: center;
  contain: layout;
  background: ${COLORS.offwhite};
  border-bottom: 2px solid ${COLORS.black};
`

const Banner = ({ children }) => {
  const [showing, setShowing] = useState(true)

  const dismiss = () => setShowing(false)

  if (!showing) return null
  return (

    <Component>
  
      <p>{children}</p>
  
      <Button onClick={dismiss}>Dismiss</Button>
  
    </Component>
  
  )
}

Banner.propTypes = {
  /**
   * The displayed text.
   */
  children: string.isRequired,
}


export default Banner
