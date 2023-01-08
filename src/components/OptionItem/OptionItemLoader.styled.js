import styled from "styled-components";

export const StyledOptionItemLoader = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 16px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 0px 20px rgba(0, 0, 0, 0.1);

  @media (min-width: 500px) {
    width: calc(50% - 32px);
  }

  @media (min-width: 768px) {
    width: calc(33% - 32px);
  }
`;
