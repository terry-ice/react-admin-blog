import { CURRENT_USER_QUERY } from "@/components/common/Auth";
import gql from "graphql-tag";
import React, { useState } from "react";
import { Mutation, OperationVariables } from "react-apollo";
import LoginStyle from "./style";

const SIGNIN_MUTATION = gql`
  mutation SIGNIN_MUTATION($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      id
      name
    }
  }
`;

interface Data {
  login: { id: string; name: string };
}

export default () => {
  const email = userChangeValue("terryloveyan@gmail.com");
  const password = userChangeValue("");

  return (
    <LoginStyle>
      <Mutation<Data, OperationVariables>
        mutation={SIGNIN_MUTATION}
        variables={{ email: email.value, password: password.value }}
        refetchQueries={[{ query: CURRENT_USER_QUERY }]}
      >
        {(login, { error }) => {
          return (
            <form
              method="post"
              onSubmit={async (e: any) => {
                e.preventDefault();
                login();
              }}
            >
              <h2>Sign in to terry-blog-admin</h2>
              <h4>Please enter your credentials to proceed</h4>
              <label htmlFor="email">
                Email
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  {...email}
                />
              </label>
              <label htmlFor="password">
                Password
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  {...password}
                />
              </label>
              {error && <div className="error">登录失败！ 账号或密码错误</div>}
              <button type="submit">Sign In</button>
            </form>
          );
        }}
      </Mutation>
      <div className="right" />
    </LoginStyle>
  );
};

function userChangeValue(params: string) {
  const [value, setValue] = useState<string>(params);

  function handleChange(event: { target: HTMLInputElement }) {
    setValue(event.target.value);
  }
  return {
    value,
    onChange: handleChange
  };
}
