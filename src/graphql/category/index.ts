import { useMutation, useQuery } from "@apollo/react-hooks";

import gql from "graphql-tag";

const GET_CATEGORY_QUERY = gql`
	query GET_CATEGORY_QUERY {
		categories: categories {
			key: id
			id
			name
			slug
			description
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

const CREATE_CATEGORY_MUTATION = gql`
	mutation CREATE_CATEGORY_MUTATION(
		$name: String!
		$slug: String!
		$description: String!
	) {
		createCategory(name: $name, slug: $slug, description: $description) {
			id
			name
			slug
			description
		}
	}
`;
const DELETE_ITEM_MUTATION = gql`
	mutation DELETE_ITEM_MUTATION($id: ID!) {
		deleteCategory(id: $id) {
			id
		}
	}
`;
const UPDATE_CATEGORY_MUTATION = gql`
	mutation UPDATE_CATEGORY_MUTATION(
		$id: ID!
		$name: String!
		$slug: String!
		$description: String!
	) {
		updateCategory(
			id: $id
			slug: $slug
			name: $name
			description: $description
		) {
			id
			name
			slug
			description
		}
	}
`;

const CategoryContainer = ({ children }: any) => {
	const { loading, data } = useQuery(GET_CATEGORY_QUERY);
	const [loginMutation, loginResult] = useMutation(LOGION_MUTATION, {});
	const [addCategoryMutation, addCategoryResult] = useMutation(
		CREATE_CATEGORY_MUTATION,
		{
			refetchQueries: ["GET_CATEGORY_QUERY"]
		}
	);
	const [delCategoryMutation, delCategoryResult] = useMutation(
		DELETE_ITEM_MUTATION,
		{ refetchQueries: ["GET_CATEGORY_QUERY"] }
	);
	const [updateCategoryMutation, updateCategoryResult] = useMutation(
		UPDATE_CATEGORY_MUTATION,
		{ refetchQueries: ["GET_CATEGORY_QUERY"] }
	);
	return children({
		categories: { loading, data },
		login: { mutation: loginMutation, result: loginResult },
		addCategory: { mutation: addCategoryMutation, result: addCategoryResult },
		delCategory: { mutation: delCategoryMutation, result: delCategoryResult },
		updateCategory: {
			mutation: updateCategoryMutation,
			result: updateCategoryResult
		}
	});
};
export default CategoryContainer;
export { GET_CATEGORY_QUERY };
