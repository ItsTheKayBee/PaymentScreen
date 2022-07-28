import { useState } from 'react'

import Chip from '../Chip'
import styles from './index.module.scss'

const digitalPaymentOptions = [
	{
		imgUrl: '/images/paypal.png',
		title: 'Paypal'
	},
	{
		imgUrl: '/images/googlePay.png',
		title: 'Google Pay'
	},
	{
		imgUrl: '/images/netBanking.png',
		title: 'Net banking'
	}
]
const PaymentDetails = () => {
	const [selectedChip, setSelectedChip] = useState(-1)
	const [selectedPaymentOption, setSelectedPaymentOption] = useState(0)

	return (
		<div className={styles.payment}>
			<h1 className={styles.heading}>Payment methods</h1>
			<div
				className={`${styles.cards} ${
					selectedPaymentOption === 0 ? styles.selected : ''
				}`}
				onClick={() => setSelectedPaymentOption(0)}
			>
				<div className={styles.radioSection}>
					<span className={styles.checkmark}></span>
					<h5 className={styles.title}>Credit or Debit card</h5>
				</div>
				<input className={styles.input} placeholder='Enter card number' />
				<div className={styles.expiryCvv}>
					<input className={styles.input} placeholder='Enter expiry date' />
					<input
						className={styles.input}
						placeholder='Enter cvv number'
						maxLength={3}
					/>
				</div>
			</div>
			<div
				className={`${styles.digital} ${
					selectedPaymentOption === 1 ? styles.selected : ''
				}`}
				onClick={() => setSelectedPaymentOption(1)}
			>
				<div className={styles.radioSection}>
					<span className={styles.checkmark}></span>
					<h5 className={styles.title}>Digital Payment</h5>
				</div>
				<div className={styles.chipContainer}>
					{digitalPaymentOptions.map((option, key) => (
						<Chip
							{...option}
							key={key}
							index={key}
							selected={selectedChip === key && selectedPaymentOption === 1}
							setSelectedChip={setSelectedChip}
						/>
					))}
				</div>
			</div>
		</div>
	)
}

export default PaymentDetails
