import { FC } from 'react'
import styles from './Footer.module.scss'

const Footer: FC = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer_top}>This top</div>
            <div className={styles.footer_bottom}>
                <p>2023 Все права защищены.</p>
            </div>
        </footer>
    )
}

export default Footer
