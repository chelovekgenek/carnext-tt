import styled from "styled-components"

export const Button = styled.button`
  background: linear-gradient(45deg, rgba(237, 135, 0, 1) 0%, rgba(238, 76, 20, 1) 100%);
  font-size: medium;
  font-weight: bold;
  border: none;
  border-radius: 2rem;
  color: white;
  padding: 1rem 2rem;
  text-align: center;
  -webkit-text-decoration: none;
  text-decoration: none;
  display: inline-block;
  text-transform: uppercase;
  cursor: pointer;
  &:hover {
    background: linear-gradient(45deg, rgba(238, 76, 20, 1) 0%, rgba(237, 135, 0, 1) 100%);
  }
  &:disabled {
    background: lightgray;
  }
  i.fas {
    margin-left: 1rem;
  }
`
