import { Divider, Table } from "antd";
import gql from "graphql-tag";
import React, { useState } from "react";
import { Query } from "react-apollo";
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
interface ColumnsType {
  key: number;
  name: string;
  slug: string;
  description: string;
}

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
    render: (text: any, record: any) => (
      <span>
        <a href="javascript:;">编辑</a>
        <Divider type="vertical" />
        <a href="javascript:;">查看</a>
      </span>
    )
  }
];

interface CategoryList {
  categories: ColumnsType[];
}
const List = () => {
  const [list, setList] = useState<ColumnsType[]>([]);
  const [selectKey, setSelectKey] = useState<string[]>([]);
  const onSelectChange = (selectedRowKeys: string[]) => {
    setSelectKey(selectedRowKeys);
  };

  const rowSelection = {
    selectKey,
    onChange: onSelectChange,
    hideDefaultSelections: true
  };

  return (
    <ArticleList>
      <Query<CategoryList, {}> query={GET_CATEGORY_QUERY}>
        {({ loading, data }) => {
          if (data) {
            setList(data.categories);
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
export default List;
export { GET_CATEGORY_QUERY };
