import React from "react";

import "./styles.css";

const Candy = ({
	candyImage,
	isFullSize,
	isFallingDown,
	onClick,
}) => {

	const getClassImage = () => {
		let classImage = "Candy"
		if (isFullSize) {
			classImage += " full-size"
		}
		if (isFallingDown) {
			classImage += " falling"
		}

		return classImage
	}

	return (
		<img
			src={candyImage}
			className={getClassImage()}
			alt={candyImage}
			onClick={onClick}/>
	);
};

export default Candy;
