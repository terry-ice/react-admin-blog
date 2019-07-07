import gql from "graphql-tag";
import React from "react";
import { Mutation, OperationVariables } from "react-apollo";
import User from "../../components/Auth";

const SIGNIN_MUTATION = gql`
  mutation SIGNIN_MUTATION($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      id
      name
    }
  }
`;
interface State {
  email: string;
  password: string;
}
interface Data {
  login: { id: string; name: string };
}

class Login extends React.Component<{}, State> {
  state: State = {
    email: "terryloveyan@gmail.com",
    password: "qq1011"
  };
  saveToState = (e: any) => {
    // tslint:disable-next-line:no-console
    console.log(e, "e");
    // this.setState({ e.target.name: e.target.value });
  };
  render() {
    return (
      <div>
        <h1>login Page</h1>
        <User>
          {(data: any) => {
            return <div>test</div>;
          }}
        </User>
        <Mutation<Data, OperationVariables>
          mutation={SIGNIN_MUTATION}
          variables={this.state}
        >
          {(login, { error, loading }) => {
            return (
              <form
                method="post"
                onSubmit={async (e: any) => {
                  e.preventDefault();
                  login();
                  // this.setState({ email: "", password: "" });
                }}
              >
                <fieldset disabled={loading} aria-busy={loading}>
                  <h2>Login into your Account</h2>
                  <label htmlFor="email">
                    Email
                    <input
                      type="email"
                      name="email"
                      placeholder="email"
                      value={this.state.email}
                      onChange={this.saveToState}
                    />
                  </label>
                  <label htmlFor="password">
                    Password
                    <input
                      type="password"
                      name="password"
                      placeholder="password"
                      value={this.state.password}
                      onChange={this.saveToState}
                    />
                  </label>

                  <button type="submit">Sign Up!</button>
                </fieldset>
              </form>
            );
          }}
        </Mutation>
      </div>
    );
  }
}

export default Login;
