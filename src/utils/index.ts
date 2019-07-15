/*
 * @Author: terry
 * @Date: 2019-07-16 01:38:44
 * @Last Modified by: https://github.com/terry-ice
 * @Last Modified time: 2019-07-16 02:00:24
 */

/**
 * 存储localStorage
 */
export const setStore = (name: string, content: string) => {
  if (!name) {
    return;
  }
  if (typeof content !== "string") {
    content = JSON.stringify(content);
  }
  window.localStorage.setItem(name, content);
};
/**
 * 获取localStorage
 */
export const getStore = (name: string) => {
  if (!name) {
    return;
  }
  return window.localStorage.getItem(name);
};
