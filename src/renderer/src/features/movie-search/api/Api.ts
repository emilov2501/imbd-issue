import { movieModel } from '@renderer/entities/movie'
import { http } from '@renderer/shared/api'
import { wait } from '@renderer/shared/utils/wait'
import { useQuery } from '@tanstack/react-query'
import get from 'lodash.get'

export const useMovieSearch = (query) => {
  const {
    data = [],
    isSuccess,
    isLoading,
    refetch
  } = useQuery({
    queryKey: movieModel.movieKeys.queries.search(query),
    queryFn: async ({ queryKey }) => {
      const [_, query] = queryKey
      const { data } = await http({
        params: {
          q: query
        },
        method: 'get'
      })

      return data
    }
  })

  wait().then(() => movieModel.setLoading(isLoading))

  if (isSuccess) {
    const list = get(data, 'description', [])
    wait().then(() => movieModel.addMovies(list.map(movieModel.mapMovies)))
  }

  return {
    movieSearchRefetch: refetch
  }
}
