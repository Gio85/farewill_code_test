import React from 'react'
import styled from 'styled-components'
import { DEVICE } from '../../constants'

const StyledCard = styled.div`
  width: 100%;
  height: 80%;
  box-shadow: 0 0 10px #888;
  border: 0.4px solid grey;
  border-radius: 5px;
  padding: 0.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: ${(props) => (props.direction === 'Left' ? 'row-reverse' : 'row')};

  @media ${DEVICE.MOBILE_S} {
    width: 90%;
    flex-direction: column-reverse;
  }

  @media ${DEVICE.TABLET} {
    width: 90%;
    flex-direction: ${(props) => (props.direction === 'Left' ? 'row-reverse' : 'row')};
  }
`

const StyledText = styled.p`
  width: 90%;
  color: black;
  @media ${DEVICE.MOBILE_S} {
    width: 90%;
    font-size: 0.8rem;
    text-align: center;
  }

  @media ${DEVICE.MOBILE_M} {
    width: 90%;
    text-align: center;
  }
`

const StyledCharacter = styled.img`
  width: 50%;
  height: 100%;

  @media ${DEVICE.MOBILE_S} {
    width: 50%;
    height: 50%;
  }

  @media ${DEVICE.MOBILE_M} {
    width: 40%;
    height: 50%;
  }

  @media ${DEVICE.MOBILE_L} {
    width: 20%;
    height: 60%;
  }

  @media ${DEVICE.TABLET} {
    width: 30%;
    height: 60%;
  }
`

export const Card = (props) => {
  const { quote } = props
  return (
    <StyledCard direction={quote.characterDirection}>
      <StyledText>{quote.quote}</StyledText>
      <StyledCharacter src={quote.image} />
    </StyledCard>
  )
}
