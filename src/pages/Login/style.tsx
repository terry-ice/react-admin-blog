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
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;
    height: 368px;

    label {
      display: flex;
      flex-direction: column;
    }
  }

  .right {
    display: flex;
    flex: 1;
    background: url(${loginBg}) no-repeat bottom;
    background-size: cover;
  }
`;
