import styled, { css } from 'styled-components';

export const Tbody = styled.tbody`
  ${() => css``}
`;

export const Tr = styled.tr`
  ${() => css``}
`

export const Td = styled.td`
  ${({ theme }) => css`
    padding-top: ${theme.spacings.xsmall};

  > img {
    width: 20%;
  }
  `}
`;
