// import { CURRENT_USER_QUERY } from "@/components/common/Auth";
import UserContainer from "@/graphql/user";
import { Icon } from "antd";
import React from "react";
import "./index.scss";

const SignOut: React.FC<{}> = () => {
	return (
		<UserContainer>
			{({ logout }: any) => {
				return (
					<span
						className="rightDropDown"
						onClick={() => {
							localStorage.removeItem("token");
							// logout();
							(window as any).location = "/login";
						}}
					>
						<Icon type="logout" />
						退出登录
					</span>
				);
			}}
		</UserContainer>
	);
};

export default SignOut;
