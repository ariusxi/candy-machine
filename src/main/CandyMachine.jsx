import React, { Component } from 'react'

import Coins from './../components/Coins'
import Machine from './../components/Machine'
import Section from './../components/Section'
import Selection from './../components/Selection'
import Shelves from './../components/Shelves'
import Tray from './../components/Tray'
import Vend from './../components/Vend'

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
				<Section>
					<Vend/>
				</Section>
				<Section>
					<Coins/>
				</Section>
				<Section>
					<Tray/>
				</Section>
            </Machine>
        )
    }

}

export default CandyMachine