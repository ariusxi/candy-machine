import React from 'react'

import './styles.css'


const Vend = props => {
	const { candyID, candyPrice } = props

	const formatCurrency = (value) => `R$ ${value.toFixed(2)}`
	
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
					type="text"
					name="candyprice"
					required={true}
					placeholder="0.00"
					value={formatCurrency(candyPrice)}
					pattern="d+(.d{2})?" />
				<input
					readOnly
					type="number"
					name="coinage"
					required={true}
					placeholder="0.00"
					pattern="d+(.d{2})?" />
			</form>
		</div>
	)
}

export default Vend