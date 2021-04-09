import { Reducer } from 'react'

export type OrderByType = 'release_date' | 'score' | 'name'
export type OrderDirectionType = 'ASC' | 'DESC'

export type FiltersStateType = {
  name: string,
  minimum_rating: number | null,
  order_by: OrderByType,
  order_direction: OrderDirectionType,
}

export type FiltersActionType =
  | { type: 'set_name', payload: FiltersStateType['name'] }
  | { type: 'set_minimum_rating', payload: FiltersStateType['minimum_rating'] }
  | { type: 'set_order_by', payload: FiltersStateType['order_by'] }
  | { type: 'set_order_direction', payload: FiltersStateType['order_direction'] }
  | { type: 'clear' }

export const initial_values: FiltersStateType = {
  name: '',
  minimum_rating: null,
  order_by: 'release_date',
  order_direction: 'ASC',
}

const FiltersReducer: Reducer<FiltersStateType, FiltersActionType> = (state, action) => {
  // I would use a switch if I had more actions to check
  if (action.type === 'clear')
    return initial_values
  
  // Just create all sets
  if (action.type.includes('set_') && 'payload' in action) {
    const key = action.type.split('set_')[1]
    
    return { ...state, [key]: action.payload }
  }
  
  return state
}

export default FiltersReducer
