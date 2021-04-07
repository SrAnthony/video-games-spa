import React from 'react'
import styled from 'styled-components'

type InputProps = {
  label: string,
} & React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

const Input: React.FC<InputProps> = ({ label, ...props }) => {
  
  return (
    <InputContainer>
      <label>
        {label}
      </label>
      
      <input {...props} />
    </InputContainer>
  )
}

export default Input

export const InputContainer = styled.div`
  margin-bottom: 25px;
  width: 100%;

  label {
    color: white;
  }

  input, select {
    background-color: #182c47;
    color: #c1d1e8;
    border: none;
    padding: 0 10px;
    height: 40px;
    margin-top: 5px;
    width: 100%;
  }
`
