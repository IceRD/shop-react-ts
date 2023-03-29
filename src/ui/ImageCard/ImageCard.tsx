import { FC, createElement } from 'react'
import { Props } from './ImageCard.types'
import styles from './ImageCard.module.scss'
import { cx } from '~/utils'

const ImageCard: FC<Props> = ({ src, alt, className, ...props }) => {
    return createElement(
        'div',
        {
            className: cx(styles.short_card, className),
            ...props,
        },
        createElement('img', { src, alt }),
    )
}

export default ImageCard
