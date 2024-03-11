import { Box } from '@mui/material'
import { ReviewCard, reviewModel } from '@renderer/entities/reviews'

export const MovieReviewList = () => {
  const featuredReviews = reviewModel.useReviews()

  return (
    <Box>
      {featuredReviews.map((review) => (
        <ReviewCard key={review.id} review={review} />
      ))}
    </Box>
  )
}
