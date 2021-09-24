import React from "react";

import "./styles.css";

const Candy = ({
	candyImage,
	isFullSize,
	onClick,
}) => {
	let classImage = "Candy";
	if (isFullSize) {
		classImage += " full-size";
	}

	return (
		<img
			src={candyImage}
			className={classImage}
			alt={candyImage}
			onClick={onClick}/>
	);
};

export default Candy;
