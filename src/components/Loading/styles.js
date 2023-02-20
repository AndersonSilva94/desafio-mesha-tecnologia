import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    @keyframes spinner {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }

    margin: ${theme.spacings.large} 0;
  `}
`;

export const Loader = styled.div`
  ${() => css `
    width: 50px;
    height: 50px;
    border: 10px solid #f3f3f3; /* Light grey */
    border-top: 10px solid #383636; /* Black */
    border-radius: 50%;
    animation: spinner 1.5s linear infinite;
  `}
`