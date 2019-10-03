import styled, { css } from "styled-components"

export const Row = styled.div`
  display: flex;
`

interface IColumn {
  padding?: number
}
export const Column = styled.div<IColumn>`
  flex-direction: column;
  width: 50%;
  ${({ padding = 2 }) => css`
    &:first-child {
      padding-right: ${padding}rem;
    }
    &:last-child {
      padding-left: ${padding}rem;
    }
  `}
`
