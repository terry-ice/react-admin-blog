import { StyleLaber, StyleTitle } from "@/assets/style/commom";
import React from "react";
import Article from "./style";

export default () => {
  return (
    <Article>
      <StyleTitle>
        <h3>添加文章</h3>
      </StyleTitle>
      <div className="article-content">
        <StyleLaber width="472px">
          <label htmlFor="title">
            文章标题
            <input type="text" name="title" placeholder="title" />
          </label>
        </StyleLaber>
        <StyleLaber width="472px" height="65px">
          <label htmlFor="description">
            文章描述
            <textarea name="description" placeholder="文章描述" />
          </label>
        </StyleLaber>
        <StyleLaber width="472px">
          <label htmlFor="keywords">
            关键词
            <input name="keywords" placeholder="多个关键词以 ' , ' 隔开" />
          </label>
        </StyleLaber>
        <StyleLaber width="272px">
          <label htmlFor="keywords">
            标签
            <input name="keywords" placeholder="多个关键词以 ' , ' 隔开" />
          </label>
        </StyleLaber>
        <StyleLaber width="272px">
          <label htmlFor="keywords">
            内容
            <input name="keywords" placeholder="多个关键词以 ' , ' 隔开" />
          </label>
        </StyleLaber>
      </div>
    </Article>
  );
};
