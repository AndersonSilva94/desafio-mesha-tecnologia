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
