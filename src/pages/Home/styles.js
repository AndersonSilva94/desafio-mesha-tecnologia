import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 100vw;
    height: 100vh;
    background-color: ${theme.colors.background};
  `}
`;

export const Container = styled.div`
  ${({ theme }) => css`
    font-family: ${theme.font.family.poppins};
    background-color: ${theme.colors.background};
    padding: ${theme.spacings.xsmall};
    display: flex;
    flex-direction: column;
    align-items: center;
  `}
`;

export const Toggle = styled.div`
  ${() => css`
    display: flex;
    flex-direction: row-reverse;
    width: 80%;
  `}
`;

export const LinkSaved = styled(Link)`
  ${({theme}) => css`
    padding: ${theme.spacings.small};
    text-decoration: none;
    font-size: ${theme.font.size.xsmall};
    border: 1px solid ${theme.colors.background};
    border-radius: 10px;
    color: ${theme.colors.background};
    background-color: ${theme.colors.primary};
    margin-top: ${theme.spacings.xsmall};
    
    :hover {
      background-color: ${theme.colors.background};
      border: 1px solid ${theme.colors.primary};
      color: ${theme.colors.primary};
    }
  `}
`