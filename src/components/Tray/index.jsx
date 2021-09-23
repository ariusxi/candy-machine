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
					coin: coins[i]
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
				{moneyList.map((bill, index) => (
					<img
						key={index}
						className="bill"
						onClick={() => removeCoinTray(index)}
						src={getCurrencyImage(bill.coin)} 
						alt={bill.coin}/>
				))}
			</div>
		</div>
	)
}

export default Tray