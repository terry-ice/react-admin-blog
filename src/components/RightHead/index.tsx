import { Input } from "antd";
import React from "react";
import styles from './index.module.scss';

const { Search } = Input;

export default () => {
  return (
    <div className={styles.header}>
       <h3>
        Vehicles Dashboard <span>100 条数据</span>
      </h3>
      <Search
        placeholder="input search text"
        // tslint:disable-next-line:no-console
        onSearch={value => console.log(value)}
        style={{ width: 200 }}
      />
    </div>
  );
};
