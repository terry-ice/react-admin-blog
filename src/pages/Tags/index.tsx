import { StyleBtn, StyleLabel } from '@/assets/style/common';
import useFrom from '@/components/UseFrom';
import LabelContainer from '@/graphql/label';
import { Input, message } from 'antd';
import React from 'react';
import { Field, Form } from 'react-final-form';
import TagList from './List';
const { TextArea } = Input;
import Style from './style';

export default () => {
  const [values, handelChange] = useFrom({
    name: '',
    slug: '',
    description: ''
  });
  return (
    <Style>
      <div className="post-body-content">
        <TagList />
      </div>
      <div className="postbox-container">
        <div className="postbox-container-submit">
          <div className="postbox-container-title">发布</div>
          <LabelContainer>
            {({ addLabel }: any) => {
              return (
                <Form
                  onSubmit={async value => {
                    addLabel
                      .mutation({
                        variables: { ...value }
                      })
                      .then((res: any) => {
                        message.success('添加成功');
                      });
                  }}
                >
                  {({ handleSubmit, submitting, pristine }) => (
                    <form onSubmit={handleSubmit}>
                      <StyleLabel width="200px">
                        <Field name="title">
                          {({ input, meta }: any) => (
                            <label htmlFor="title">
                              名称：
                              <input
                                type="text"
                                {...input}
                                placeholder="标签名称"
                              />
                              {meta.error && meta.touched && (
                                <span className="error">{meta.error}</span>
                              )}
                            </label>
                          )}
                        </Field>
                      </StyleLabel>
                      <StyleLabel width="200px">
                        <label htmlFor="title">
                          别名：
                          <input
                            type="text"
                            name="slug"
                            value={values.slug}
                            onChange={handelChange}
                            placeholder="别名"
                          />
                        </label>
                      </StyleLabel>

                      <StyleLabel width="200px">
                        <label htmlFor="title">
                          描述:
                          <TextArea name="description" placeholder="描述信息" />
                        </label>
                      </StyleLabel>
                      <StyleBtn width="200px" height="35px">
                        <button type="submit" disabled={submitting || pristine}>
                          发布
                        </button>
                      </StyleBtn>
                    </form>
                  )}
                </Form>
              );
            }}
          </LabelContainer>
        </div>
      </div>
    </Style>
  );
};
