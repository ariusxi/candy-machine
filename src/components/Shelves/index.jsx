import React from 'react'
import Shelf from './../Shelf'

import './styles.css'

const Shelves = props => {
	const { candyList } = props
	return (
		<div className="Shelves">
			{candyList.map((candy, index) => (
				<Shelf key={index} {...candy} />
			))}
		</div>
	)
}

export default Shelves