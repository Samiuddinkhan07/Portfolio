import React from 'react'
import {HeaderContent} from '../index'
import { HeaderStyles } from '../../styled/styles'

const Header = () => {
  return (
    <HeaderStyles>
      <div class="left-infosection">
        <h2>{HeaderContent.LeftSection.name},{HeaderContent.LeftSection.role}</h2>
      </div>
      <div className="right-infoSection">
        <ul>
          <li>{HeaderContent.RightSection.skills}</li>
          <li>{HeaderContent.RightSection.career}</li>
          <li>{HeaderContent.RightSection.projects}</li>
        </ul>
      </div>
    </HeaderStyles>
  )
}

export default Header