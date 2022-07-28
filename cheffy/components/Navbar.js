import Arrow from './Arrow'

import styles from './index.module.scss'

const Navbar = () => {
	return (
		<div className={styles.nav}>
			<Arrow />
			<a href='/' className={styles.link}>back to profile</a>
		</div>
	)
}

export default Navbar
