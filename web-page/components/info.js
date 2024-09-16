import React from "react"
import Title from "@/components/title"
import styles from 'styles/content.module.css'

export default function Info() {
    return (
        <React.Fragment>
            <Title title="Info" />
            <div className={styles.container}>
                <div className={styles.content}>
                    <h3>営業時間</h3>
                    <p>ランチ 11:00 ~ 14:00</p>
                    <p>ディナー 17:00 ~ 23:00</p>
                    <br></br>
                    <h3>定休日</h3>
                    <p>日曜日</p>
                    <br></br>
                    <h3>電話番号</h3>
                    <p>03-3528-8266</p>
                    <br></br>
                    <h3>メール</h3>
                    <p>heroscafeandsportsbar@gmail.com</p>
                    <br></br>
                    <h3>住所</h3>
                    <p>東京都千代田区有楽町1-2-14 紫ビル1F</p>
                </div>
            </div>
        </React.Fragment>
    )
}