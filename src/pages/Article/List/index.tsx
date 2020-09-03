import ArticleContainer from "@/graphql/article";
import { setArticleInfo } from "@/redux/article/actions";
import { Divider, Table } from "antd";
import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose } from "recompose";
import DelBtn from "../DelBtn";
import ArticleList from "./style";

interface Props {
  readonly history: any;
  readonly dispatch: any;
}

const List: React.SFC<Props> = ({ history, dispatch }) => {
  const [rowKeys, setSelectKey] = React.useState<string[]>([]);

  const onSelectChange = (keys: string[]) => {
    setSelectKey(keys);
  };
  const rowSelection = {
    rowKeys,
    onChange: onSelectChange,
    hideDefaultSelections: true
  };
  const columns = [
    {
      title: "标题",
      dataIndex: "title"
    },
    {
      title: "分类",
      dataIndex: "description"
    },
    {
      title: "标签",
      dataIndex: "thumbnail"
    },
    {
      title: "日期",
      dataIndex: "createdAt"
    },
    {
      title: "状态",
      dataIndex: "state"
    },
    {
      title: "Action",
      key: "action",
      render: (text: any, record: any) => (
        <span>
          <a
            onClick={() => {
              dispatch(setArticleInfo(record));
              history.push(`/article/add/${record.id}`);
            }}
          >
            编辑
					</a>
          <Divider type="vertical" />
          <a  >查看</a>
          <Divider type="vertical" />
          <DelBtn id={record.id}>删除</DelBtn>
        </span>
      )
    }
  ];
  return (
    <ArticleList>
      <ArticleContainer>
        {({ article: { loading, data } }: any) => {
          const dataList = data && data.articles ? data.articles : [];
          if (dataList.length) {
            console.log(dataList, "dataList");
            // dispatch(fetchCategorySuccess(dataList));
          }
          return (
            <Table
              loading={loading}
              className="articleList"
              rowSelection={rowSelection}
              columns={columns}
              dataSource={dataList}
            />
          );
        }}
      </ArticleContainer>
    </ArticleList>
  );
};

export default compose(
  connect(),
  withRouter
)(List);
