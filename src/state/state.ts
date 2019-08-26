import { useState } from "react";

import createUseContext from "constate";
export const useCategory = createUseContext(updateCategory, value => [value]);

function updateCategory({ initialNav = {} as Category } = {}) {
  const [updateItem, setValue] = useState(initialNav);
  const setCategory = (value: Category) => {
    setValue(value);
  };
  return { updateItem, setCategory };
}
