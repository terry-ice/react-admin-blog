import { StyleBtn, StyleLabel } from "@/assets/style/common";
import useFrom from "@/components/UseFrom";
import { selectCategoryInfo } from "@/redux/article/selectors";
import { Input, message } from "antd";
import gql from "graphql-tag";
import React from "react";
import { Mutation, OperationVariables } from "react-apollo";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose } from "recompose";
import { createSelector } from "reselect";
import { GET_CATEGORY_QUERY } from "../List";

import Article from "./style";
const { TextArea } = Input;

const UPDATE_CATEGORY_MUTATION = gql`
  mutation UPDATE_CATEGORY_MUTATION(
    $id: ID!
    $name: String!
    $slug: String!
    $description: String!
  ) {
    updateCategory(
      id: $id
      name: $name
      slug: $slug
      description: $description
    ) {
      id
      name
    }
  }
`;
interface Data {
  category: Category;
}

const Update = ({ history, categoryInfo }: any) => {
  const updateItem: any = categoryInfo;
  const [values, handelChange] = useFrom({
    id: updateItem.id,
    name: updateItem.name,
    slug: updateItem.slug,
    description: updateItem.description
  });
  return (
    <Article>
      <div className="post-body-content">
        <div className="article-content">
          <Mutation<Data, OperationVariables>
            mutation={UPDATE_CATEGORY_MUTATION}
            variables={{ ...values }}
            refetchQueries={[{ query: GET_CATEGORY_QUERY }]}
          >
            {updateCategory => {
              return (
                <form
                  method="post"
                  onSubmit={async (e: React.FormEvent<HTMLFormElement>) => {
                    e.preventDefault();
                    updateCategory().then((res: any) => {
                      history.push("/category");
                      message.success("编辑成功");
                    });
                  }}
                >
                  <StyleLabel width="80%">
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
                  <StyleLabel width="80%">
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
                  <StyleLabel width="80%">
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
                  <StyleBtn width="30%" height="35px">
                    <button type="submit">发布</button>
                  </StyleBtn>
                </form>
              );
            }}
          </Mutation>
        </div>
      </div>
    </Article>
  );
};
const mapStateToProps = createSelector(
  selectCategoryInfo(),
  categoryInfo => ({ categoryInfo })
);

const withConnect = connect(mapStateToProps);
export default compose(
  withConnect,
  withRouter
)(Update);
