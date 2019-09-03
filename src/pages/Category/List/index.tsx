import DelBtn from "@/components/DelBtn";
import { fetchCategorySuccess, setCategoryInfo } from "@/redux/article/actions";
import { selectCategory } from "@/redux/article/selectors";
import { Divider, Table } from "antd";
import gql from "graphql-tag";
import React, { useState } from "react";
import { Query } from "react-apollo";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose } from "recompose";
import { createSelector } from "reselect";
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
interface Props {
  readonly category: Category[];
  readonly history: any;
  readonly dispatch: any;
}

const List: React.SFC<Props> = ({ category, history, dispatch }) => {
  const [list] = useState<Category[]>(category);
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
                  dispatch(setCategoryInfo(record));
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
const mapStateToProps = createSelector(
  selectCategory(),
  category => ({ category })
);

const withConnect = connect(mapStateToProps);
export default compose(
  withConnect,
  withRouter
)(List);
export { GET_CATEGORY_QUERY };
