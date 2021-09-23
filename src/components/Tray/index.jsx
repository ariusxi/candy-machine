import React, { useState, useEffect } from 'react'

import Bill1 from './../../assets/images/currencies/real bill - 1.png'
import Bill2 from './../../assets/images/currencies/real bill - 2.png'
import Bill3 from './../../assets/images/currencies/real bill - 5.png'

import './styles.css'

const Tray = ({ moneyTray, removeFromTray }) => {
	const [moneyList, setMoneyList] = useState([])

	const getCurrencyImage = (coinNumber) => {
		const coinImage = ({
			1: Bill1,
			2: Bill2,
			5: Bill3,
		})

		return coinImage[coinNumber]
	}

	const shuffle = (array) => {
		let currentIndex = array.length, randomIndex

		while (currentIndex !== 0) {
			randomIndex = Math.floor(Math.random() * currentIndex)
			currentIndex--

			[array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]]
		}

		return array
	}

	const removeCoinTray = (index) => {
		const coinList = moneyList.filter((_, indexCoin) => indexCoin !== index)

		removeFromTray(moneyTray - moneyList[index])
		setMoneyList(coinList)
	}

	useEffect(() => {
		let coins = [5, 2, 1]
		let change = moneyTray

		for (let i = 0; i < coins.length; i++) {
			if (change >= coins[i]) {
				const bills = Math.floor(change / coins[i])
				const changeBills = Array(bills).fill({
					coin: coins[i],
				})

				setMoneyList((prevState) => [...prevState, ...changeBills])
				change -= bills * coins[i]
			}
		}
	}, [moneyTray])

	return (
		<div className="Tray">
			<div className="tray"></div>
			<div className={`coin_return ${moneyList.length > 0 ? 'active' : '' }`}>
				{shuffle(moneyList).map((bill, index) => (
					<img
						key={index}
						className={`bill bill-${bill.coin}`}
						onClick={() => removeCoinTray(index)}
						src={getCurrencyImage(bill.coin)} 
						alt={bill.coin}/>
				))}
			</div>
		</div>
	)
}

export default Tray