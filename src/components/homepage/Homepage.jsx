import React from 'react';
import Header from '../header/Header';
import { PageContainer } from '../../styled/styles';
import {AboutSection} from '../../styled/styles'

const homepage = () => {
  return (
    <PageContainer>
       <Header/>
       <AboutSection>
          <div className='about-me-content'>
              <div>
                <div className='name-and-role'>
                  <img src="" alt="" />
                  <h6></h6>
                  <p></p>
                </div>
                <div className='follow-icons'>

                </div>
              </div>
              <div className='aboutme-passionate'>
                <p></p>
              </div>
              <div className='aboutme-more-content'>
                <p></p>
              </div>
          </div>
          <div className='my-pic'>

          </div>
       </AboutSection>
    </PageContainer>
  )
}

export default homepage