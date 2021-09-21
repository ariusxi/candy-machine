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
		selectedCandy: '',
		candyPrice: 0,
		candyList: [{
			candyNumber: 1,
			candyImage: Candy1,
			candyPrice: 6.00,
			candyName: "Cho co la te"
		},
		{
			candyNumber: 2,
			candyImage: Candy2,
			candyPrice: 7.00,
			candyName: "Biscoitos"
		},
		{
			candyNumber: 3,
			candyImage: Candy3,
			candyPrice: 8.00,
			candyName: "Doces Sortidos",
			isFullSize: true,
		}],
	}

	constructor(props) {
		super(props)

		this.selectCandy = this.selectCandy.bind(this)
	}

	selectCandy(candyNumber) {
		const { candyPrice, candyName } = this.state.candyList[candyNumber-1]
		this.setState({
			selectedCandy: (`${candyNumber} - ${candyName}`),
			candyPrice,
		})
	}

	render() {
		return (
			<Machine>
				<Section>
					<Shelves
						candyList={this.state.candyList}/>
				</Section>
				<Section>
					<Selection
						selectCandy={this.selectCandy} />
				</Section>
				<Section>
					<Coins/>
				</Section>
				<Section>
					<Vend
						candyID={this.state.selectedCandy}
						candyPrice={this.state.candyPrice}/>
				</Section>
				<Section>
					<Tray/>
				</Section>
			</Machine>
		)
	}

}

export default CandyMachine