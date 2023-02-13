import {useState} from 'react'

import {
  MainContainer,
  LeftContainer,
  RightContainer,
  LeftInnerContainer,
  RightInnerContainer,
  MainHeading,
  CardName,
  CardNumber,
  CardHeading,
  RightHeading,
  NameInput,
  NumberInput,
} from './styledComponents'

const CreditCard = () => {
  const [name, setName] = useState('')
  const [number, setNumber] = useState('')

  const onChangeNumber = event => {
    setNumber(event.target.value)
  }

  const onChangeName = event => {
    setName(event.target.value)
  }

  return (
    <MainContainer>
      <LeftContainer>
        <MainHeading>CREDIT CARD</MainHeading>
        <LeftInnerContainer data-testid="creditCard">
          <CardNumber>{number}</CardNumber>
          <CardHeading>{name.toUpperCase()}</CardHeading>
          <CardName>CARDHOLDER NAME</CardName>
        </LeftInnerContainer>
      </LeftContainer>

      <RightContainer>
        <RightInnerContainer>
          <RightHeading>Payment Method</RightHeading>
          <NumberInput
            placeholder="Card Number"
            type="text"
            value={number}
            onChange={onChangeNumber}
          />
          <NameInput
            placeholder="Cardholder Name"
            type="text"
            value={name}
            onChange={onChangeName}
          />
        </RightInnerContainer>
      </RightContainer>
    </MainContainer>
  )
}

export default CreditCard
