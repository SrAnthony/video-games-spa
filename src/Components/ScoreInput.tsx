import React from 'react'
import { InputContainer } from './Input'

const ScoreInput: React.FC = () => {
  
  return (
    <InputContainer>
      <label>
        Minimum Score
      </label>
      
      <select defaultValue={0}>
        <option disabled value={0}>
          1 - 10
        </option>
        
        {[...Array(10)].map((_, i) => (
          <option key={i} value={i + 1}>
            {i + 1}
          </option>
        ))}
      </select>
    </InputContainer>
  )
}

export default ScoreInput
