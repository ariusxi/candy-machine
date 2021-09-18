import React from 'react'

import './styles.css'


const Vend = props => {
	const { candyID, candyPrice } = props

	return (
		<div className="Vend">
			<form>
				<input
					readOnly
					type="text"
					name="candyID"
					required={true}
					placeholder="Empty"
					value={candyID} />
				<input
					readOnly
					type="number"
					name="coinage"
					required={true}
					placeholder="0.00"
					step="0.10"
					value={candyPrice}
					pattern="d+(.d{2})?" />
			</form>
		</div>
	)
}

export default Vend