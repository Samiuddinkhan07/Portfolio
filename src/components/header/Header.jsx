import React from 'react'
import {HeaderContent} from '../index'
import { HeaderStyles } from '../../styled/styles'

const Header = () => {
  return (
    <HeaderStyles>
      <div className="left-infosection">
        <h2>{HeaderContent.LeftSection.name},{HeaderContent.LeftSection.role}</h2>
      </div>
    </HeaderStyles>
  )
}

export default Header