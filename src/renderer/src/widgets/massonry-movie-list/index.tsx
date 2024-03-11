import Masonry from '@mui/lab/Masonry'
import Box from '@mui/material/Box'
import CircularProgress from '@mui/material/CircularProgress'
import { MovieCard, movieModel } from '@renderer/entities/movie'
import { Suspense } from 'react'
import { useNavigate } from 'react-router-dom'

export const MassonryMovieList = () => {
  const movies = movieModel.useMovies()
  const isLoading = movieModel.useLoading()

  const r = useNavigate()

  const goToDetail = (movie: movieModel.MovieEntity) => r(`/movie/${movie.id}`)

  if (isLoading) {
    return (
      <Box
        sx={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <CircularProgress />
      </Box>
    )
  }

  return (
    <Suspense fallback={<CircularProgress />}>
      <Masonry
        columns={4}
        spacing={0}
        defaultHeight={450}
        defaultColumns={4}
        defaultSpacing={1}
        sequential
        sx={{
          alignContent: 'center',
          margin: 0
        }}
      >
        {movies.map((movie) => (
          <div key={movie.id} onClick={() => goToDetail(movie)}>
            <MovieCard movie={movie} />
          </div>
        ))}
      </Masonry>
    </Suspense>
  )
}
