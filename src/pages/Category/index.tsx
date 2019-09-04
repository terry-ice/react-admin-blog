import { StyleBtn, StyleLabel } from "@/assets/style/common";
import useFrom from "@/components/UseFrom";
import { Input, message } from "antd";
import React from "react";
import List from "./List";
const { TextArea } = Input;
import CategoryContainer from "@/graphql/category";
import Style from "./style";

export default () => {
	const [values, handelChange] = useFrom({
		name: "",
		slug: "",
		description: ""
	});
	return (
		<Style>
			<div className="post-body-content">
				<List />
			</div>
			<div className="postbox-container">
				<div className="postbox-container-submit">
					<div className="postbox-container-title">添加分类</div>
					<CategoryContainer>
						{({ addCategory }: any) => {
							return (
								<form
									method="post"
									onSubmit={async (e: React.FormEvent<HTMLFormElement>) => {
										e.preventDefault();
										addCategory
											.mutation({
												variables: { ...values }
											})
											.then((res: any) => {
												message.success("添加成功");
											});
									}}
								>
									<StyleLabel width="200px">
										<label htmlFor="title">
											名称：
											<input
												type="text"
												value={values.name}
												name="name"
												onChange={handelChange}
												placeholder="分类名称"
											/>
										</label>
									</StyleLabel>
									<StyleLabel width="200px">
										<label htmlFor="title">
											别名：
											<input
												type="text"
												value={values.slug}
												name="slug"
												onChange={handelChange}
												placeholder="分类别名"
											/>
										</label>
									</StyleLabel>
									<StyleLabel width="200px">
										<label htmlFor="title">
											描述:
											<TextArea
												placeholder="分类介绍"
												value={values.description}
												name="description"
												autosize={{ minRows: 4, maxRows: 6 }}
												onChange={handelChange}
											/>
										</label>
									</StyleLabel>
									<StyleBtn width="200px" height="35px">
										<button type="submit">发布</button>
									</StyleBtn>
								</form>
							);
						}}
					</CategoryContainer>
				</div>
			</div>
		</Style>
	);
};
