import styled from "styled-components";

export const StyledOptionItem = styled.article`
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

  .option-item {
    &__img {
      width: 100%;
      height: 200px;
      object-fit: cover;
      border-radius: 4px;
    }

    &__name {
      font-size: 16px;
      font-weight: 400;
    }

    &__price {
      font-size: 24px;
      font-weight: 600;
      margin-top: auto;
      margin-bottom: 16px;
    }

    &__action {
      display: block;
      width: 100%;
      padding: 16px 8px;
      border: none;
      border-radius: 4px;
      background: #29d25a;
      font-weight: 600;
      cursor: pointer;
      transition: all .3s ease;

      &:hover {
        background: #1ec54e;
      }

      &:disabled {
        background: #dbdbdb;
        cursor: default;
      }
    }
  }
`;
