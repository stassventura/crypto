"use client"
import React from 'react'
import styles from './Footer.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { RootState } from '@/redux/store';

const Footer = () => {
  const isAuth = useSelector((state: RootState) => state.User.isAuth);

  return (
    <footer className={styles.footerWrapper}>
        <div className={`${styles.footer} container`}>
            <div className={styles.row}>
                <div className={styles.col}>
                    <div className={styles.footerLogo}>
                    <Image src="https://i.ibb.co/xmpbmF2/logo.png" alt="logo" width={'197'} height={'35'}/>
                    </div>
                    <ul className={styles.socialMediaList}>
                        <li className={styles.socialMedia}>
                            <a href="#">
                            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15 0C6.72 0 0 6.72 0 15C0 23.28 6.72 30 15 30C23.28 30 30 23.28 30 15C30 6.72 23.28 0 15 0ZM21.96 10.2C21.735 12.57 20.76 18.33 20.265 20.985C20.055 22.11 19.635 22.485 19.245 22.53C18.375 22.605 17.715 21.96 16.875 21.405C15.555 20.535 14.805 19.995 13.53 19.155C12.045 18.18 13.005 17.64 13.86 16.77C14.085 16.545 17.925 13.05 18 12.735C18.0104 12.6873 18.009 12.6378 17.996 12.5907C17.9829 12.5437 17.9585 12.5005 17.925 12.465C17.835 12.39 17.715 12.42 17.61 12.435C17.475 12.465 15.375 13.86 11.28 16.62C10.68 17.025 10.14 17.235 9.66 17.22C9.12 17.205 8.1 16.92 7.335 16.665C6.39 16.365 5.655 16.2 5.715 15.675C5.745 15.405 6.12 15.135 6.825 14.85C11.205 12.945 14.115 11.685 15.57 11.085C19.74 9.345 20.595 9.045 21.165 9.045C21.285 9.045 21.57 9.075 21.75 9.225C21.9 9.345 21.945 9.51 21.96 9.63C21.945 9.72 21.975 9.99 21.96 10.2Z" fill="#3C4867"/>
                            </svg>

                            </a>
                        </li>
                        <li className={styles.socialMedia}>
                            <a href="#">
                            <svg width="30" height="29" viewBox="0 0 30 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M30 14.5363C30 6.51228 23.28 0 15 0C6.72 0 0 6.51228 0 14.5363C0 21.5719 5.16 27.4301 12 28.782V18.8972H9V14.5363H12V10.9023C12 8.09674 14.355 5.81454 17.25 5.81454H21V10.1754H18C17.175 10.1754 16.5 10.8296 16.5 11.6291V14.5363H21V18.8972H16.5V29C24.075 28.2732 30 22.0807 30 14.5363Z" fill="#3C4867"/>
                            </svg>

                            </a>
                        </li>
                        <li className={styles.socialMedia}>
                            <a href="#">
                            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <mask id="mask0_12_170" style={{"maskType": "alpha"}} maskUnits="userSpaceOnUse" x="0" y="0" width="30" height="30">
                            <circle cx="14.6154" cy="14.6154" r="14.6154" fill="#D9D9D9"/>
                            </mask>
                            <g mask="url(#mask0_12_170)">
                            <path d="M14.6154 -4.61548C3.99439 -4.61548 -4.61539 3.9943 -4.61539 14.6153C-4.61539 25.2363 3.99439 33.8461 14.6154 33.8461C25.2364 33.8461 33.8462 25.2363 33.8462 14.6153C33.8462 3.9943 25.2364 -4.61548 14.6154 -4.61548ZM22.4379 11.1377C22.4459 11.302 22.4479 11.4663 22.4479 11.6265C22.4479 16.6345 18.6398 22.4058 11.6727 22.4058C9.61397 22.4092 7.59809 21.8179 5.86738 20.703C6.16186 20.7391 6.46434 20.7531 6.77083 20.7531C8.54567 20.7531 10.1783 20.1501 11.4744 19.1325C10.6845 19.117 9.91921 18.8555 9.28508 18.3844C8.65094 17.9132 8.17958 17.256 7.9367 16.5043C8.50391 16.6122 9.08824 16.5896 9.64543 16.4382C8.78816 16.2649 8.01722 15.8003 7.46335 15.1234C6.90949 14.4465 6.60678 13.5989 6.60657 12.7243V12.6782C7.11738 12.9606 7.70232 13.1329 8.32331 13.153C7.51963 12.618 6.95069 11.7961 6.73286 10.8555C6.51503 9.91496 6.66476 8.92669 7.15144 8.09285C8.10287 9.26273 9.28938 10.2198 10.6341 10.902C11.9789 11.5842 13.452 11.9764 14.9579 12.0532C14.7665 11.2405 14.8489 10.3873 15.1923 9.62632C15.5358 8.8653 16.121 8.23907 16.8571 7.84499C17.5932 7.4509 18.4388 7.31105 19.2626 7.44716C20.0864 7.58328 20.8421 7.98774 21.4123 8.59766C22.26 8.42994 23.0729 8.11901 23.8161 7.67819C23.5336 8.55586 22.9421 9.30114 22.1514 9.77555C22.9023 9.68511 23.6356 9.48323 24.3269 9.17659C23.8191 9.9376 23.1794 10.6017 22.4379 11.1377Z" fill="#3C4867"/>
                            </g>
                            </svg>

                            </a>
                        </li>
                    </ul>
                    {isAuth ? null : (
                        <div className={styles.actions}>
                        <Link href={'/auth/register'}>
                        <button className='btn secondary'>Register</button>
                        </Link>
                        <Link href={'/auth/login'}>
                        <button className='btn prymary'>Log in</button>
                        </Link>
                    </div>
                    )}
                    
                </div>
                <div className={styles.col}>
                
                </div>
            </div>

            <div className={styles.nav}>
                    <ul className={styles.list}>
                        <li className={styles.listItem}>Trade</li>
                        <li className={styles.listItem}>P2P</li>
                        <li className={styles.listItem}>Partners</li>
                        <li className={styles.listItem}>Mining</li>
                        <li className={styles.listItem}>Academy</li>
                    </ul>
                    <ul className={styles.list}>
                        <li className={styles.listItem}>Privacy policy</li>
                        <li className={styles.listItem}>Terms of rules</li>
                    </ul>
            </div>
        </div>
        <p className={styles.rightDeserved}>
        Bitlist© All Rights Reserved
        </p>
    </footer>
  )
}

export default Footer
