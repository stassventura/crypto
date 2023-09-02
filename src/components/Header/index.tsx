"use client"
import React, {useState} from 'react'
import styles from './Header.module.scss'
import Image from 'next/image';
import Link from 'next/link';
import Sidebar from '../Sidebar';
import OutsideClickHandler from 'react-outside-click-handler';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { RootState } from '@/redux/store';
import Cookies from 'js-cookie';

const Header = () => {
    const [isSidebarActive, setIsSidebarActive] = useState(false)
    const isAuth = useSelector((state: RootState) => state.User.isAuth);
    const user = useSelector((state: RootState) => state.User.user);
    const [isProfileDetailsActive, setIsProfileDetailsActive] = useState(false)

    const logout = () =>{
        Cookies.remove('token');
        window.location.reload();
    }
  return (
  <>
    <header className={styles.headerWrapper}>
        <div  className={`container ${styles.header}`}>
            <Link href={'/'}>
                <div className={styles.headerLogo}>
                    <Image src="https://i.ibb.co/xmpbmF2/logo.png" alt="logo" width={'197'} height={'35'}/>
                </div>
            </Link>
            
            <div className={styles.devider}>
            <svg xmlns="http://www.w3.org/2000/svg" width="2" height="26" viewBox="0 0 2 26" fill="none">
            <path d="M1 1L0.999999 25" stroke="#252C41" strokeLinecap="round"/>
            </svg>
            </div>
            <div className={styles.searchGroup}>
                <input type="text" placeholder='Search' className={styles.searchInput}/>
                <span className={styles.searchIco}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M17.5 17.5L14.5834 14.5833M16.6667 9.58333C16.6667 13.4954 13.4954 16.6667 9.58333 16.6667C5.67132 16.6667 2.5 13.4954 2.5 9.58333C2.5 5.67132 5.67132 2.5 9.58333 2.5C13.4954 2.5 16.6667 5.67132 16.6667 9.58333Z" stroke="#B2BEE2" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                </span>
            </div>
            <ul className={styles.navList}>
                <li className={styles.navItem}>
                    Trade 
                </li>
                <li className={styles.navItem}>
                    P2P
                </li>
                <li className={styles.navItem}>
                    Partners
                </li>
                <li className={styles.navItem}>
                    Mining
                </li>
                <li className={styles.navItem}>
                    Academy
                </li>
            </ul>
            <div className={styles.devider}>
            <svg xmlns="http://www.w3.org/2000/svg" width="2" height="26" viewBox="0 0 2 26" fill="none">
            <path d="M1 1L0.999999 25" stroke="#252C41" strokeLinecap="round"/>
            </svg>
            </div>
            {isAuth ?(
            <div className={styles.profile}>
                <div className={styles.name} onMouseEnter={()=>setIsProfileDetailsActive(true)}>
                {user?.name}
                </div>

                <OutsideClickHandler onOutsideClick={()=>setIsProfileDetailsActive(false)}>
                <div className={`${styles.profileDetails} ${isProfileDetailsActive ? styles.detailsActive : ''}`}>
                    <div className={styles.userBalance}>
                    {(!user?.balance || Object.keys(user.balance).length === 0) ? <>you don{`'`}t have the money yet.</> : (<>
                    {Object.entries(user.balance).map(([currency, amount]) => (
                    <div key={currency}>
                        {currency.toUpperCase()}: {amount}
                    </div>
                    ))}
                    
                    </>)}
                    </div>

                    <button className={styles.logout} onClick={()=>logout()}>Logout</button>
                </div>
                </OutsideClickHandler>

               
             
             </div>
            ) : (
                <div className={styles.actions}>
                <Link href={'/auth/register'}>
                    <button className='btn secondary'>Register</button>
                </Link>
                <Link href={'/auth/login'}>
                    <button className='btn prymary'>Log in</button>
                </Link>
                </div>
            )}
           
            <div className={styles.burgerMenu} onClick={()=>setIsSidebarActive(!isSidebarActive)}>
            <svg viewBox="0 0 100 80" width="40" height="40" fill='#5dccfe'>
                <rect width="80" height="10" rx="10"></rect>
                <rect y="20" width="80" height="10" rx="10"></rect>
                <rect y="40" width="80" height="10" rx="10"></rect>
                </svg>
            </div>
        </div>
    </header>
    <div className={styles.headerMargin}>
    </div>
    <Sidebar isSidebarActive={isSidebarActive} setIsSidebarActive={setIsSidebarActive}/>
  </>
  )
}

export default Header
