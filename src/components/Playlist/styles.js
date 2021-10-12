import styled, { css } from 'styled-components';

export const Container = styled.section`
  ${() => css`
    display: flex;
    flex-direction: column;
    width: 90%;
    margin: 0 auto;
  `}
`;

export const Title = styled.h1`
`;

export const Button = styled.button`
  ${() => css`
    padding: 15px 10px;
    border-radius: 5px;
    width: 50%;
    margin: 0 auto;
  `}
`;