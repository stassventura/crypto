/* eslint-disable @next/next/no-img-element */
import React from 'react'
import styles from './Advantages.module.scss';

const Advantages = () => {
  return (
    <section className={styles.advantagesWrapper}>
    <div className={`${styles.advantages} container`}>
    
            <div className={styles.advantagesItem}>
                <img src={`./images/credit-card-lock.svg`} alt={`advantage`} />
                <p className={styles.title}>
                User Safe Asset Fund <br />(SAFU)world.
                </p>
                <p className={styles.subtitle}>
                Bitlist holds 10% of all trading fees in a protected asset fund to protect a portion of user funds.
                </p>
            </div>
            <div className={styles.advantagesItem}>
                <img src={`./images/eye.svg`} alt={`advantage`} />
                <p className={styles.title}>
                User Access Control
                </p>
                <p className={styles.subtitle}>
                Personalized access control allows you to limit the devices and addresses that can access your account.
                </p>
            </div>
            <div className={styles.advantagesItem}>
                <img src={`./images/lock-1.svg`} alt={`advantage`} />
                <p className={styles.title}>
                Improved data encryption
                </p>
                <p className={styles.subtitle}>
                Your transaction data is encrypted - only you can access your personal data.
                </p>
            </div>
            <div className={styles.advantagesItem}>
                <img src={`./images/message-dots-circle.svg`} alt={`advantage`} />
                <p className={styles.title}>
                Support 24/7
                </p>
                <p className={styles.subtitle}>
                24/7 real-time support is always ready to help you.
                </p>
            </div>
            <div className={styles.advantagesItem}>
                <img src={`./images/rocket-02.svg`} alt={`advantage`} />
                <p className={styles.title}>
                Fast replineshments <br />and withdraws
                </p>
                <p className={styles.subtitle}>
                Transfer funds to and from your accounts quickly and easily.
                </p>
            </div>
            <div className={styles.advantagesItem}>
                <img src={`./images/coins-swap-01.svg`} alt={`advantage`} />
                <p className={styles.title}>
                Comfortable P2P platform
                </p>
                <p className={styles.subtitle}>
                Top up your account in any convenient way on the P2P platform at favorable rates.
                </p>
            </div>
    </div>
    </section>
  )
}

export default Advantages
