import { FC, createElement } from 'react'
import { Props } from './Button.types'
import styles from './Button.module.scss'
import { cx } from '~/utils'

const Button: FC<Props> = ({ children, block, type = 'button', ...props }) => {
    return createElement(
        'button',
        {
            type: type,
            className: cx(styles.button, block && styles.button_block),
            ...props,
        },
        children,
    )
}

export default Button
