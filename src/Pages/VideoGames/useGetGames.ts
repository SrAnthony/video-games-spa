import useAxios from 'axios-hooks'

export type GameType = {
  id: number,
  first_release_date: number,
  name: string,
  rating: number,
  summary: string,
}

const useGetGames = () => {
  return useAxios<GameType[]>(
    'https://public.connectnow.org.uk/applicant-test/',
  )
}

export default useGetGames
