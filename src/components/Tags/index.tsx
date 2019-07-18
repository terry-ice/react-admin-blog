/*
 * @Author: terry
 * @Date: 2019-07-18 11:28:34
 * @Last Modified by: https://github.com/terry-ice
 * @Last Modified time: 2019-07-18 11:30:03
 */

import { Tag } from "antd";
import React, { useState } from "react";

const { CheckableTag } = Tag;

export default (props: any) => {
  const [state, setState] = useState();
  function handleChange(checked: boolean) {
    setState(checked);
  }
  return <CheckableTag {...props} checked={state} onChange={handleChange} />;
};
