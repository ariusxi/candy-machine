import React from 'react'

import Candy from './../Candy'
import MetalSpring from './../MetalSpring'

import './styles.css'

const Shelf = props => {
	return (
		<div className="Shelf">
			<div className="item">
				<MetalSpring/>
				<Candy
					candyImage={props.candyImage}
					isFullSize={props.isFullSize}/>
			</div>
			<div className="detail">
				<h3>Candy</h3>
				<span className="code">{props.candyNumber}-{props.candyName}</span>
				<span className="price">{props.candyPrice.toFixed(2)}</span>
			</div>
		</div>
	)
}

export default Shelf