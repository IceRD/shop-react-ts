import React, { FC } from 'react'
import { Props } from './ErrorLayout.types'
import { Outlet } from 'react-router-dom'
import styles from './ErrorLayout.module.scss'

const ErrorLayout: FC<Props> = () => {
    return (
        <main className="{styles.wrapper}">
            <Outlet />
        </main>
    )
}

export default ErrorLayout
