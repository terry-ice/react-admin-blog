import { GET_CATEGORY_QUERY } from "@/pages/Category/List";
import { message, Popconfirm } from "antd";
import gql from "graphql-tag";
import React from "react";
import { Mutation, OperationVariables } from "react-apollo";

const DELETE_ITEM_MUTATION = gql`
  mutation DELETE_ITEM_MUTATION($id: ID!) {
    deleteCategory(id: $id) {
      id
    }
  }
`;
interface Data {
  category: Category;
}

interface Props {
  readonly id: string;
  readonly children: React.ReactNode;
}

const DeleteItem: React.SFC<Props> = ({ id, children }) => {
  function cancel() {
    message.success("取消操作");
  }
  return (
    <Mutation<Data, OperationVariables>
      mutation={DELETE_ITEM_MUTATION}
      variables={{ id }}
      refetchQueries={[{ query: GET_CATEGORY_QUERY }]}
    >
      {(deleteItem, { error }) => (
        <a>
          <Popconfirm
            title="你真的要删除此条分类？"
            onConfirm={() => {
              deleteItem().then(res => {
                message.success("操作成功");
              });
            }}
            onCancel={cancel}
            okText="Yes"
            cancelText="No"
          >
            {children}
          </Popconfirm>
        </a>
      )}
    </Mutation>
  );
};

export default DeleteItem;
