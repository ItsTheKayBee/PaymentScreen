import Head from 'next/head'
import BookingDetails from '../components/BookingDetails'
import Navbar from '../components/Navbar'
import PaymentDetails from '../components/PaymentDetails'

import styles from './index.module.scss'

export default () => {
	return (
		<div className={styles.container}>
			<Head>
				<title>Cheffy Payments</title>
			</Head>

			<main className={styles.main}>
				<Navbar />
				<section className={styles.section}>
					<div className={styles.details}>
						<PaymentDetails />
						<BookingDetails />
					</div>
					<div className={styles.payNowContainer}>
						<button className={styles.payNow}>Pay now</button>
					</div>
				</section>
			</main>
		</div>
	)
}
