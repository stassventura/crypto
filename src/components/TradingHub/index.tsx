/* eslint-disable @next/next/no-img-element */
import React from 'react'
import styles from './TradingHub.module.scss';

const TradingHub = () => {
  return (
    <section className={styles.tradingHubWrapper}>
        <div className={`${styles.tradingHub} container`}>
        <div className={`${styles.content} container`}>
            <h1 className={styles.title}>
            Bitles is your reliable guide in <br />the world of digital assets
            </h1>
            <h5 className={styles.subtitle}>
            The Bitles app is a comprehensive solution for trading digital assets. Buy and sell cryptocurrencies quickly and openly, comfortably and safely from anywhere in the world.
            </h5>
        </div>
        <div className={styles.illustration}>
            <img src='./images/illExchanges.svg' alt=''/>
        </div>
        </div>
    </section>
  )
}

export default TradingHub
