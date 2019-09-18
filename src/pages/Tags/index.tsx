import { StyleBtn, StyleLabel } from '@/assets/style/common';
import useFrom from '@/components/UseFrom';
import LabelContainer from '@/graphql/label';
import { Input, message } from 'antd';
import React from 'react';
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
                <form
                  method="post"
                  onSubmit={async (e: React.FormEvent<HTMLFormElement>) => {
                    e.preventDefault();
                    addLabel
                      .mutation({
                        variables: { ...values }
                      })
                      .then((res: any) => {
                        message.success('添加成功');
                      });
                  }}
                >
                  <StyleLabel width="200px">
                    <label htmlFor="title">
                      名称：
                      <input
                        type="text"
                        name="name"
                        value={values.name}
                        onChange={handelChange}
                        placeholder="title"
                      />
                    </label>
                  </StyleLabel>
                  <StyleLabel width="200px">
                    <label htmlFor="title">
                      别名：
                      <input
                        type="text"
                        name="slug"
                        value={values.slug}
                        onChange={handelChange}
                        placeholder="title"
                      />
                    </label>
                  </StyleLabel>
                  <StyleLabel width="200px">
                    <label htmlFor="title">
                      icon:
                      <input type="text" name="title" placeholder="title" />
                    </label>
                  </StyleLabel>
                  <StyleLabel width="200px">
                    <label htmlFor="title">
                      描述:
                      <TextArea
                        value={values.description}
                        name="description"
                        onChange={handelChange}
                        placeholder="title"
                      />
                    </label>
                  </StyleLabel>
                  <StyleBtn width="200px" height="35px">
                    <button type="submit">发布</button>
                  </StyleBtn>
                </form>
              );
            }}
          </LabelContainer>
        </div>
      </div>
    </Style>
  );
};
