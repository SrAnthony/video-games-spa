import styled from 'styled-components'

const Button = styled.button`
  background-color: ${p => p.theme.colors.accent_blue};
  border: none;
  color: white;
  padding: 0 20px;
  height: 40px;
  cursor: pointer;
`

export default Button
