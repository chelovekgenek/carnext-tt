import styled from "styled-components"

const headerHeight = 4

export const Header = styled.header`
  height: ${headerHeight}rem;
  width: 100%;
  border-bottom: 1px solid lightgray;
  box-sizing: border-box;
  color: white;
`

export const Logo = styled.img`
  position: absolute;
  top: -2rem;
  left: -2rem;
  width: auto;
  height: 9rem;
`

export const Content = styled.main`
  height: calc(100% - ${headerHeight}rem);
  background-color: #f6f8fb;
`
