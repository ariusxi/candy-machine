import React, { Component } from 'react'

import Machine from './../components/Machine'
import Section from './../components/Section'
import Selection from './../components/Selection'
import Shelves from './../components/Shelves'

class CandyMachine extends Component {

    render() {
        return (
            <Machine>
               	<Section>
				   <Shelves/>
				</Section>
				<Section>
					<Selection/>
				</Section>
				<Section>Candy Machine</Section>
				<Section>Candy Machine</Section>
				<Section>Candy Machine</Section>
            </Machine>
        )
    }

}

export default CandyMachine