import React from 'react'

import './styles.css'

const Machine = ({ children, shakingMachine }) => {

	const getClassMachine = () => {
		let className = "Machine"
		if (shakingMachine) {
			className += " shaking"
		}
		return className
	}

    return (
        <div className={getClassMachine()}>{children}</div>
    )
}

export default Machine