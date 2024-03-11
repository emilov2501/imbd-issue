import ArrowBack from '@mui/icons-material/ArrowBack'
import { AppBar, Box, Grid, IconButton, Toolbar, Typography } from '@mui/material'
import CircularProgress from '@mui/material/CircularProgress'
import CssBaseline from '@mui/material/CssBaseline'
import { MovieInfoBlock, MoviePoster, movieModel } from '@renderer/entities/movie'
import { MovieReviewList } from '@renderer/widgets/movie-review-list'
import compose from 'compose-function'
import { useNavigate } from 'react-router-dom'
import { WithLoadMovie } from './lib/hoc/with-load-movie'

const MovieDetail = () => {
  const loading = movieModel.useLoading()
  const movie = movieModel.useMovie()
  const r = useNavigate()

  if (loading) {
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
    <>
      <CssBaseline />
      <AppBar
        sx={{
          background: 'black'
        }}
        component="nav"
        position="static"
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
            onClick={() => r(-1)}
          >
            <ArrowBack />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            {movie?.title}
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        sx={{
          marginBlock: '15px',
          paddingInline: '15px',
          boxSizing: 'border-box'
        }}
      >
        <Grid container boxSizing="border-box" columnGap={2} rowGap={2}>
          <Grid lg={4}>
            <MoviePoster />
          </Grid>
          <Grid lg>
            <MovieInfoBlock />
          </Grid>
        </Grid>
      </Box>

      <Box
        sx={{
          marginBlock: '15px',
          paddingInline: '15px',
          boxSizing: 'border-box'
        }}
      >
        <h2>FEATURED REVIEW</h2>
        <MovieReviewList />
      </Box>
    </>
  )
}

export default compose(WithLoadMovie)(MovieDetail)
