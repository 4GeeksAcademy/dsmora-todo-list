import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Input from "./Input";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<h1 className="text-center mt-5">Este es el home!</h1>
			<Input />
		</div>
	);
};

export default Home;
