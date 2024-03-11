import { movieModel } from '@renderer/entities/movie'
import { SimpleSearch } from '@renderer/entities/search'
import { useEffect } from 'react'
import { useMovieSearch } from '../api/Api'

export const MovieSearch = () => {
  const query = movieModel.useSearchQuery()

  const { movieSearchRefetch } = useMovieSearch(query)

  useEffect(() => {
    movieSearchRefetch()
  }, [query])

  return <SimpleSearch value={query} onChange={movieModel.setSearch} />
}
