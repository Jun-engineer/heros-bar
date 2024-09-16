import styles from 'styles/title.module.css'

export default function Title({ title, subTitle }) {
    return (
        <div className={styles.main}>
            <h2 className={styles.h2}>{title}</h2>
            <h3 className={styles.h3}>{subTitle}</h3>
        </div>
    )
}