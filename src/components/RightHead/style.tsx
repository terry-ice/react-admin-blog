import styled, { css } from "styled-components";

const Full = () => css`
  flex: 1;
`;

export default styled.div`
  display: flex;
  flex-direction: column;

  .header {
    display: flex;
    flex-direction: row;
    background: none;

    h3 {
      font-size: 22px;
      color: #2e384d;
      ${Full};
    }

    .addBtn {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      ${Full};
    }
  }

  .features {
    display: flex;
    flex-direction: row;
    .btn-list {
      display: flex;
      flex-direction: row;

      .btn-group {
        padding-right: 20px;
      }
    }

    .features-right {
      display: flex;
      flex-direction: row;
      margin-left: auto;
      .btn-group {
        display: flex;
        flex-direction: row;
        padding-right: 20px;
      }
      .features-search {
        margin-left: auto;
      }
    }
  }
`;
