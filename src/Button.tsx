import React from 'react'
import styled from 'styled-components'

const ButtonWrapper = styled.button`
  background: white;
  padding: 0 16px;
  margin-top: 8px;
`
const Button: React.FC = () => {
  return (
    <ButtonWrapper>HI!</ButtonWrapper>
  )
}
export default Button
