import { useMutation } from "@apollo/react-hooks";

import gql from "graphql-tag";

const SIGN_OUT_MUTATION = gql`
	mutation SIGN_OUT_MUTATION {
		logout {
			message
		}
	}
`;

const UserContainer = ({ children }: any) => {
	const [logoutMutation, logoutResult] = useMutation(SIGN_OUT_MUTATION, {});
	return children({
		logout: { mutation: logoutMutation, result: logoutResult }
	});
};
export default UserContainer;
