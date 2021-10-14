import styled, { css } from 'styled-components';

export const DivText = styled.div`
  ${() => css`
    display: flex;
    justify-content: center;
  `}
`;

export const Text = styled.h1`
  ${() => css`
    font-size: 30px;
  `}
`;
