import React, { FC } from 'react'
import { Props } from './DefaultLayout.types'
import { Outlet } from 'react-router-dom'
import styles from './DefaultLayout.module.scss'
import { Header, Footer } from '~/components'

const DefaultLayout: FC<Props> = () => {
    return (
        <div className={styles.wrapper}>
            <Header />

            <main className={styles.main}>
                <Outlet />
            </main>

            <Footer />
        </div>
    )
}

export default DefaultLayout
