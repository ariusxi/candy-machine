import React from 'react'

import './styles.css'


const Vend = props => {
	const { candyValue } = props

	return (
		<div className="Vend">
			<form>
				<input
					type="number"
					name="candyValue"
					required="true"
					placeholder="0.00"
					value={candyValue}
					maxlength="2"
					pattern="d+(.d{2})?" />
				<input
					type="number"
					name="coinage"
					required="true"
					placeholder="0.00"
					step="0.10"
					value="0.00"
					pattern="d+(.d{2})?" />

			</form>
		</div>
	)
}

export default Vend