import React, { useState, useEffect } from 'react'

import Candy from './../Candy'

import Bill1 from './../../assets/images/currencies/real bill - 1.png'
import Bill2 from './../../assets/images/currencies/real bill - 2.png'
import Bill3 from './../../assets/images/currencies/real bill - 5.png'

import TraySoundClose from './../../assets/sounds/tray-sound-close.mp3'

import './styles.css'

const Tray = ({ 
	candyTray,
	moneyTray, 
	removeFromTray,
}) => {
	const [candyList, setCandyList] = useState([])
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

	const removeFromArray = (array, index) => {
		return array.filter((_, indexArray) => indexArray !== index)
	}

	const removeCoinTray = (index) => {
		const coinList = removeFromArray(moneyList, index)

		if (coinList.length <= 0) {
			new Audio(TraySoundClose).play()
		}

		removeFromTray(moneyTray - moneyList[index])
		setMoneyList(coinList)
	}

	const removeCandyTray = (index) => {
		const candyTrayList = removeFromArray(candyList, index)

		if (candyTrayList.length <= 0) {
			new Audio(TraySoundClose).play()
		}

		removeFromTray(moneyTray, null)
		setCandyList(candyTrayList)
	}

	useEffect(() => {
		const getBillsByChange = () => {
			let coins = [5, 2, 1]
			let change = moneyTray

			setMoneyList([])

			for (let i = 0; i < coins.length; i++) {
				if (change >= coins[i]) {
					const bills = Math.floor(change / coins[i])
					const changeBills = Array(bills).fill({
						coin: coins[i],
					})

					setMoneyList((prevState) => 
						shuffle([...prevState, ...changeBills])
					)
					change -= bills * coins[i]
				}
			}
		}

		setTimeout(() => getBillsByChange(), 2000)
	}, [moneyTray])

	useEffect(() => {
		const getCandyByPrice = () => {
			if (!candyTray) return

			setCandyList((prevState) => [...prevState, candyTray])
		}

		setTimeout(() => getCandyByPrice(), 2000)
	}, [candyTray])

	return (
		<div className="Tray">
			<div className={`tray ${candyList.length > 0 ? 'active' : ''}`}>
				{candyList.map((candy, index) => (
					<Candy
						key={index}
						candyImage={candy.candyImage}
						isFullSize={candy.isFullSize}
						onClick={() => removeCandyTray(index)}/>
				))}
			</div>
			<div className={`coin_return ${moneyList.length > 0 ? 'active' : '' }`}>
				{moneyList.map((bill, index) => (
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