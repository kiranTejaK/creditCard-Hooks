import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100vw;
`
export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: #3b4b69;
  height: 200px;
  width: 50vw;
  height: 100vh;
`
export const LeftInnerContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/hooks/credit-card-bg.png');
  width: 300px;
  height: 200px;
  background-size: cover;
  border-radius: 10px;
`
export const MainHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 28px;
  color: #ffffff;
  font-weight: 500;
`

export const CardHeading = styled.p`
  color: #fff;
  font-size: 18px;
  padding: 10px;
`

export const CardName = styled.p`
  color: #fff;
  padding: 10px;
`
export const CardNumber = styled.p`
  color: #fff;
  padding: 10px;
`

export const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  height: 100vh;
`

export const RightInnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 250px;
  width: 300px;
  width: 50vw;
  box-shadow: 5px 10px : #d3d9e0;
`

export const RightHeading = styled.h1`
  color: #000;
  font-weight: 400;
  font-family: 'Roboto';
  font-size: 28px;
`

export const NumberInput = styled.input`
  width: 350px;
  padding: 10px;
  color: #000;
  margin-bottom: 10px;
`

export const NameInput = styled.input`
  width: 350px;
  margin-top: 10px;
  padding: 10px;
  color: #000;
`
