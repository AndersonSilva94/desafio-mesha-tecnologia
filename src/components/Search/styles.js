import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${() => css`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 70%;
    margin: 20px auto;
  `}
`;

export const InputSearch = styled.input`
  ${() => css`
    padding: 15px 10px;
    border-radius: 5px;
    width: 90%;
  `}
`;

export const ButtonSearch = styled.button`
  ${() => css`
    padding: 15px 10px;
    border-radius: 5px;
  `}
`;