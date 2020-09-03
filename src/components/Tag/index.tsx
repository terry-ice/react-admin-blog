import LabelContainer from '@/graphql/label';
import { Divider, Table } from 'antd';
import React from 'react';
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

class List extends React.Component {
  state = {
    selectedRowKeys: [] // Check here to configure the default column
  };

  onSelectChange = (selectedRowKeys: string[]) => {
    this.setState({ selectedRowKeys });
  };

  render() {
    const { selectedRowKeys } = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
      hideDefaultSelections: true
    };
    return (
      <ArticleList>
        <LabelContainer>
          {({ getLabel: { loading, data } }: any) => {
            const dataList = data && data.labels ? data.labels : [];
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
  }
}
export default List;
