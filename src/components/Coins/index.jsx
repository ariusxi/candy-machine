import React from 'react'

import './styles.css'

const Coins = _ => {
	return (
		<div className="Coins">
			<div className ="coin">
				<button class="button">R$ 1,00</button>
			</div>
			<div className ="coin">
				<button class="button">R$ 2,00</button>
			</div>
			<div className ="coin">
				<button class="button">R$ 5,00</button>
			</div>
		</div>
	)
}

export default Coins