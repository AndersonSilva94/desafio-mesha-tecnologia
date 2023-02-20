import styled, { css } from 'styled-components';

export const Container = styled.table`
  ${({ theme }) => css`
    width: 80%;
    padding: ${theme.spacings.xsmall};
    text-align: center;
    background-color: ${theme.colors.primary};
    border-radius: 20px;
    color: ${theme.colors.background};
    margin: ${theme.spacings.xsmall} auto;

    li {
      list-style: none;
    }
  `}
`;

export const NoPlaylists = styled.div`
  ${({ theme }) => css`
    font-family: ${theme.font.family.poppins};
    padding: ${theme.spacings.small};
    color: ${theme.colors.background};
    background-color: ${theme.colors.secondary};
    margin: ${theme.spacings.medium} 0;
  `}
`