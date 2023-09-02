"use client"
import Advantages from '@/components/Advantages'
import Assets from '@/components/Assets'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import MainBanner from '@/components/MainPage/MainBanner'
import Registration from '@/components/Registration'
import TradingHub from '@/components/TradingHub'
import React from 'react'
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { RootState } from '@/redux/store';

const Home = () => {
  const isAuth = useSelector((state: RootState) => state.User.isAuth);

  return (
    <>
      <MainBanner/>
      <Assets/>
      <TradingHub/>
      <Advantages/>
      {!isAuth && <Registration/>}
      
    </>
  )
}

export default Home
