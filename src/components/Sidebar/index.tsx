import React from 'react'
import styles from '../Header/Header.module.scss'
import OutsideClickHandler from 'react-outside-click-handler';
import Link from 'next/link';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { RootState } from '@/redux/store';
import Cookies from 'js-cookie';

interface Props{
    isSidebarActive: boolean
    setIsSidebarActive: (value: boolean)=> void
}

const Sidebar = ({isSidebarActive, setIsSidebarActive}: Props) => {
    const isAuth = useSelector((state: RootState) => state.User.isAuth);
    const user = useSelector((state: RootState) => state.User.user);

    const logout = () =>{
        Cookies.remove('token');
        window.location.reload();
    }
  return (
    <>
    <OutsideClickHandler onOutsideClick={()=>setIsSidebarActive(false)}>

        <aside className={`${styles.sidebar} ${isSidebarActive ? styles.sidebarActive : ''}`}>
        <div className={styles.close} onClick={()=>setIsSidebarActive(!isSidebarActive)}>
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 30 30"
            style={{fill:"#5dccfe"}}>
                <path d="M 7 4 C 6.744125 4 6.4879687 4.0974687 6.2929688 4.2929688 L 4.2929688 6.2929688 C 3.9019687 6.6839688 3.9019687 7.3170313 4.2929688 7.7070312 L 11.585938 15 L 4.2929688 22.292969 C 3.9019687 22.683969 3.9019687 23.317031 4.2929688 23.707031 L 6.2929688 25.707031 C 6.6839688 26.098031 7.3170313 26.098031 7.7070312 25.707031 L 15 18.414062 L 22.292969 25.707031 C 22.682969 26.098031 23.317031 26.098031 23.707031 25.707031 L 25.707031 23.707031 C 26.098031 23.316031 26.098031 22.682969 25.707031 22.292969 L 18.414062 15 L 25.707031 7.7070312 C 26.098031 7.3170312 26.098031 6.6829688 25.707031 6.2929688 L 23.707031 4.2929688 C 23.316031 3.9019687 22.682969 3.9019687 22.292969 4.2929688 L 15 11.585938 L 7.7070312 4.2929688 C 7.5115312 4.0974687 7.255875 4 7 4 z"></path>
            </svg>
        </div>
        
        {isAuth ? (
            <button className={styles.logout} onClick={()=>logout()}>
                Logout 
            </button>
        ) : null}
        {!isAuth ? (
        <div className={styles.sideBarActions}>
            <Link href={'/auth/login'} onClick={()=>setIsSidebarActive(false)}>
                <button className='btn prymary'>Log in</button>
            </Link>
            <Link href={'/auth/register'} onClick={()=>setIsSidebarActive(false)}>
                <button className='btn secondary'>Register</button>
            </Link>
        </div>
        ) : (<div className={styles.profileDetails}>
            <h2>Welcome back, {user?.name}!</h2>

            <div className={styles.userBalance}>
                {(!user?.balance || Object.keys(user.balance).length === 0) ? <>you don{`'`}t have the money yet.</> : (<>
                {Object.entries(user.balance).map(([currency, amount]) => (
                <div key={currency}>
                    {currency.toUpperCase()}: {amount}
                </div>
                ))}
                
                </>)}
            </div>
        </div>)}
        {isAuth && user?.role === 'admin' ? (
            <Link href={'/adminPanel'} onClick={()=>setIsSidebarActive(false)}>
                <button className={styles.adminPanel}>Admin Panel</button>
            </Link>
        ) : null}
        <ul className={`${styles.navList} ${isAuth ? styles.bottom : ''}`}>
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
            <p className={styles.rightDeserved}>
            Bitlist© All Rights Reserved
            </p>
    </aside>
    </OutsideClickHandler>
    </>
  )
}

export default Sidebar
