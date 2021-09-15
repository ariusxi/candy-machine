import React, { Component } from 'react'

import Coins from './../components/Coins'
import Machine from './../components/Machine'
import Section from './../components/Section'
import Selection from './../components/Selection'
import Shelves from './../components/Shelves'
import Tray from './../components/Tray'
import Vend from './../components/Vend'

class CandyMachine extends Component {

	state = {
		selectedCandy: null,
		candyValue: 0,
	}

	constructor(props){
		super(props)
		
		this.selectCandy = this.selectCandy.bind(this)
	}

	selectCandy(candyNumber){
		this.setState({
			selectedCandy: candyNumber,
			candyValue: candyNumber*2,
		})
	}

    render() {
		return (
            <Machine>
               	<Section>
				   <Shelves/>
				</Section>
				<Section>
					<Selection
						selectCandy={this.selectCandy}/>
				</Section>
				<Section>
					<Coins/>
				</Section>
				<Section>
					<Vend 
						candyValue={this.state.candyValue}/>
				</Section>
				<Section>
					<Tray/>
				</Section>
            </Machine>
        )
    }

}

export default CandyMachine