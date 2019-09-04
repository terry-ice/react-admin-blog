import { StyleLabel } from "@/assets/style/common";
import CategoryContainer from "@/graphql/category";
import { getStore, setStore } from "@/utils";
import * as React from "react";
import { Field, Form } from "react-final-form";
import { Redirect } from "react-router-dom";
import LoginStyle from "./style";
export default (props: any) => {
	const required = (value: string) => (value ? undefined : "Required");
	if (getStore("token")) {
		return <Redirect to="/home" />;
	}
	return (
		<LoginStyle>
			<CategoryContainer>
				{({ login }: any) => {
					const route = props;
					return (
						<Form
							onSubmit={async value => {
								login
									.mutation({ variables: value })
									.then((res: any) => {
										const token = res.data.login.token || "";
										if (token) {
											setStore("token", token);
											route.history.push("/home");
										}
									})
									.catch((err: any) => {
										console.log(err);
									});
							}}
						>
							{({ handleSubmit, form, submitting, pristine, values }) => (
								<form onSubmit={handleSubmit}>
									<h2>Sign in to terry-blog-admin</h2>
									<h4>Please enter your credentials to proceed</h4>
									<StyleLabel width="320px">
										<Field name="email">
											{({ input, meta }: any) => (
												<label htmlFor="email">
													Email
													<input
														{...input}
														type="email"
														name="email"
														placeholder="email"
													/>
													{meta.error && meta.touched && (
														<span className="error">{meta.error}</span>
													)}
												</label>
											)}
										</Field>
									</StyleLabel>
									<StyleLabel width="320px">
										<Field name="password" validate={required}>
											{({ input, meta }) => (
												<label htmlFor="password">
													Password
													<input
														{...input}
														type="password"
														name="password"
														placeholder="password"
													/>
													{meta.error && meta.touched && (
														<span className="error">{meta.error}</span>
													)}
												</label>
											)}
										</Field>
									</StyleLabel>

									{/* {error && (
										<div className="error">登录失败！ 账号或密码错误</div>
									)} */}
									<button type="submit" disabled={submitting || pristine}>
										Sign In
									</button>
								</form>
							)}
						</Form>
					);
				}}
			</CategoryContainer>
			<div className="right" />
		</LoginStyle>
	);
};
