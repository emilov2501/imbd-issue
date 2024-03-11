import { Box, Skeleton, styled } from '@mui/material'
import React from 'react'
import { MovieEntity } from '../../model/movie.model'

interface MovieCardProps {
  movie: MovieEntity
}

const Label = styled('div')(() => ({
  position: 'absolute',
  top: 0,
  fontWeight: 600,
  left: 0,
  width: '100%',
  color: 'white',
  padding: '15px',
  zIndex: '2',
  fontSize: '18px',
  '&:before': {
    content: '""',
    padding: '15px',
    position: 'absolute',
    width: '100%',
    zIndex: '-1',
    top: '0',
    left: '0',
    height: '100px',
    boxSizing: 'border-box',
    display: 'block',
    background: 'linear-gradient(180deg, #111, transparent)'
  }
}))

const StyledBox = styled(Box)(() => ({
  position: 'relative'
}))

export const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  return (
    <StyledBox>
      {movie.poster ? (
        <img
          alt={movie.title}
          src={movie.poster}
          style={{
            display: 'block',
            width: '100%',
            height: '100%'
          }}
          loading="lazy"
          decoding="async"
        />
      ) : (
        <Skeleton sx={{ height: 290 }} animation="wave" variant="rectangular" />
      )}
      <Label>{movie.title}</Label>
    </StyledBox>
  )
}
