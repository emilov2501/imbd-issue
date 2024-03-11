import { Button, Card, CardActions, CardContent, Typography } from '@mui/material'
import React from 'react'
import { ReviewEntity } from '../../model/review.model'

interface ReviewCardProps {
  review: ReviewEntity
}

export const ReviewCard: React.FC<ReviewCardProps> = ({ review }) => {
  return (
    <Card>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {review.createdAt}
        </Typography>
        <Typography variant="h5" component="div">
          {review.summary}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {review.author}
        </Typography>
        <Typography variant="body2">
          <div dangerouslySetInnerHTML={{ __html: review.content }}></div>
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  )
}
