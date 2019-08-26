import { StyleBtn, StyleLabel } from "@/assets/style/common";
import useFrom from "@/components/UseFrom";
import { Input } from "antd";
import gql from "graphql-tag";
import React from "react";
import { Mutation, OperationVariables } from "react-apollo";
import List, { GET_CATEGORY_QUERY } from "./List";
const { TextArea } = Input;
import Style from "./style";

const ADDCATEGORY_MUTATION = gql`
  mutation ADDCATEGORY_MUTATION(
    $name: String!
    $slug: String!
    $description: String!
  ) {
    createCategory(name: $name, slug: $slug, description: $description) {
      id
      name
    }
  }
`;

interface Data {
  category: { name: string; slug: string; description: string };
}

export default () => {
  const [values, handelChange] = useFrom({
    name: "",
    slug: "",
    description: ""
  });
  return (
    <Style>
      <div className="post-body-content">
        <List />
      </div>
      <div className="postbox-container">
        <div className="postbox-container-submit">
          <div className="postbox-container-title">添加分类</div>
          <Mutation<Data, OperationVariables>
            mutation={ADDCATEGORY_MUTATION}
            variables={{ ...values }}
            refetchQueries={[{ query: GET_CATEGORY_QUERY }]}
          >
            {addCategory => {
              return (
                <form
                  method="post"
                  onSubmit={async (e: any) => {
                    e.preventDefault();
                    addCategory().then((res: any) => {
                      console.log(res, "res");
                    });
                  }}
                >
                  <StyleLabel width="200px">
                    <label htmlFor="title">
                      名称：
                      <input
                        type="text"
                        value={values.name}
                        name="name"
                        onChange={handelChange}
                        placeholder="分类名称"
                      />
                    </label>
                  </StyleLabel>
                  <StyleLabel width="200px">
                    <label htmlFor="title">
                      别名：
                      <input
                        type="text"
                        value={values.slug}
                        name="slug"
                        onChange={handelChange}
                        placeholder="分类别名"
                      />
                    </label>
                  </StyleLabel>
                  <StyleLabel width="200px">
                    <label htmlFor="title">
                      描述:
                      <TextArea
                        placeholder="分类介绍"
                        value={values.description}
                        name="description"
                        autosize={{ minRows: 4, maxRows: 6 }}
                        onChange={handelChange}
                      />
                    </label>
                  </StyleLabel>
                  <StyleBtn width="200px" height="35px">
                    <button type="submit">发布</button>
                  </StyleBtn>
                </form>
              );
            }}
          </Mutation>
        </div>
      </div>
    </Style>
  );
};
