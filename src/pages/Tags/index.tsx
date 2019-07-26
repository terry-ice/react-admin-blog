import { StyleBtn, StyleLaber } from "@/assets/style/common";
import Tag from "@/components/Tag";
import { Input } from "antd";
import React from "react";
const { TextArea } = Input;
import Style from "./style";

export default () => {
  return (
    <Style>
      <div className="post-body-content">
        <Tag />
      </div>
      <div className="postbox-container">
        <div className="postbox-container-submit">
          <div className="postbox-container-title">发布</div>
          <StyleLaber width="200px">
            <label htmlFor="title">
              名称：
              <input type="text" name="title" placeholder="title" />
            </label>
          </StyleLaber>
          <StyleLaber width="200px">
            <label htmlFor="title">
              别名：
              <input type="text" name="title" placeholder="title" />
            </label>
          </StyleLaber>
          <StyleLaber width="200px">
            <label htmlFor="title">
              icon:
              <input type="text" name="title" placeholder="title" />
            </label>
          </StyleLaber>
          <StyleLaber width="200px">
            <label htmlFor="title">
              描述:
              <TextArea placeholder="title" />
            </label>
          </StyleLaber>
          <StyleBtn width="200px" height="35px">
            <button type="submit">发布</button>
          </StyleBtn>
        </div>
      </div>
    </Style>
  );
};
