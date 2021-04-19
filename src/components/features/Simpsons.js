import React from 'react'
import styled from 'styled-components'
import { DEVICE } from '../../constants'
import { Card } from './Card'

const StyledQuotes = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-gap: 1rem;

  @media ${DEVICE.MOBILE_S} {
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 0rem;
  }

  @media ${DEVICE.TABLET} {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 0rem;
  }
`

const StyledQuote = styled.div`
  color: black;
  padding: 0.5rem;
  height: 20rem;
  width: 100%;
`

export const Simpsons = (props) => {
  const { quotes } = props
  return (
    <StyledQuotes>
      {quotes &&
        Array.isArray(quotes.data) &&
        quotes.data.map((quote, i) => (
          <StyledQuote key={i}>
            <Card quote={quote} />
          </StyledQuote>
        ))}
    </StyledQuotes>
  )
}
