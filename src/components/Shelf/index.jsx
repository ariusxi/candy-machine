import React, { useEffect, useState } from 'react'

import Candy from './../Candy'
import MetalSpring from './../MetalSpring'

import './styles.css'

const Shelf = ({
	candyBought,
	candyImage, 
	isFullSize, 
	candyName,
	candyNumber,
	candyPrice,
}) => {
	const [animationSpring, setAnimationSpring] = useState(false)
	const [candyDropping, setCandyDropping] = useState(false)

	const getCandyCode = (number, name) => `${number} - ${name}`

	useEffect(() => {
		if (candyBought && candyBought.candyNumber === candyNumber) {
			setAnimationSpring(true)
			setTimeout(() => setCandyDropping(true), 1000)
			setTimeout(() => setCandyDropping(false), 2000)
		} else {
			setAnimationSpring(false)
			setCandyDropping(false)
		}
	}, [candyBought, candyNumber])

	return (
		<div className="Shelf">
			<div className="item">
				<MetalSpring
					animationSpring={animationSpring}/>
				<Candy
					candyImage={candyImage}
					isFullSize={isFullSize}/>
				{candyDropping ? (
					<Candy
						isFallingDown
						candyImage={candyImage}
						isFullSize={isFullSize}/>
				) : ''}
			</div>
			<div className="detail">
				<h3>Candy</h3>
				<span className="code">{getCandyCode(candyNumber, candyName)}</span>
				<span className="price">{candyPrice.toFixed(2)}</span>
			</div>
		</div>
	)
}

export default Shelf