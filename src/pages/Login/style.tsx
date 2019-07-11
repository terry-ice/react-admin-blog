import styled, { css } from "styled-components";
import loginBg from "../../assets/img/login.png";

const margin = () => css`
  padding: 0;
  margin: 0;
`;

const btn = (light: string, dark: string) => css`
  white-space: nowrap;
  display: inline-block;
  font-size: 13px;
  color: white;
  &:visited {
    color: white;
  }
  background-image: linear-gradient(${light}, ${dark});
  border: 1px solid ${dark};
  &:hover {
    background-image: linear-gradient(${light}, ${dark});
    &[disabled] {
      background-image: linear-gradient(${light}, ${dark});
    }
  }
  &:visited {
    color: black;
  }
  &[disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const btnDefault = css`
  ${btn("#ffffff", "#d5d5d5")} color: #fff;
`;

const btnPrimary = btn("#2E5BFF", "#2E5BFF");

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

    label {
      display: flex;
      flex-direction: column;
      color: #b0bac9;
      font-size: 13px;
      margin-top: 20px;
      input {
        margin-top: 5px;
        width: 320px;
        height: 40px;
        background: rgba(224, 231, 255, 0.2);
        border-radius: 5px;
        border: 1px solid rgba(224, 231, 255, 1);
      }
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
