import { btnDefault, btnPrimary, margin } from "@/assets/style/common";
import styled from "styled-components";
import loginBg from "../../assets/img/login.png";

export default styled.div`
  display: flex;
  justify-content: space-around;
  flex-flow: row wrap;
  height: 100vh;
  flex: 1;

  form {
    display: flex;
    flex: 1;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;

    h2 {
      color: #2e384d;
      font-size: 34px;
      ${margin};
    }

    h4 {
      color: #8798ad;
      font-size: 15px;
      ${margin};
      margin-bottom: 24px;
    }

    button {
      margin-top: 26px;
      width: 320px;
      height: 50px;
      border-radius: 4px;
      &[type="submit"] {
        ${btnPrimary};
      }
      &[type="button"] {
        ${btnDefault};
      }
    }

    .error {
      padding-top: 20px;
      font-size: 12px;
      color: red;
    }
  }

  .right {
    display: flex;
    flex: 1;
    background: url(${loginBg}) no-repeat bottom;
    background-size: cover;
  }
`;
