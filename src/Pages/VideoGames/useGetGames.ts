import { useMemo } from 'react'
import { FiltersStateType } from './FiltersReducer'
import useAxios from 'axios-hooks'

export type GameType = {
  id: number,
  first_release_date: number,
  name: string,
  rating: number,
  summary: string,
}

const useGetGames = (filters: FiltersStateType) => {
  const [{ data, loading }] = useAxios<GameType[]>(
    'https://public.connectnow.org.uk/applicant-test/',
  )
  
  const games = useMemo(() => {
    if (!data) return []
    
    return data
      .filter(game => {
        if (filters.name && !game.name.toLowerCase().includes(filters.name.toLowerCase())) return false
        if (filters.minimum_rating && game.rating < filters.minimum_rating) return false
        
        return true
      })
      .sort((...compare_games) => {
        if (filters.order_direction === 'DESC') {
          compare_games.reverse()
        }
        
        const [a, b] = compare_games
        
        switch (filters.order_by) {
          case 'name':
            return a.name.localeCompare(b.name)
          case 'score':
            return a.rating - b.rating
          case 'release_date':
            return a.first_release_date - b.first_release_date
          default:
            return 0
        }
      })
  }, [data, filters])
  
  return [games, loading] as const
}

export default useGetGames
