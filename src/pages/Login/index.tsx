import { StyleLabel } from "@/assets/style/common";
import { getStore, setStore } from "@/utils";
import gql from "graphql-tag";
import React, { useState } from "react";
import { Mutation, OperationVariables } from "react-apollo";
import { Redirect } from "react-router-dom";
import LoginStyle from "./style";
const SIGNIN_MUTATION = gql`
  mutation SIGNIN_MUTATION($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      id
      name
      token
    }
  }
`;

interface Data {
  login: { id: string; name: string };
}

export default (props: any) => {
  const email = userChangeValue("terryloveyan@gmail.com");
  const password = userChangeValue("");
  if (getStore("token")) {
    return <Redirect to="/home" />;
  }
  return (
    <LoginStyle>
      <Mutation<Data, OperationVariables>
        mutation={SIGNIN_MUTATION}
        variables={{ email: email.value, password: password.value }}
      >
        {(login, { error }) => {
          const route = props;
          return (
            <form
              method="post"
              onSubmit={async (e: any) => {
                e.preventDefault();
                login().then((res: any) => {
                  const token = res.data.login.token || "";
                  if (token) {
                    setStore("token", token);
                    route.history.push("/home");
                  }
                });
              }}
            >
              <h2>Sign in to terry-blog-admin</h2>
              <h4>Please enter your credentials to proceed</h4>
              <StyleLabel width="320px">
                <label htmlFor="email">
                  Email
                  <input
                    type="email"
                    name="email"
                    placeholder="email"
                    {...email}
                  />
                </label>
              </StyleLabel>
              <StyleLabel width="320px">
                <label htmlFor="password">
                  Password
                  <input
                    type="password"
                    name="password"
                    placeholder="password"
                    {...password}
                  />
                </label>
              </StyleLabel>
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
