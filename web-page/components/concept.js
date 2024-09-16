import React from "react"
import styles from 'styles/content.module.css'
import Image from 'next/legacy/image'
import outside from 'image/outside.jpg'
import Title from "@/components/title"

export default function Concept() {
    return (
        <React.Fragment>
            <Title title="Concept" subTitle="スポーツを楽しめるバー" />
            <div className={styles.container}>
                <div>
                    <p className={styles.text}>
                        落ち着いた空間の中で、スポーツを楽しめる場所を提供。<br />
                        お酒はもちろん、充実したフードメニューもご用意しております。<br />
                        <br />
                        <br />
                        なんとかなんとか。
                        なんとかなんとか。
                        <br />
                        <br />
                        なんとかなんとか。
                        なんとかなんとか。
                        <br />
                        <br />
                        なんとかなんとか。
                        なんとかなんとか。
                    </p>
                </div>
                <div>
                    <Image
                        className={styles.image}
                        src={outside}
                        alt="outside"
                        width={550} 
                        height={400} 
                    />
                </div>
            </div>
        </React.Fragment>
    )
}