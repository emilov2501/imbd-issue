import get from 'lodash.get'
import { create } from 'zustand'
import { createJSONStorage, devtools, persist } from 'zustand/middleware'

export interface PosterDimension {
  width: number
  height: number
}

export interface MovieEntity {
  id: string
  title: string
  body: string
  poster: string
  actors: string
  keywords: string
  dimension?: PosterDimension
  reviews: number
}

export const movieKeys = {
  root: ['movie'],
  queries: {
    search: (query: string) => [...movieKeys.root, query],
    detail: (movieId: string) => [...movieKeys.root, movieId]
  }
}

interface State {
  data: MovieEntity[]
  movie: MovieEntity | null
  search: string
  isLoading: boolean
}

interface Actions {
  addMovies: (data: MovieEntity[]) => void
  addMovie: (data: MovieEntity) => void
  setSearch: (query: string) => void
  setLoading: (loading: boolean) => void
}

export const mapMovies = (
  item: any
): Pick<MovieEntity, 'title' | 'poster' | 'id' | 'dimension'> => ({
  id: get(item, '#IMDB_ID', ''),
  title: get(item, '#TITLE', ''),
  poster: get(item, '#IMG_POSTER', ''),
  dimension: {
    width: get(item, 'photo_width', 0),
    height: get(item, 'photo_height', 0)
  }
})

export const mapMovie = (item: any): MovieEntity => ({
  actors: get(item, 'actors', ''),
  body: get(item, 'description', ''),
  id: get(item, 'imdbId', ''),
  poster: get(item, 'poster', ''),
  title: get(item, 'name', ''),
  keywords: get(item, 'keywords', ''),
  reviews: get(item, 'reviews', 0)
})

export const movieStore = create<State & Actions>()(
  devtools(
    persist(
      (set) => ({
        data: [],
        movie: null,
        search: '',
        isLoading: false,
        addMovies: (movies: MovieEntity[]) => {
          set({ data: movies }, false, 'addMovies')
        },
        addMovie: (movie: MovieEntity) => {
          set({ movie }, false, 'addMovie')
        },
        setSearch: (query) => {
          set({ search: query }, false, 'setSearch')
        },
        setLoading: (loading: boolean) => {
          set({ isLoading: loading }, false, 'setLoading')
        }
      }),
      {
        name: '_movie',
        partialize: (state) => ({
          search: state.search
        }),
        storage: createJSONStorage(() => sessionStorage)
      }
    )
  )
)

// UseCases
export const useMovies = (): MovieEntity[] => movieStore((state) => state.data)
export const useSearchQuery = (): string => movieStore((state) => state.search)
export const useMovie = (): MovieEntity | null => movieStore((state) => state.movie)
export const useLoading = (): boolean => movieStore((state) => state.isLoading)

export const addMovies = movieStore.getState().addMovies
export const addMovie = movieStore.getState().addMovie
export const setLoading = movieStore.getState().setLoading
export const setSearch = movieStore.getState().setSearch
