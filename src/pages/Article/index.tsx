import Article from "@/components/Article";
import RightHead from "@/components/RightHead";
import React from "react";
import "./index.scss";

const Home = () => {
	return (
		<div className="dashboard">
			<RightHead />
			<Article />
		</div>
	);
};

export default Home;
