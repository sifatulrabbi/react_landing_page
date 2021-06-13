import React from 'react'
import { Link } from 'react-router-dom'
import { InfoSec, InfoColumn, InfoRow, TextWrapper, TopLine, Heading, Subtitle } from './InfoSection.elements'
import { Container, Button } from '../../globalStyles'

const InfoSection = ({
   lightBg,
   imgStart,
   lightTopLine,
   topLine,
   lightText,
   headLine,
   lightTextDesc,
   description,
   primary,
   buttonLabel,
}) => {
   return (
      <>
         <InfoSec lightBg={lightBg}>
            <Container>
               <InfoRow imgStart={imgStart}>
                  <InfoColumn>
                     <TextWrapper>
                        <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                        <Heading lightText={lightText}>{headLine}</Heading>
                        <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
                        <Link to='/sign-up'>
                           <Button big fontBig primary={primary}>
                              {buttonLabel}
                           </Button>
                        </Link>
                     </TextWrapper>
                  </InfoColumn>
               </InfoRow>
            </Container>
         </InfoSec>
      </>
   )
}

export default InfoSection
