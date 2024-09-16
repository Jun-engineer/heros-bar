import React from "react"
import Title from "@/components/title"
import styles from 'styles/news.module.css'

export default function News() {
    return (
        <React.Fragment>
            <Title title="News" />
            <div className={styles.container}>
                <div className={styles.content}>
                    <ul>
                        <li>2021/10/01: サイトをリニューアルしました。</li>
                        <li>2021/09/01: お盆休みのお知らせ</li>
                        <li>2021/08/01: お盆休みのお知らせ</li>
                        <li>2021/07/01: お盆休みのお知らせ</li>
                        <li>2021/06/01: お盆休みのお知らせ</li>
                    </ul>
                </div>
            </div>
        </React.Fragment>
    )
}