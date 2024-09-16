'use client';

import React, { useState, useEffect } from "react";
import styles from 'styles/navigation.module.css'
import Image from "next/legacy/image"
import Link from 'next/link'
import insideImage from "image/top_inside.jpg"
import foodImage from "image/top_food.jpg"
import drinkImage from "image/drink.jpg"
import logoImage from "image/logoImage.jpg"

export default function Navigation() {
    const images = [ insideImage, foodImage, drinkImage ];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // useEffectとsetIntervalを使用して、指定した秒数おきに、上記Stateで管理したindexを切り替えるようにする。
    useEffect(() => {
        // 4秒おきに画像を切り替える（現在のindex+1を画像の数で割ることでループする）
        const timer = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 4000);

        // ページを離れるときにインターバル処理を終了する（これがないとずっと裏でインターバルが動いてしまう。）
        return () => clearInterval(timer);
    });

    return (
        <React.Fragment>
            <div>
                <header className={styles.header}>
                    <Image 
                        className={styles.logoImage}
                        src={logoImage}
                        alt="Top"
                        width={130} 
                        height={60} 
                    />

                    <nav>
                        <ul className={styles.list}>
                            <li><Link href="/#top">Top</Link></li>
                            <li><Link href="/#concept">Concept</Link></li>
                            <li><Link href="/#course">Course</Link></li>
                            <li><Link href="/#menu">Menu</Link></li>
                            <li><Link href="/#news">News</Link></li>
                            <li><Link href="/#calendar">Calendar</Link></li>
                            <li><Link href="/#info">Info</Link></li>
                            <li><Link href="/#reservation">Reservation</Link></li>
                        </ul>
                    </nav>
                </header>
            </div>

            <div className={styles.imageDiv}>
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`${styles.topImage} ${
                            index === currentImageIndex ? "opacity-100" : "opacity-0"
                        }`}
                    >
                        <Image
                            src={image}
                            alt={`Slide ${index}`}
                            layout="fill"
                            className={styles.topImage}
                        />
                    </div>
                ))}
            </div>
        </React.Fragment>
    )
}