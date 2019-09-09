import RightHead from "@/components/RightHead";
import React from "react";
import "./index.scss";
import Article from "./List";

const Home = () => {
	return (
		<div className="dashboard">
			<RightHead />
			<Article />
		</div>
	);
};

export default Home;
