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
  ${({ theme }) => css`
    padding: ${theme.spacings.small};
    border: 1px solid ${theme.colors.primary};
    border-radius: 5px;
    width: 85%;
  `}
`;

export const ButtonSearch = styled.button`
  ${({ theme }) => css`
    font-family: ${theme.font.family.poppins};
    padding: ${theme.spacings.small};
    border: 1px solid ${theme.colors.background};
    border-radius: 5px;
    color: ${theme.colors.background};
    background-color: ${theme.colors.primary};
    cursor: pointer;

    :hover {
      background-color: ${theme.colors.background};
      border: 1px solid ${theme.colors.primary};
      color: ${theme.colors.primary};
    }
  `}
`;