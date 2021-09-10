import React from 'react'

import './styles.css'

const Shelf = _ => {
	return (
		<div className="Shelf">
			<div className="item"></div>
			<div className="detail">
				<h3>Candy</h3>
				<span className="code">F1</span>
				<span className="price">40</span>
			</div>
		</div>
	)
}

export default Shelf