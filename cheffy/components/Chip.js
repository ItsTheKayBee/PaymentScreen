import styles from './index.module.scss'

const Chip = ({ imgUrl, title }) => {
	return (
		<div className={styles.chip}>
			<img src={imgUrl} height={28} width={28} />
			<p className={styles.title}>{title}</p>
		</div>
	)
}

export default Chip
