import { Box } from '@mui/material'
import { useMovie } from '../../model/movie.model'

export const MoviePoster = () => {
  const movie = useMovie()

  return (
    <Box
      sx={{
        height: '400px'
      }}
    >
      <img style={{ width: '100%', height: '100%', objectFit: 'cover' }} src={movie?.poster} />
    </Box>
  )
}
