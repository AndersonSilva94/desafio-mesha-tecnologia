import styled, { css } from 'styled-components';

export const Thead = styled.thead`
  ${() => css``}
`;

export const Tr = styled.tr`
  ${() => css``}
`

export const Th = styled.th`
  ${({ theme }) => css`
    border-bottom: 1px solid ${theme.colors.black};
    padding-bottom: ${theme.spacings.small}
  `}
`;
