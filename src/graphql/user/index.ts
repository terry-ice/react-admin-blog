import { useMutation, useQuery } from "@apollo/react-hooks";

import gql from "graphql-tag";

const ME_QUERY = gql`
  {
    user: me {
      uuid
      email
    }
  }
`;

const LOGION_MUTATION = gql`
  mutation LOGION_MUTATION($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      id
      name
      token
    }
  }
`;

const UserContainer = ({ children }: any) => {
  const { loading, data } = useQuery(ME_QUERY);
  const [loginMutation, loginResult] = useMutation(LOGION_MUTATION, {});
  return children({
    user: { loading, data },
    login: { mutation: loginMutation, result: loginResult }
  });
};
export default UserContainer;
