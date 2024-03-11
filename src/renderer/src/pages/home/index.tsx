import { AppBar, Toolbar, Typography } from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline'
import { MovieSearch } from '@renderer/features/movie-search'
import { MassonryMovieList } from '@renderer/widgets/massonry-movie-list'

const HomePage = () => {
  return (
    <>
      <CssBaseline />
      <AppBar
        position="static"
        sx={{
          background: 'black'
        }}
      >
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: 'none', sm: 'block', letterSpacing: '15px', fontFamily: 'monospace' }
            }}
          >
            MOVIES
          </Typography>
          <MovieSearch />
        </Toolbar>
      </AppBar>
      <MassonryMovieList />
    </>
  )
}

export default HomePage
