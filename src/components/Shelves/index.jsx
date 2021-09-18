import React from 'react'
import Shelf from './../Shelf'

import './styles.css'

const Shelves = props => {
	const { candyList } = props
	return (
		<div className="Shelves">
			{candyList.map(candy => (
				<Shelf
					candyNumber={candy.candyNumber}
					candyImage={candy.candyImage}
					candyPrice={candy.candyPrice}
					candyName={candy.candyName}
					isFullSize={candy.isFullSize} />
			))}
		</div>
	)
}

export default Shelves