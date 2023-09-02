"use client"
import React from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';

const LoadingPage = () => {
  const isLoading = useSelector((state: RootState) => state.User.isLoading);

  return (
    <> 
    {isLoading && (
      <div className='loading-page'>
      <div className="loader"></div>
    </div>
    )}
    </>
  )
}

export default LoadingPage
