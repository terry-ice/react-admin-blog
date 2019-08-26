import { StyleBtn, StyleLabel } from "@/assets/style/common";
import Tags from "@/components/Tags";
import { Icon, Input, message, Select, Upload } from "antd";
import React, { useEffect, useState } from "react";
import MarkEdit from "../AddArticle";
const { TextArea } = Input;
const { Option } = Select;
import Article from "./style";
export default () => {
  const [tagList, setTag] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [imageUrl, setImageUrl] = useState<string>("");

  useEffect(() => {
    setTag(["Movies", "Books", "Music", "Sports"]);
  }, [setTag]);

  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  function getBase64(img: any, callback: any) {
    const reader = new FileReader();
    reader.addEventListener("load", () => callback(reader.result));
    reader.readAsDataURL(img);
  }

  function beforeUpload(file: any) {
    const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
    if (!isJpgOrPng) {
      message.error("You can only upload JPG/PNG file!");
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error("Image must smaller than 2MB!");
    }
    return isJpgOrPng && isLt2M;
  }

  const uploadButton = (
    <div>
      <Icon type={loading ? "loading" : "plus"} />
      <div className="ant-upload-text">Upload</div>
    </div>
  );
  const handleImgChange = (info: any) => {
    if (info.file.status === "uploading") {
      setLoading(true);
      return;
    }
    if (info.file.status === "done") {
      // tslint:disable-next-line:no-shadowed-variable
      getBase64(info.file.originFileObj, (imageUrl: any) => {
        setLoading(false);
        setImageUrl(imageUrl);
      });
    }
  };
  return (
    <Article>
      <div className="post-body-content">
        <div className="article-content">
          <StyleLabel width="472px">
            <label htmlFor="title">
              文章标题
              <input type="text" name="title" placeholder="title" />
            </label>
          </StyleLabel>
          <StyleLabel width="472px" height="65px">
            <label htmlFor="description">
              文章描述
              <TextArea
                placeholder="文章描述"
                autosize={{ minRows: 2, maxRows: 6 }}
              />
            </label>
          </StyleLabel>
          <StyleLabel width="472px">
            <label htmlFor="keywords">
              关键词
              <input name="keywords" placeholder="多个关键词以 ' , ' 隔开" />
            </label>
          </StyleLabel>
          <StyleLabel width="272px">
            <label htmlFor="keywords">
              标签
              <div className="article-tag">
                {tagList.map(tag => (
                  <Tags key={tag}>{tag}</Tags>
                ))}
              </div>
            </label>
          </StyleLabel>
          <StyleLabel width="272px">
            <label htmlFor="keywords">
              内容
              <MarkEdit>
                <TextArea id="markDown" name="body" placeholder="文章内容" />
              </MarkEdit>
            </label>
          </StyleLabel>
        </div>
      </div>

      <div className="postbox-container">
        <div className="post-image">
          <div className="postbox-container-title">缩略图</div>
          <Upload
            name="avatar"
            listType="picture-card"
            className="avatar-uploader"
            showUploadList={false}
            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            beforeUpload={beforeUpload}
            onChange={handleImgChange}
          >
            {imageUrl ? (
              <img src={imageUrl} alt="avatar" style={{ width: "100%" }} />
            ) : (
              uploadButton
            )}
          </Upload>
        </div>
        <div className="postbox-container-submit">
          <div className="postbox-container-title">发布</div>
          <StyleLabel width="200px">
            <label htmlFor="title">
              状态：
              <input type="text" name="title" placeholder="title" />
            </label>
          </StyleLabel>
          <StyleLabel width="200px">
            <label htmlFor="title">
              公开度：
              <Select defaultValue="lucy" onChange={handleChange}>
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="disabled" disabled>
                  Disabled
                </Option>
                <Option value="Yiminghe">yiminghe</Option>
              </Select>
            </label>
          </StyleLabel>
          <StyleLabel width="200px">
            <label htmlFor="title">
              分类:
              <Select
                defaultValue="lucy"
                style={{ width: 120 }}
                onChange={handleChange}
              >
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="disabled" disabled>
                  Disabled Disabled
                </Option>
                <Option value="Yiminghe">yiminghe</Option>
              </Select>
            </label>
          </StyleLabel>
          <StyleLabel width="200px">
            <label htmlFor="title">
              标签：
              <input type="text" name="title" placeholder="title" />
            </label>
          </StyleLabel>
          <StyleBtn width="200px" height="35px">
            <button type="submit">发布</button>
          </StyleBtn>
        </div>
      </div>
    </Article>
  );
};
