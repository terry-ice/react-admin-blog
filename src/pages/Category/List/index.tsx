import DelBtn from "@/components/DelBtn";
import { fetchCategorySuccess } from "@/redux/article/actions";
import { Divider, Table } from "antd";
import gql from "graphql-tag";
// import { IDispatchable } from "models";
import React, { useState } from "react";
import { Query } from "react-apollo";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose } from "recompose";
import ArticleList from "./style";

const GET_CATEGORY_QUERY = gql`
  query GET_CATEGORY_QUERY {
    categories {
      key: id
      id
      name
      slug
      description
    }
  }
`;

interface CategoryList {
  categories: Category[];
}
const List = ({ history, dispatch }: any) => {
  const [list] = useState<Category[]>([]);
  const [selectKey, setSelectKey] = useState<string[]>([]);
  const onSelectChange = (selectedRowKeys: string[]) => {
    setSelectKey(selectedRowKeys);
  };

  const rowSelection = {
    selectKey,
    onChange: onSelectChange,
    hideDefaultSelections: true
  };
  const columns = [
    {
      title: "名称",
      dataIndex: "name"
    },
    {
      title: "描述",
      dataIndex: "description"
    },
    {
      title: "别名",
      dataIndex: "slug"
    },
    {
      title: "Action",
      key: "action",
      render: (text: any, record: any) => {
        return (
          <>
            <span>
              <a
                onClick={() => {
                  // dispatch({ type: "category_info", data: record });
                  history.push(`/category/update`);
                }}
              >
                编辑
              </a>
              <Divider type="vertical" />
              <DelBtn id={record.id}>删除</DelBtn>
            </span>
          </>
        );
      }
    }
  ];
  return (
    <ArticleList>
      <Query<CategoryList, {}> query={GET_CATEGORY_QUERY}>
        {({ loading, data }) => {
          console.log(loading, "loading");
          if (data && data.categories) {
            dispatch(fetchCategorySuccess(data.categories));
          }
          return (
            <Table
              loading={loading}
              className="articleList"
              rowSelection={rowSelection}
              columns={columns}
              dataSource={list}
            />
          );
        }}
      </Query>
    </ArticleList>
  );
};
export default compose(connect())(withRouter(List));
export { GET_CATEGORY_QUERY };
