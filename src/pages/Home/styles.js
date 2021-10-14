import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  ${({ theme }) => css`
    font-family: ${theme.font.family.poppins};
    padding: ${theme.spacings.xsmall};
    display: flex;
    flex-direction: column;
    align-items: center;
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