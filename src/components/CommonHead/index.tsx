import { Button, Input } from "antd";
import React from "react";
import Header from "./style";

const { Search } = Input;
const ButtonGroup = Button.Group;

export default () => {
  return (
    <Header>
      <div className="header">
        <h3>评论列表</h3>
      </div>
      <div className="features">
        <div className="btn-list">
          <ButtonGroup className="btn-group">
            <Button type="primary">全部</Button>
            <Button>待审核</Button>
            <Button>已审核</Button>
            <Button>垃圾</Button>
            <Button>回收站</Button>
          </ButtonGroup>
          <ButtonGroup className="btn-group">
            <Button>刷新</Button>
            <Button>清空</Button>
            <Button>批量操作</Button>
          </ButtonGroup>
        </div>
        <div className="features-right">
          <div className="features-search">
            <Search placeholder="文章标题、描述" onSearch={value => value} />
          </div>
        </div>
      </div>
    </Header>
  );
};
