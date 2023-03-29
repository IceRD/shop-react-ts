import React, { FC } from 'react'
import { Props } from './DefaultLayout.types'
import { Outlet } from 'react-router-dom'
import styles from './DefaultLayout.module.scss'

const DefaultLayout: FC<Props> = () => {
    return (
        <main className={styles.wrapper}>
            <Outlet />
        </main>
    )
}

export default DefaultLayout
