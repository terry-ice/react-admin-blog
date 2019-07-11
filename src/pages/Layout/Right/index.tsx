import { CURRENT_USER_QUERY } from "@/components/common/Auth";
import { Icon } from "antd";
import gql from "graphql-tag";
import React from "react";
import { Mutation, OperationVariables } from "react-apollo";
import "./index.scss";

const SIGN_OUT_MUTATION = gql`
  mutation SIGNOUT_MUTATION {
    logout {
      message
    }
  }
`;
const SignOut: React.FC<{}> = () => {
  return (
    <Mutation<{}, OperationVariables>
      mutation={SIGN_OUT_MUTATION}
      refetchQueries={[{ query: CURRENT_USER_QUERY }]}
    >
      {signOut => (
        <span className="rightDropDown" onClick={() => signOut()}>
          <Icon type="logout" />
          退出登录
        </span>
      )}
    </Mutation>
  );
};

export default SignOut;
