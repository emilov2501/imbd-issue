import { Divider, List, ListItem, ListItemText } from '@mui/material'
import { useMovie } from '../../model/movie.model'

const style = {
  p: 0,
  borderColor: 'divider',
  backgroundColor: 'background.paper'
}

export const MovieInfoBlock = () => {
  const movie = useMovie()

  return (
    <List sx={style} aria-label="mailbox folders">
      <ListItem>
        <ListItemText primary="Name" />
        <ListItemText sx={{ textAlign: 'end' }} secondary={movie?.title} />
      </ListItem>
      <Divider component="li" />
      <ListItem>
        <ListItemText primary="Actors" />
        <ListItemText sx={{ textAlign: 'end' }} secondary={movie?.actors} />
      </ListItem>
      <Divider component="li" />
      <ListItem>
        <ListItemText primary="Keywords" />
        <ListItemText sx={{ textAlign: 'end' }} secondary={movie?.keywords} />
      </ListItem>
      <Divider component="li" />
      <ListItem>
        <ListItemText primary="Reviews" />
        <ListItemText sx={{ textAlign: 'end' }} secondary={movie?.reviews} />
      </ListItem>
      <Divider component="li" />
      <ListItem>
        <ListItemText sx={{ textAlign: 'start' }} secondary={movie?.body} />
      </ListItem>
    </List>
  )
}
