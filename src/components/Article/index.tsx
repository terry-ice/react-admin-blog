import { Table } from "antd";
import React from "react";
import './index.scss';

interface ColumnsType {
  key: number;
  name: string;
  age: number;
  address: string;
}
const columns = [
  {
    title: "标题",
    dataIndex: "name"
  },
  {
    title: "分类",
    dataIndex: "age"
  },
  {
    title: "标签",
    dataIndex: "address"
  },
  {
    title: "日期",
    dataIndex: "address"
  },
  {
    title: "状态",
    dataIndex: "address"
  }
];

const data: ColumnsType[] = [];
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    age: 32,
    address: `London, Park Lane no. ${i}`
  });
}

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
      <Table className="articleList" rowSelection={rowSelection} columns={columns} dataSource={data} />
    );
  }
}
export default List;
