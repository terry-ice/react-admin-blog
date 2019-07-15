import { Button, Input } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import Header from "./style";

const { Search } = Input;

export default () => {
  return (
    <Header>
      <div className="header">
        <h3>文章列表</h3>
        <div className="addBtn">
          <Button icon="plus" type="primary">
            ADD
          </Button>
          <Link to="/admin">admin</Link>
        </div>
      </div>
      <div className="features">
        <Search placeholder="input search text" onSearch={value => value} />
      </div>
    </Header>
  );
};
