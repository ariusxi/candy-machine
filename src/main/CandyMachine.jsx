import React, { Component } from 'react'

import Machine from './../components/Machine'
import Section from './../components/Section'

import './CandyMachine.css'

class CandyMachine extends Component {

    render() {
        return (
            <Machine>
               	<Section>Candy Machine</Section>
            </Machine>
        )
    }

}

export default CandyMachine