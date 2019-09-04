import CategoryContainer from "@/graphql/category";

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
		<CategoryContainer>
			{({ delCategory }: any) => (
				<a>
					<Popconfirm
						title="你真的要删除此条分类？"
						onConfirm={() => {
							delCategory
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
		</CategoryContainer>
	);
};

export default DeleteItem;
