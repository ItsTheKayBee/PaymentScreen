import styles from './index.module.scss'

const BookingDetails = () => {
	return (
		<div className={styles.bookingCard}>
			<h3 className={styles.heading}>Your Booking</h3>
			<h5 className={styles.subHeading}>Hotel Taj - Mumbai</h5>
			<div className={styles.details}>
				<table>
					<tr>
						<td className={styles.cellTitle}>Total Cost</td>
						<td className={styles.cellTitle}>$200 for 2 days</td>
					</tr>
					<tr>
						<td className={styles.cellTitle}>Your share</td>
						<td className={styles.cellTitle}>$100 for 2 days</td>
					</tr>
					<tr>
						<td className={styles.cellTitle}>Jackson’s share</td>
						<td className={styles.cellTitle}>$100 for 2 days</td>
					</tr>
					<tr>
						<td className={styles.cellTitle}>Transcation Charges</td>
						<td className={styles.cellTitle}>$1.75</td>
					</tr>
				</table>
			</div>
			<div className={styles.divider} />
			<div className={styles.total}>
				<div>
					<p className={styles.title}>Price</p>
					<p className={styles.subTitle}>
						Price includes all taxes and transaction charges
					</p>
				</div>
				<div>
					<p className={styles.title}>$101.75</p>
				</div>
			</div>
		</div>
	)
}

export default BookingDetails
