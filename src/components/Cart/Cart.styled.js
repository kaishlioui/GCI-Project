import styled from "styled-components";

export const StyledCart = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 64px;
  padding-right: 32px;

  .cart {
    &__title {
      font-size: 24px;
    }

    &__total {
      padding: 16px 32px 16px 16px;
      text-align: right;
      font-weight: 600;
    }
  }
`;
