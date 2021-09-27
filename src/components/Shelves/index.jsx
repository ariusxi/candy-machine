import React from 'react'
import Shelf from './../Shelf'

import './styles.css'

const Shelves = ({ candyList, candyBought }) => {
	return (
		<div className="Shelves">
			{candyList.map((candy, index) => (
				<Shelf 
					key={index}
					candyBought={candyBought}
					{...candy} />
			))}
		</div>
	)
}

export default Shelves