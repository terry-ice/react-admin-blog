import { margin } from "@/assets/style/common";
import styled from "styled-components";
export default styled.div`
  /* display: flex;
  flex-direction: column;
  height: 100vh;
  clear: both; */
  margin-right: 350px;
  .article-content {
    background: #fff;
    padding-left: 32px;
    padding-top: 20px;
    height: auto;
    clear: both;
  }
  .article-tag {
    margin-top: 20px;
  }

  .post-body-content {
    width: 100%;
    min-width: 463px;
    float: left;
    position: relative;
  }
  .postbox-container-title {
    font-size: 13px;
    color: #8798ad;
    ${margin};
  }
  .postbox-container {
    float: right;
    margin-right: -280px;
    width: 250px;
    .post-image {
      padding: 20px;
      margin-bottom: 20px;
      background: #ffffff;
    }
    .postbox-container-submit {
      background: #ffffff;
      padding: 20px;
      clear: both;
    }
  }
`;
