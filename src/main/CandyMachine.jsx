import React, { Component } from 'react'

import Coins from './../components/Coins'
import Machine from './../components/Machine'
import Section from './../components/Section'
import Selection from './../components/Selection'
import Shelves from './../components/Shelves'
import Tray from './../components/Tray'
import Vend from './../components/Vend'

// Images
import Candy1 from './../assets/images/candies/candy1.svg'
import Candy2 from './../assets/images/candies/candy2.svg'
import Candy3 from './../assets/images/candies/candy3.svg'

class CandyMachine extends Component {

	state = {
		selectedCandy: null,
		candyValue: 0,
		candyList: [{
			candyNumber: 1,
			candyImage: Candy1,
			candyPrice: 6.00,
			candyName: "candy 1"
		},
		{
			candyNumber: 2,
			candyImage: Candy2,
			candyPrice: 8.00,
			candyName: "candy 2"
		},
		{
			candyNumber: 3,
			candyImage: Candy3,
			candyPrice: 10.00,
			candyName: "candy 3",
			isFullSize: true,
		}],
	}

	constructor(props) {
		super(props)

		this.selectCandy = this.selectCandy.bind(this)
	}

	selectCandy(candyNumber) {
		this.setState({
			selectedCandy: candyNumber,
			candyValue: candyNumber * 2,
		})
	}

	render() {
		return (
			<Machine>
				<Section>
					<Shelves
						candyList={this.state.candyList} />
				</Section>
				<Section>
					<Selection
						selectCandy={this.selectCandy} />
				</Section>
				<Section>
					<Coins />
				</Section>
				<Section>
					<Vend
						candyValue={this.state.candyValue} />
				</Section>
				<Section>
					<Tray />
				</Section>
			</Machine>
		)
	}

}

export default CandyMachine