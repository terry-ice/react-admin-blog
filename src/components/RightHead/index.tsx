import { Button, Input } from "antd";
import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose } from "recompose"
import Header from "./style";

const { Search } = Input;
const ButtonGroup = Button.Group;

interface Props {
  readonly history: any;
}

const Head: React.SFC<Props> = ({ history }) => {
  return (
    <Header>
      <div className="header">
        <h3>文章列表</h3>
        <div className="addBtn">
          <Button icon="plus" onClick={() => {
            history.push("/article/add");
          }} type="primary">
            ADD
          </Button>
        </div>
      </div>
      <div className="features">
        <div className="btn-list">
          <ButtonGroup className="btn-group">
            <Button type="primary">全部</Button>
            <Button>已发布</Button>
            <Button>草稿</Button>
            <Button>回收站</Button>
          </ButtonGroup>
          <ButtonGroup className="btn-group">
            <Button>刷新</Button>
            <Button>清空</Button>
            <Button>批量操作</Button>
          </ButtonGroup>
        </div>
        <div className="features-right">
          <ButtonGroup className="btn-group">
            <Button>分类</Button>
            <Button>标签</Button>
            <Button>类型</Button>
          </ButtonGroup>
          <div className="features-search">
            <Search placeholder="文章标题、描述" onSearch={value => value} />
          </div>
        </div>
      </div>
    </Header>
  );
};


export default compose(
  connect(),
  withRouter
)(Head);