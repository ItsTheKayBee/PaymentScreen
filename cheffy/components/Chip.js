import styles from './index.module.scss'

const Chip = ({ imgUrl, title, selected = false, setSelectedChip, index }) => {
	const updateSelectedChip = () => {
		setSelectedChip(index)
	}

	return (
		<div
			className={`${styles.chip} ${selected ? styles.selected : ''}`}
			onClick={updateSelectedChip}
		>
			<img src={imgUrl} height={28} width={28} />
			<p className={styles.title}>{title}</p>
		</div>
	)
}

export default Chip
