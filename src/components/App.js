import React, { useState, useEffect } from 'react'
import { Simpsons } from './features/Simpsons'
import fetchQuotes from '../fetchQuotes'
import Button from './Button'
import Header from './Header'
import styled from 'styled-components'
import { CONTENT_WIDTH, SPACING } from '../constants'
import '../index.css'

const StyledContentWrapper = styled.div`
  margin: 0 auto;
  max-width: ${CONTENT_WIDTH};
  padding: ${SPACING.L};
`

const StyledLoadingDiv = styled.div`
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  position: fixed;
  display: block;
  opacity: 0.6;
  background-color: #fff;
  z-index: 99;
  text-align: center;
`

const StyledLoadingText = styled.p`
  left: 0;
  line-height: 200px;
  margin-top: -100px;
  position: absolute;
  text-align: center;
  top: 50%;
  width: 100%;
  font-size: 2rem;
`

const App = () => {
  const [quotes, setQuotes] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [clicked, setClicked] = useState(false)

  const onClick = async () => {
    if (!clicked) {
      setClicked(true)
      setIsLoading(true)
      setQuotes(await fetchQuotes())
    }
  }

  useEffect(() => {
    if (quotes && quotes.data && quotes.data.length) {
      setIsLoading(false)
      setClicked(false)
    }
  }, [quotes])

  return (
    <>
      <Header />
      <StyledContentWrapper>
        <Button onClick={onClick}>Load quotes</Button>
        {isLoading && (
          <StyledLoadingDiv>
            <StyledLoadingText>Loading...</StyledLoadingText>
          </StyledLoadingDiv>
        )}
        <Simpsons quotes={quotes} />
      </StyledContentWrapper>
    </>
  )
}

export default App
