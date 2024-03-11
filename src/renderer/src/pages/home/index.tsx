import { AppBar, Toolbar, Typography } from '@mui/material'
import { MovieSearch } from '@renderer/features/movie-search'
import { MassonryMovieList } from '@renderer/widgets/massonry-movie-list'
import CssBaseline from '@mui/material/CssBaseline'

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
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            Movies
          </Typography>
          <MovieSearch />
        </Toolbar>
      </AppBar>
      <MassonryMovieList />
    </>
  )
}

export default HomePage
