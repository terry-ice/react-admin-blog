import LabelContainer from '@/graphql/label';
import { fetchLabel } from '@/redux/article/actions';
import { Divider, Table } from 'antd';
import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import ArticleList from './style';
const columns = [
  {
    title: '名称',
    dataIndex: 'name'
  },
  {
    title: '描述',
    dataIndex: 'description'
  },
  {
    title: '别名',
    dataIndex: 'slug'
  },
  {
    title: 'Action',
    key: 'action',
    render: (text: any, record: any) => (
      <span>
        <a  >编辑</a>
        <Divider type="vertical" />
        <a  >查看</a>
      </span>
    )
  }
];
interface PropsType {
  dispatch: any;
}
const TagList: React.SFC<PropsType> = ({ dispatch }) => {
  const [selectedRowKeys, setState] = React.useState<string[]>([]);

  const onSelectChange = (keys: string[]) => {
    setState(keys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
    hideDefaultSelections: true
  };

  return (
    <ArticleList>
      <LabelContainer>
        {({ getLabel: { loading, data } }: any) => {
          const dataList = data && data.labels ? data.labels : [];
          dispatch(fetchLabel(dataList));
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
      </LabelContainer>
    </ArticleList>
  );
};

export default compose(connect())(TagList);
