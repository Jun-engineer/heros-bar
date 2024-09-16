import React from "react"
import Title from "@/components/title"
import styles from 'styles/menu.module.css'
import Image from 'next/legacy/image'
import foodImage from 'image/curry.jpg'
import drinkImage from 'image/drink.jpg'

export default function Menu() {
    return (
        <React.Fragment>
            <Title title="Menu"　subTitle="たっぷり楽しめる豊富なメニュー" />
            <div className={styles.container}>
                <div>
                    <Image
                        src={foodImage}
                        alt="outside"
                        width={200}
                        height={150}
                    />
                    <h3>フード</h3>
                    <nav className={styles.list}>
                        <ul>
                            <li><a href="">グランドメニュー</a></li>
                            <li><a href="">スナック</a></li>
                        </ul>
                    </nav>
                </div>
                <div>
                    <Image
                        src={drinkImage}
                        alt="outside"
                        width={200}
                        height={150}
                    />
                    <h3>ドリンク</h3>
                    <nav className={styles.list}>
                        <ul>
                            <li><a href="">ウィスキー</a></li>
                            <li><a href="">ワイン</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </React.Fragment>
    )
}