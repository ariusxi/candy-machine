import React from 'react'
import Candy from '../Candy'

import './styles.css'

const Shelf = props => {
	return (
		<div className="Shelf">
			<div className="item">
				<Candy candyStyle={props.id} />
			</div>
			<div className="detail">
				<h3>Candy</h3>
				<span className="code">{props.id}</span>
				<span className="price">{props.value},00</span>
			</div>
		</div>
	)
}

export default Shelf