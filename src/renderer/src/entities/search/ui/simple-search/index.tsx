import styled from '@emotion/styled'
import { InputBase, debounce } from '@mui/material'
import React, { ChangeEvent, memo, useCallback, useState } from 'react'

interface SimpleSearchProps {
  onChange: (value: string) => void
  value: string
}

const StyledInputBase = styled(InputBase)(() => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: '1px 1px 1px 0',
    paddingLeft: `calc(1em + 4px)`
  }
}))

export const SimpleSearch: React.FC<SimpleSearchProps> = memo(({ value, onChange }) => {
  const [query, setQuery] = useState<string>(() => value)

  const _onChange = debounce((e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value)
  }, 1000)

  const debounceFn = useCallback(_onChange, [])

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value)
    debounceFn(e)
  }, [])

  return (
    <StyledInputBase
      value={query}
      placeholder="Search…"
      inputProps={{ 'aria-label': 'search' }}
      onChange={handleChange}
    />
  )
})
