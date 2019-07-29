import CommonHead from "@/components/CommonHead";
import React from "react";
import "./index.scss";
import List from "./List";

const Home = () => {
  return (
    <div className="dashboard">
      <CommonHead />
      <List />
    </div>
  );
};

export default Home;
