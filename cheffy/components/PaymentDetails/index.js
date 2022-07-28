import Chip from '../Chip'
import styles from './index.module.scss'

const PaymentDetails = () => {
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

	return (
		<div className={styles.payment}>
			<h1 className={styles.heading}>Payment methods</h1>
			<div className={styles.cards}>
				<div className={styles.radioSection}>
					<input type='radio' name='payment-option' value='cards' checked />
					<h5 className={styles.title}>Credit or Debit card</h5>
				</div>
				<input className={styles.input} placeholder='Enter card number' />
				<div className={styles.expiryCvv}>
					<input className={styles.input} placeholder='Enter expiry date' />
					<input className={styles.input} placeholder='Enter cvv number' />
				</div>
			</div>
			<div className={styles.digital}>
				<div className={styles.radioSection}>
					<input type='radio' name='payment-option' value='digital' />
					<h5 className={styles.title}>Digital Payment</h5>
				</div>
				<div className={styles.chipContainer}>
					{digitalPaymentOptions.map(option => (
						<Chip {...option} />
					))}
				</div>
			</div>
		</div>
	)
}

export default PaymentDetails
