import styled from "styled-components";

export const StyledCartItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  padding-bottom: 16px;
  border-bottom: 1px solid #ddd;

  .cart-item {
    &__img {
      width: 60px;
      height: 60px;
      object-fit: cover;
      border-radius: 4px;
    }

    &__name {
      align-self: flex-start;
      max-width: 400px;
      margin: 4px 0 0 0;
      font-size: 16px;
      font-weight: 400;
    }

    &__price {
      font-size: 16px;
      font-weight: 600;
      margin-left: auto;
    }

    &__action {
      display: flex;
      padding: 8px;
      border: none;
      background: #eee;
      border-radius: 4px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s ease;

      &:hover {
        background: #ddd;
      }
    }
  }
`;
