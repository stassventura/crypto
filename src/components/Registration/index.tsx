import React from 'react'
import SignIn from '../SignIn';
import styles from './Registration.module.scss';

const Registration = () => {
  return (
    <section className={styles.registrationWrapper}>
      <div className={`${styles.registration} container`}>
        <h1 className={styles.registerNow}>Register your account now <br />and start to trade</h1>

        <div className={styles.signWrapper}>
            <SignIn/>
        </div>
      </div>
    </section>
  )
}

export default Registration
