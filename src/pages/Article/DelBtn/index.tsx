import ArticleContainer from "@/graphql/article";

import { message, Popconfirm } from "antd";

import React from "react";

interface Props {
	readonly id: string;
	readonly children: React.ReactNode;
}

const DeleteItem: React.SFC<Props> = ({ id, children }) => {
	function cancel() {
		message.success("取消操作");
	}
	return (
		<ArticleContainer>
			{({ delArticle }: any) => (
				<a>
					<Popconfirm
						title="你真的要删除此条文章？"
						onConfirm={() => {
							delArticle
								.mutation({
									variables: { id }
								})
								.then(() => {
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
		</ArticleContainer>
	);
};

export default DeleteItem;
