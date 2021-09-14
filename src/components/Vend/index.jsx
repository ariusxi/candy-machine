import React from 'react'

import './styles.css'

const Vend = _ => {
	return (
		<div className="Vend">
			<form>
				<input 
					type="text"
					name="selection"
					required="true"
					placeholder="xx"
					maxlength="2"
					pattern="[a-zA-Z]{1}[0-9]{1}"/>
				<input
					type="number"
					name="coinage"
					required="true"
					placeholder="0.00"
					step="0.10"
					value="0.00"
					pattern="d+(.d{2})?"/>
				<button type="submit">Vend</button>
			</form>
		</div>
	)
}

export default Vend