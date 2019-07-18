import { StyleLaber, StyleTitle } from "@/assets/style/commom";
import Tags from "@/components/Tags";
import { Input } from "antd";
import React, { useEffect, useState } from "react";
import MarkEdit from "../AddArticle";
const { TextArea } = Input;
import Article from "./style";
export default () => {
  const [tagList, setTag] = useState<string[]>([]);

  useEffect(() => {
    setTag(["Movies", "Books", "Music", "Sports"]);
  }, [setTag]);

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
            <TextArea
              placeholder="文章描述"
              autosize={{ minRows: 2, maxRows: 6 }}
            />
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
            <div className="article-tag">
              {tagList.map(tag => (
                <Tags>{tag}</Tags>
              ))}
            </div>
          </label>
        </StyleLaber>
        <StyleLaber width="272px">
          <label htmlFor="keywords">
            内容
            <MarkEdit>
              <TextArea id="markDown" name="body" placeholder="文章内容" />
            </MarkEdit>
          </label>
        </StyleLaber>
      </div>
    </Article>
  );
};
