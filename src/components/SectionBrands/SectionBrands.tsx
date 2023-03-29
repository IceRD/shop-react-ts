import { FC } from 'react'
import styles from './SectionBrands.module.scss'
import { ImageCard } from '~/ui'

const arr = Array(12).fill({
    src: 'https://cloud.bh.market/front/brands/shofu.png',
    alt: '',
})

const SectionBrands: FC = () => {
    return (
        <section>
            <div className={styles.section_header}>
                <h2> Представленные бренды </h2>
            </div>

            <div className={styles.section_body}>
                <div className={styles.image_card_items}>
                    {arr &&
                        arr.map((one) => (
                            <ImageCard
                                className={styles.image_card_item}
                                key={one.src}
                                src={one.src}
                                alt={one.alt}
                            />
                        ))}
                </div>
            </div>
        </section>
    )
}

export default SectionBrands
