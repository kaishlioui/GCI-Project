import styled from "styled-components";

export const StyledOptionList = styled.div`
  .option-list {
    &__items {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      gap: 32px;
    }

    &__title {
      margin-bottom: 64px;
    }
  }
`;
