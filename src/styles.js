import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 10px;
  background-color: ${(props) => props.theme.colors.background};
`;

export const Toggle = styled.div`
  display: flex;
  flex-direction: row-reverse;
`;