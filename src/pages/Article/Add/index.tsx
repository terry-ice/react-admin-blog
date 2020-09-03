import { StyleBtn, StyleLabel } from '@/assets/style/common';
import useFrom from '@/components/UseFrom';
import ArticleContainer from '@/graphql/article';
import { IStoreState } from '@/redux/storeState';
import { Icon, Input, message, Select, Upload } from 'antd';
import * as React from 'react';
import { Field, Form } from 'react-final-form';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import MarkEdit from '../../AddArticle';
const { TextArea } = Input;
const { Option } = Select;
import { withRouter } from 'react-router-dom';
import Article from './style';

const tranStatus = {
  0: '草稿',
  1: '发布'
};
const tranPublic = {
  0: '私密',
  1: '公开'
};
interface Props {
  readonly category: Category[];
  readonly article: Article;
  readonly label: Label[];
  readonly match: any;
  readonly history: any;
}

const AddArticle: React.SFC<Props> = ({ category, match, article, label, history }) => {
  const { id } = match.params;
  const initDetail = {
    title: '',
    description: '',
    keywords: '',
    body: '',
    public: '1',
    status: '1',
    category: '',
    label: ''
  };
  const dataDetail = id ? article : initDetail;
  const [loading, setLoading] = React.useState<boolean>(false);
  const [imageUrl, setImageUrl] = React.useState<string>('');
  const [data, handelChange] = useFrom(dataDetail);
  const required = (value: string) => (value ? undefined : 'Required');



  function getBase64(img: any, callback: any) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
  }

  function beforeUpload(file: any) {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
      message.error('You can only upload JPG/PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error('Image must smaller than 2MB!');
    }
    return isJpgOrPng && isLt2M;
  }

  const uploadButton = (
    <div>
      <Icon type={loading ? 'loading' : 'plus'} />
      <div className="ant-upload-text">Upload</div>
    </div>
  );
  const handleImgChange = (info: any) => {
    if (info.file.status === 'uploading') {
      setLoading(true);
      return;
    }
    if (info.file.status === 'done') {
      // tslint:disable-next-line:no-shadowed-variable
      getBase64(info.file.originFileObj, (imageUrl: any) => {
        setLoading(false);
        setImageUrl(imageUrl);
      });
    }
  };
  return (
    <Article>
      <ArticleContainer>
        {({ addArticle }: any) => {
          return (
            <Form
              onSubmit={async value => {
                addArticle
                  .mutation({ variables: value })
                  .then((res: any) => {
                    message.success("操作成功");
                    setTimeout(() => {
                      history.push(`/article/list`);
                    }, 1000);
                  })
                  .catch((err: any) => {
                    console.log(err);
                  });
              }}
              initialValues={{ ...data }}
            >
              {({ handleSubmit, submitting, pristine, values }) => (
                <form onSubmit={handleSubmit}>
                  <div className="post-body-content">
                    <div className="article-content">
                      <StyleLabel width="472px">
                        <Field name="title" validate={required}>
                          {({ input, meta }: any) => (
                            <label htmlFor="email">
                              文章标题
                              <input
                                {...input}
                                type="text"
                                placeholder="请输入标题"
                              />
                              {meta.error && meta.touched && (
                                <span className="error">{meta.error}</span>
                              )}
                            </label>
                          )}
                        </Field>
                      </StyleLabel>
                      <StyleLabel width="472px" height="65px">
                        <Field name="description">
                          {({ input, meta }: any) => (
                            <label htmlFor="description">
                              文章描述
                              <TextArea
                                {...input}
                                autosize={{ minRows: 2, maxRows: 6 }}
                                placeholder="文章描述"
                                value={values.description}
                              />
                              {meta.error && meta.touched && (
                                <span className="error">{meta.error}</span>
                              )}
                            </label>
                          )}
                        </Field>
                      </StyleLabel>
                      <StyleLabel width="472px">
                        <Field name="keywords">
                          {({ input, meta }: any) => (
                            <label htmlFor="keywords">
                              关键词
                              <input
                                {...input}
                                placeholder="多个关键词以 ' , ' 隔开"
                              />
                              {meta.error && meta.touched && (
                                <span className="error">{meta.error}</span>
                              )}
                            </label>
                          )}
                        </Field>
                      </StyleLabel>
                      <StyleLabel width="272px">
                        <Field name="body">
                          {({ input, meta }: any) => {
                            return (
                              <label htmlFor="body">
                                <MarkEdit {...input}>
                                  <TextArea
                                    id="markDown"
                                    onChange={handelChange}
                                    placeholder="文章内容"
                                    autosize={{ minRows: 2, maxRows: 6 }}
                                  />
                                </MarkEdit>
                                {meta.error && meta.touched && (
                                  <span className="error">{meta.error}</span>
                                )}
                              </label>
                            );
                          }}
                        </Field>
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
                          <img
                            src={imageUrl}
                            alt="avatar"
                            style={{ width: '100%' }}
                          />
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
                          <Field name="status" component="select">
                            {({ input }: any) => {
                              return (
                                <Select
                                  defaultValue={tranStatus[values.status]}
                                  style={{ width: 200 }}
                                  {...input}
                                  value={tranStatus[values.status]}
                                >
                                  <Option value="0">草稿</Option>
                                  <Option value="1">发布</Option>
                                </Select>
                              );
                            }}
                          </Field>
                        </label>
                      </StyleLabel>
                      <StyleLabel width="200px">
                        <label htmlFor="title">
                          公开度：
                          <Field name="public" component="select">
                            {({ input }: any) => {
                              return (
                                <Select
                                  defaultValue={tranPublic[values.public]}
                                  style={{ width: 200 }}
                                  {...input}
                                  value={tranPublic[values.public]}
                                >
                                  <Option value="0">加密</Option>
                                  <Option value="1">公开</Option>
                                </Select>
                              );
                            }}
                          </Field>
                        </label>
                      </StyleLabel>
                      <StyleLabel width="200px">
                        <label htmlFor="title">
                          分类:
                          <Field name="category" component="select">
                            {({ input }: any) => {
                              return (
                                <Select
                                  defaultValue={values.category}
                                  style={{ width: 200 }}
                                  {...input}
                                  value={values.category}
                                >
                                  {category &&
                                    category.map(item => (
                                      <Option value={item.id} key={item.name}>
                                        {item.name}
                                      </Option>
                                    ))}
                                </Select>
                              );
                            }}
                          </Field>
                        </label>
                      </StyleLabel>
                      <StyleLabel width="200px">
                        <label htmlFor="label">
                          标签：
                          <Field name="label" component="select">
                            {({ input }: any) => {
                              return (
                                <Select
                                  defaultValue={values.label}
                                  style={{ width: 200 }}
                                  {...input}
                                  value={values.label}
                                >
                                  {label &&
                                    label.map(item => (
                                      <Option value={item.id} key={item.name}>
                                        {item.name}
                                      </Option>
                                    ))}
                                </Select>
                              );
                            }}
                          </Field>
                        </label>
                      </StyleLabel>
                      <StyleBtn width="200px" height="35px">
                        <button type="submit" disabled={submitting || pristine}>
                          发布
                        </button>
                      </StyleBtn>
                    </div>
                  </div>
                </form>
              )}
            </Form>
          );
        }}
      </ArticleContainer>
    </Article>
  );
};

export default compose(
  connect(({ article }: IStoreState) => ({
    category: article.category,
    article: article.articleInfo,
    label: article.label
  })),
  withRouter
)(AddArticle);
