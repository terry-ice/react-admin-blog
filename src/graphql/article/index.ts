import { useMutation, useQuery } from "@apollo/react-hooks";

import gql from "graphql-tag";

const GET_ARTICLE_QUERY = gql`
	query GET_ARTICLE_QUERY {
		articles: articles {
			key: id
			id
			title
			content
			state
			description
			keywords
			thumbnail
			createdAt
		}
	}
`;

const CREATE_ARTICLE_MUTATION = gql`
	mutation CREATE_ARTICLE_MUTATION(
		$title: String!
		$description: String!
		$keywords: String
		$thumbnail: String
		$content: String
		$state: Boolean
		$category: String!
		$label: String
	) {
		createArticle(
			title: $title
			description: $description
			keywords: $keywords
			content: $content
			state: $state
			thumbnail: $thumbnail
			category: $category
			label: $label
		) {
			id
			title
			description
			keywords
			content
			thumbnail
			category {
				id
				name
			}
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
const UPDATE_ARTICLE_MUTATION = gql`
	mutation UPDATE_ARTICLE_MUTATION(
		$id: ID!
		$title: String!
		$description: String!
		$keywords: String
		$thumbnail: String
		$content: String
		$state: Boolean
		$category: String!
		$label: String
	) {
		createArticle(
			id: $id
			title: $title
			description: $description
			keywords: $keywords
			content: $content
			state: $state
			thumbnail: $thumbnail
			category: $category
			label: $label
		) {
			id
			title
			description
			keywords
			content
			thumbnail
			category {
				id
				name
			}
		}
	}
`;

const ArticleContainer = ({ children }: any) => {
	const { loading, data } = useQuery(GET_ARTICLE_QUERY);
	const [addArticleMutation, addArticleResult] = useMutation(
		CREATE_ARTICLE_MUTATION,
		{
			refetchQueries: ["GET_ARTICLE_QUERY"]
		}
	);
	const [delArticleMutation, delArticleResult] = useMutation(
		DELETE_ITEM_MUTATION,
		{ refetchQueries: ["GET_ARTICLE_QUERY"] }
	);
	const [updateArticleMutation, updateArticleResult] = useMutation(
		UPDATE_ARTICLE_MUTATION,
		{ refetchQueries: ["GET_ARTICLE_QUERY"] }
	);
	return children({
		article: { loading, data },
		addArticle: { mutation: addArticleMutation, result: addArticleResult },
		delArticle: { mutation: delArticleMutation, result: delArticleResult },
		updateArticle: {
			mutation: updateArticleMutation,
			result: updateArticleResult
		}
	});
};
export default ArticleContainer;
