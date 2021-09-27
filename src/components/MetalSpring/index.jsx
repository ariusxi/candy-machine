import React from 'react'

import { ReactComponent as Spring } from './../../assets/images/spiral.svg'

import './styles.css'

const MetalSpring = ({ animationSpring }) => {
	
	const getClassName = () => {
		let className = 'MetalSpring'
		if (animationSpring) {
			className += ' rotating'
		}
		return className
	}

	return (
		<Spring
			fill="grey"
			className={getClassName(MetalSpring)}/>
	)
}

export default MetalSpring