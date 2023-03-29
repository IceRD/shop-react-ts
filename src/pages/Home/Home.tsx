import React, { FC } from 'react'
import { Props } from './Home.types'
import styles from './Home.module.scss'

import { SectionBrands } from '~/components'

const Home: FC<Props> = () => {
    return (
        <>
            <SectionBrands />
        </>
    )
}

export default Home
