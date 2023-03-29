import { FC } from 'react'
import styles from './Header.module.scss'

const Header: FC = () => {
    return (
        <header className={styles.header}>
            <div>header-top</div>
            <div>header-middle</div>
            <div>header-bottom</div>
        </header>
    )
}

export default Header
