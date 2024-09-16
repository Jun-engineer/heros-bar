import React from "react"
import Title from "@/components/title"
import styles from 'styles/content.module.css'
import Image from 'next/legacy/image'
import food from 'image/food.jpg'

export default function Party() {
    return (
        <React.Fragment>
            <Title title="Party" subTitle="貸し切りでのパーティーも" />
            <div className={styles.container}>
                <div>
                    <Image 
                        className={styles.image}
                        src={food}
                        alt="food"
                        width={550}
                        height={400} 
                    />
                </div>
                <div>
                    <p className={styles.text}>
                        当店は貸し切りも可能です。<br />
                        お気軽にお問い合わせください。<br />
                        <br />
                        <br />
                        なんとかなんとか。なんとかなんとか。<br />
                        <br />
                        なんとかなんとか。なんとかなんとか。<br />
                        <br />
                        なんとかなんとか。なんとかなんとか。<br />
                    </p>
                </div>
            </div>
        </React.Fragment>
    )
}