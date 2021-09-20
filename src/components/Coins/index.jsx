import React from "react";

import "./styles.css";

const Coins = (props) => {
	const { coinList } = props;

	return (
		<div className="Coins">
			{coinList.map((coin, index) => (
				<div className="coin" key={index}>
					<button className="button">{coin.coinLabel}</button>
				</div>
			))}
		</div>
	);
};

export default Coins;
