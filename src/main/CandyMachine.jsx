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
		candyPrice: 0,
		candyList: [{
			candyNumber: 1,
			candyImage: "/candy1.svg",
			candyPrice: 6.00,
			candyName: "candy 1"
		},
		{
			candyNumber: 2,
			candyImage: "/candy2.svg",
			candyPrice: 8.00,
			candyName: "candy 2"
		},
		{
			candyNumber: 3,
			candyImage: "/candy3.svg",
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
		const candyPrice = this.state.candyList[candyNumber-1]
			console.log(candyPrice)
		this.setState({
			selectedCandy: candyNumber,
			candyPrice,
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
						candyID={this.state.selectedCandy}
						candyPrice={this.state.candyPrice} />
				</Section>
				<Section>
					<Tray />
				</Section>
			</Machine>
		)
	}

}

export default CandyMachine