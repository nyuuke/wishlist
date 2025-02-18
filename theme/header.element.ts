import styled from 'styled-components'

export const StyledHeader = styled.div`
  display: flex;
  margin: 0 auto;
  align-items: center;
  justify-content: space-between;
`

export const Anchor = styled.button`
  display: flex;
  border: none;
  outline: none;
  margin: 0 10px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 500;
  background: none;
  align-items: center;
  justify-content: center;
  text-transform: capitalize;
  color: ${({ theme }) => theme.palette.accent_300};
`
