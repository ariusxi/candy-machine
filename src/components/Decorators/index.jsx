import React from 'react'

import FortuneCat from './../../assets/images/fortune-cat.png'

import { ReactComponent as CatPaw } from './../../assets/images/cat-paw.svg'

import './styles.css'

const Decorators = _ => {
	return (
		<div className="Decorators">
			<CatPaw
				className="cat-paw"
				color="white"/>
			<img 
				src={FortuneCat} 
				alt={FortuneCat}
				className="fortune-cat"/>
		</div>
	)
}

export default Decorators