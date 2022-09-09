import * as React from 'react'
import type { InputHTMLAttributes } from 'react'
import styled from 'styled-components'

import classes from './classes'

interface Props extends InputHTMLAttributes<HTMLInputElement> {}
const InputWrapper = styled.input`
  background: white;
  padding: 0 16px;
  margin-top: 8px;
`
const Input: React.FunctionComponent<Props> = (props) => {
  const { className, ...rest } = props
  return <InputWrapper className={classes('fui-input', className)} {...rest} />
}
export default Input
