import styled, { css } from 'styled-components';

export const Tbody = styled.tbody`
  ${() => css``}
`;

export const Tr = styled.tr`
  ${() => css``}
`

export const Td = styled.td`
  ${({ theme }) => css`
    padding: ${theme.spacings.xsmall};

  `}
`;

export const ButtonDelete = styled.button`
  ${({ theme }) => css`
    font-family: ${theme.font.family.poppins};
    padding: ${theme.spacings.small};
    border: none;
    border-radius: 5px;
    color: ${theme.colors.background};
    background-color: ${theme.colors.secondary};
    cursor: pointer;

    :hover {
      background-color: ${theme.colors.background};
      color: ${theme.colors.secondary};
    }
  `}
`;
