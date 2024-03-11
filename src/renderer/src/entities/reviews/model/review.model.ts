import get from 'lodash.get'
import { create } from 'zustand'

export interface ReviewEntity {
  id: string | number
  summary: string
  author: string
  content: string
  createdAt: string
}

interface State {
  data: ReviewEntity[]
}

interface Actions {
  addReviews: (reviews: ReviewEntity[]) => void
}

export const mapReviews = (item: any): ReviewEntity => ({
  author: get(item, 'node.author.nickName', ''),
  summary: get(item, 'node.summary.originalText', ''),
  content: get(item, 'node.text.originalText.plaidHtml', ''),
  createdAt: get(item, 'submissionDate', ''),
  id: get(item, 'id', '')
})

export const reviewsKeys = {
  root: ['review'],
  queries: {
    list: (reviewId: string) => [...reviewsKeys.root, reviewId]
  }
}

export const reviewsStore = create<State & Actions>((set) => ({
  data: [],
  addReviews: (reviews) => {
    set({ data: reviews })
  }
}))

export const useReviews = () => reviewsStore((state) => state.data)

export const addReviews = reviewsStore.getState().addReviews
