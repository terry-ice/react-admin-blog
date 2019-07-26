import { Divider, Table } from "antd";
import React from "react";
import ArticleList from "./style";

interface ColumnsType {
  key: number;
  name: string;
  age: number;
  address: string;
  addressc: string;
}
const columns = [
  {
    title: "名称",
    dataIndex: "name"
  },
  {
    title: "描述",
    dataIndex: "age"
  },
  {
    title: "别名",
    dataIndex: "address"
  },
  {
    title: "icon",
    dataIndex: "addressc"
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

const data: ColumnsType[] = [];
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    age: 32,
    address: `London, ${i}`,
    addressc: `London, ${i}`
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
      <ArticleList>
        <Table
          className="articleList"
          rowSelection={rowSelection}
          columns={columns}
          dataSource={data}
        />
      </ArticleList>
    );
  }
}
export default List;
