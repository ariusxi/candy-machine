import React from 'react'
import Shelf from './../Shelf'

import './styles.css'

const Shelves = _ => {
	return (
		<div className="Shelves">
			<Shelf id="candy 1" value={6} />
			<Shelf id="candy 2" value={8} />
			<Shelf id="candy 3" value={10} />
		</div>
	)
}

export default Shelves