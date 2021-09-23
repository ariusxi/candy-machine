import React, { Component } from 'react'

import Coins from './../components/Coins'
import Decorators from './../components/Decorators'
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

	invalidMoney = 'SALDO DEVE SER < 10'

	state = {
		selectedCandy: '',
		candyPrice: 0,
		currentMoney: 0,
		moneyTray: 0,
		candyTray: null,
		candyList: [{
			candyNumber: 1,
			candyImage: Candy1,
			candyPrice: 6,
			candyName: "Cho co la te"
		},
		{
			candyNumber: 2,
			candyImage: Candy2,
			candyPrice: 7,
			candyName: "Biscoitos"
		},
		{
			candyNumber: 3,
			candyImage: Candy3,
			candyPrice: 8,
			candyName: "Doces Sortidos",
			isFullSize: true,
		}],
		coinList:[{
			coinValue: 1,
			coinLabel:"R$ 1,00",
		},
		{
			coinValue: 2,
			coinLabel:"R$ 2,00",
		},
		{
			coinValue: 5,
			coinLabel:"R$ 5,00",
		}]
	}

	constructor(props) {
		super(props)

		this.buyCandy = this.buyCandy.bind(this)
		this.ejectMoney = this.ejectMoney.bind(this)
		this.selectCandy = this.selectCandy.bind(this)
		this.removeFromTray = this.removeFromTray.bind(this)
		this.currentMoneyIncrement = this.currentMoneyIncrement.bind(this)
	}

	selectCandy(candyNumber) {
		const { candyPrice, candyName } = this.state.candyList[candyNumber-1]
		this.setState({
			selectedCandy: (`${candyNumber} - ${candyName}`),
			candyPrice,
		})
	}

	buyCandy() {

	}

	ejectMoney() {
		const { currentMoney } = this.state

		if (currentMoney <= 0) {
			return
		}

		this.setState({
			currentMoney: 0,
			moneyTray: currentMoney,
		})
	}

	currentMoneyIncrement(value){
		const { currentMoney, selectedCandy } = this.state

		if (selectedCandy === this.invalidMoney) {
			return
		}

		if ((currentMoney + value) > 10) {
			this.setState({
				selectedCandy: this.invalidMoney,
			})

			// Mostra o erro na tela por 2 segundos
			const self = this
			return setTimeout(() => self.setState({ selectedCandy }), 2000)
		}

		this.setState({
			currentMoney:  this.state.currentMoney + value,
		})
	}

	removeFromTray(restMoneyTray = 0) {
		this.setState({
			moneyTray: restMoneyTray,
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
					<Coins
						coinList={this.state.coinList}
						coinIncrement={this.currentMoneyIncrement}/>
				</Section>
				<Section>
					<Vend
						candyID={this.state.selectedCandy}
						candyPrice={this.state.candyPrice}
						currentMoney={this.state.currentMoney}/>
				</Section>
				<Section>
					<Decorators
						buyCandy={this.buyCandy}
						ejectMoney={this.ejectMoney}/>
				</Section>
				<Section>
					<Tray
						moneyTray={this.state.moneyTray}
						removeFromTray={this.removeFromTray}/>
				</Section>
			</Machine>
		)
	}

}

export default CandyMachine
