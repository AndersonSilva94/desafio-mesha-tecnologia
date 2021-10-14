import styled, { css } from 'styled-components';

export const Title = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.black};
  `}
`;

export const Button = styled.button`
  ${({ theme }) => css`
    padding: ${theme.spacings.small};
    border: 1px solid ${theme.colors.background};
    border-radius: 5px;
    color: ${theme.colors.background};
    background-color: ${theme.colors.secondary};
    cursor: pointer;
    margin-top: ${theme.spacings.small};

    :hover {
      background-color: ${theme.colors.background};
      border: 1px solid ${theme.colors.secondary};
      color: ${theme.colors.secondary};
    }
  `}
`;