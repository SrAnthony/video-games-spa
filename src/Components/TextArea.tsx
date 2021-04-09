import React from 'react'
import { InputContainer } from './Input'

type TextAreaProps = {
  label: string,
} & React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>

const TextArea: React.FC<TextAreaProps> = ({ label, ...props }) => {
  
  return (
    <InputContainer>
      <label>
        {label}
      </label>
      
      <textarea {...props} />
    </InputContainer>
  )
}

export default TextArea
