import { movieModel } from '@renderer/entities/movie'
import { reviewModel } from '@renderer/entities/reviews'
import { http } from '@renderer/shared/api'
import { useQuery } from '@tanstack/react-query'
import get from 'lodash.get'
import { ComponentType } from 'react'
import { useParams } from 'react-router-dom'

export const WithLoadMovie = (Component: ComponentType) => {
  const _MovieDetail = () => {
    const params = useParams()
    const { data, isSuccess, isLoading } = useQuery({
      queryKey: movieModel.movieKeys.queries.detail(get(params, 'id', '')),
      queryFn: async ({ queryKey }) => {
        const [_, tt] = queryKey
        const { data } = await http({
          method: 'get',
          params: {
            tt
          }
        })

        return data
      }
    })

    movieModel.setLoading(isLoading)

    if (isSuccess) {
      const poster = get(data, 'fake.#IMG_POSTER', '')
      const actors = get(data, 'fake.#ACTORS', '')
      const reviews = get(data, 'main.reviews.total', 0)
      const featured = get(data, 'main.featuredReviews.edges', [])

      movieModel.addMovie(
        movieModel.mapMovie({
          ...get(data, 'short'),
          poster,
          actors,
          reviews
        })
      )

      reviewModel.addReviews(featured.map(reviewModel.mapReviews))
    }

    return <Component />
  }

  return _MovieDetail
}
