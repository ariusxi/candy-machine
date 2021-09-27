import React from 'react'

import './styles.css'

const Selection = ({ selectCandy }) => {
	return (
		<div className="Selection">
			<span onClick={() => selectCandy(1)}>1</span>
			<span onClick={() => selectCandy(2)}>2</span>
			<span onClick={() => selectCandy(3)}>3</span>
		</div>
	)
}

export default Selection