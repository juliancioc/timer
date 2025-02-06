import styled from "styled-components";

export const LayoutContainer = styled.div`
  background: ${({ theme }) => theme["gray-800"]};
  max-width: 74rem;
  height: calc(100vh - 10rem);
  margin: 5rem auto;
  padding: 2.5rem;
  border-radius: 8px;
  display: flex;
  flex-direction: column;

  @media (max-width: 1320px) {
    height: calc(100vh - 4rem);
    margin: 2rem auto;
  }
`;
