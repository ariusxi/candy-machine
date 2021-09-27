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

// Sounds
import CoinInsertSound from './../assets/sounds/coin-insert.mp3'
import MachineSoundRun from './../assets/sounds/machine-sound-run.mp3'
import SelectionSound from './../assets/sounds/selection-sound.mp3'
import TrayCoinDrop from './../assets/sounds/tray-coin-drop.mp3'
import TraySoundOpen from './../assets/sounds/tray-sound-open.mp3'

class CandyMachine extends Component {

	invalidMoney = 'SALDO DEVE SER < 10'
	candyNotSelected = 'VOCÊ DEVE ESCOLHER 1 DOCE'
	insufficientMoney = 'DINHEIRO INSUFICIENTE'

	state = {
		selectedCandy: '',
		candyPrice: 0,
		currentMoney: 0,
		moneyTray: 0,
		candyTray: null,
		shakingMachine: false,
		candyList: [{
			candyNumber: 1,
			candyImage: Candy1,
			candyPrice: 6,
			candyName: "Chocolate"
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

	soundPlay(soundPath) {
		new Audio(soundPath).play()
	}

	showErrorMessage(message, messageTimeout = 2000) {
		const { selectedCandy } = this.state
 
		this.setState({
			selectedCandy: message,
		})

		const self = this
		return setTimeout(() => self.setState({ selectedCandy }), messageTimeout)
	}

	selectCandy(candyNumber) {
		const { candyPrice, candyName } = this.state.candyList[candyNumber-1]

		this.soundPlay(SelectionSound)

		this.setState({
			selectedCandy: (`${candyNumber} - ${candyName}`),
			candyPrice,
		})
	}

	buyCandy() {
		const { 
			candyList, 
			currentMoney, 
			selectedCandy,
		} = this.state

		const currentCandyIndex = parseInt(selectedCandy.split(' - ')[0]) - 1 
		const candyBought = candyList[currentCandyIndex]

		if (
			selectedCandy === this.candyNotSelected ||
			selectedCandy === this.invalidMoney
		) {
			return
		}

		if (!candyBought) {
			return this.showErrorMessage(this.candyNotSelected)
		}

		if (currentMoney < candyBought.candyPrice) {
			return this.showErrorMessage(this.insufficientMoney)
		}

		this.soundPlay(MachineSoundRun)
		
		// Disabling machine shake after 2 seconds
		const self = this
		setTimeout(() => {
			// Disable shake maching
			self.setState({ shakingMachine: false })
			// Play tray sound
			self.soundPlay(TraySoundOpen)
		}, 2000)

		this.setState({
			selectedCandy: '',
			currentMoney: 0,
			candyPrice: 0,
			shakingMachine: true,
			candyTray: candyBought,
			moneyTray: currentMoney - candyBought.candyPrice,
		})
	}

	ejectMoney() {
		const { currentMoney } = this.state

		if (currentMoney <= 0) {
			return
		}

		this.soundPlay(TrayCoinDrop)

		const self = this
		setTimeout(() => self.soundPlay(TraySoundOpen), 2000)

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
			return this.showErrorMessage(this.invalidMoney)
		}

		this.soundPlay(CoinInsertSound)

		this.setState({
			currentMoney:  this.state.currentMoney + value,
		})
	}

	removeFromTray(restMoneyTray = 0, candyTray = this.state.candyTray) {
		this.setState({
			moneyTray: restMoneyTray,
			candyTray,
		})
	}


	render() {
		return (
			<Machine
				shakingMachine={this.state.shakingMachine}>
				<Section>
					<Shelves
						candyList={this.state.candyList}
						candyBought={this.state.candyTray}/>
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
						candyTray={this.state.candyTray}
						moneyTray={this.state.moneyTray}
						removeFromTray={this.removeFromTray}/>
				</Section>
			</Machine>
		)
	}

}

export default CandyMachine
