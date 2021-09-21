import React from "react";

import "./styles.css";

const Coins = (props) => {
	const { coinList, coinIncrement } = props;

	return (
		<div className="Coins">
			{coinList.map((coin, index) => (
				<div className="coin" key={index}>
					<button
						className="button"
						onClick={() => coinIncrement(coin.coinValue)}>
						{coin.coinLabel}
					</button>
				</div>
			))}
		</div>
	);
};

export default Coins;
