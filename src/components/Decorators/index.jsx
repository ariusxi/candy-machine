import React from 'react'

import FortuneCat from './../../assets/images/fortune-cat.png'

import { ReactComponent as CatPaw } from './../../assets/images/cat-paw.svg'

import './styles.css'

const Decorators = props => {
	const { 
		buyCandy,
		ejectMoney,
	} = props

	return (
		<div className="Decorators">
			<CatPaw
				className="cat-paw"
				color="white"/>
			<div className="buttons">
				<button 
					type="button"
					onClick={(_) => buyCandy()}>
					Comprar
				</button>
				<button 
					type="button"
					onClick={(_) => ejectMoney()}>
					Ejetar
				</button>
			</div>
			<img 
				src={FortuneCat} 
				alt={FortuneCat}
				className="fortune-cat"/>
		</div>
	)
}

export default Decorators