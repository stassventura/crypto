"use client";
import React, { useState, useEffect } from 'react';
import SignIn from '../SignIn';
import styles from './Assets.module.scss';
import axios from 'axios';
import Image from 'next/image';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { RootState } from '@/redux/store';
import Link from 'next/link';
interface CryptoData {
  asset: string;
  price: number;
  change: string;
  volume: string;
  symbol: string
}

const Assets = () => {
  const [cryptoData, setCryptoData] = useState<{ [pair: string]: CryptoData }>({});
  const isCryptoDataEmpty = Object.keys(cryptoData).length === 0;
  const placeholderArray = new Array(6).fill({});
  const [cryptoCount, setCryptoCount] = useState(6)
  const [isCardsOpen, setIsCardsOpen] = useState(false)
  const isAuth = useSelector((state: RootState) => state.User.isAuth);
  const user = useSelector((state: RootState) => state.User.user);
  
  function formatPrice(priceInput: any) {
    const price = parseFloat(priceInput);

    if (isNaN(price)) return "Invalid Price";

    if (price < 1) return price.toFixed(2);

    const integerPart = Math.floor(price).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    const decimalPart = (price % 1).toFixed(2).substr(1);

    return integerPart + decimalPart;
}

  useEffect(() => {
    axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/cryptoList`)
      .then(response => {
        const cryptoList = response.data;
  
        const combinedStreams = cryptoList
          .map((crypto: any) => `${crypto.symbol.toLowerCase()}usdt@ticker`)
          .join('/');
  
        const socketUrl = `wss://stream.binance.com:9443/stream?streams=${combinedStreams}`;
  
        const ws = new WebSocket(socketUrl);
  
        // ws.onopen = () => {
        //   console.log("Соединение с Binance установлено");
        // };

        ws.onmessage = (event) => {
          const res = JSON.parse(event.data);
          const data = res.data;
          if (data.e && data.e === "24hrTicker") {
              const symbol = data.s.toLowerCase();
              const asset = cryptoList.find((crypto: any) => `${crypto.symbol.toLowerCase()}usdt` === symbol);
              
              if (asset && asset.display) {
                  const currentPrice = parseFloat(data.c).toFixed(2);
                  const percentageChange = parseFloat(data.P).toFixed(2);
                  const volume = parseFloat(data.v).toFixed(0);
                  
                  const updatedData = {
                      asset: asset.asset,
                      symbol: asset.symbol,
                      price: formatPrice(currentPrice),
                      change: `${percentageChange}%`,
                      volume
                  };
                  // Обновляем состояние для этой криптовалюты
                  setCryptoData(prevState => ({
                      ...prevState,
                      [asset.symbol]: updatedData
                  }));
              }
          }
      };
        ws.onerror = (error) => {
          console.error("Ошибка вебсокета:", error);
        };
  
        // ws.onclose = (event) => {
        //   if (event.wasClean) {
        //       console.log('Соединение закрыто чисто');
        //   } else {
        //       console.error('Обрыв соединения'); 
        //   }
        //   console.log('Код: ' + event.code + ' причина: ' + event.reason);
        // };
  
        window.addEventListener('beforeunload', () => ws.close());
  
        return () => {
          ws.close();
        };
      })
      .catch(error => {
        console.error(error);
      });
  
  }, []);

  const openAll = () =>{
    setIsCardsOpen(!isCardsOpen)
    if(cryptoCount === 6){
      setCryptoCount(0)
    }else{
      setCryptoCount(6)
    }
  }

  return (
    <section className={styles.assetsWrapper}>
      <div className={`container ${styles.assets}`}>
        {isAuth ? null : (
          <div className={styles.signInWrapper}>
            <SignIn />
          </div>
        )}
         {isAuth && user?.role === 'admin' ? (
              <Link href={'/adminPanel'} className={styles.adminPanel}>
               Admin Panel
              </Link>
        ) : null}
      <div className={styles.assetsTable}>
        <div className={styles.tableHeader}>
          <div className={styles.assetName}>
            Asset
          </div>
          <div className={styles.assetPrice}>Price</div>
          <div className={styles.assetChange}>Change</div>
          <div className={styles.assetVolume}>Volume</div>
        </div>
    {isCryptoDataEmpty ? placeholderArray.map((_, index) => (
      <div key={index} className={styles.tableRow}>
        <div className={styles.assetName}>
          <div className={styles.assetNamePlaceholder}></div>
        </div>
        <div className={`${styles.assetPrice}`}>
          <div className={styles.assetPricePlaceholder}></div>
        </div>
        <div className={`${styles.assetChange}`}>
        <div className={styles.assetChangePlaceholder}></div>
        </div>
        <div className={`${styles.assetVolume}`}>
        <div className={styles.assetVolumePlaceholder}></div>
        </div>
        <button className={styles.tradeBtn}>Trade</button>
      </div>
      )) : 
    (cryptoCount === 0 ? Object.values(cryptoData) : Object.values(cryptoData).slice(0, cryptoCount)).map(coin => (
      <div key={coin.symbol} className={styles.tableRow}>
        <div className={styles.assetName}>
          <Image src={`./images/crypto-icons/${coin.symbol}.svg`} alt={coin.asset} width={30} height={30}/>
            <span className={styles.name}>{coin.asset}</span>
            <span className={styles.symbol}>{coin.symbol}</span>
      </div>
      <div className={`${styles.assetPrice}`}>
        $ {coin.price}
      </div>
      <div className={`${styles.assetChange} ${coin.change.includes('-') ? styles.red : styles.green}`}>{coin.change}</div>
      <div className={styles.assetVolume}>{coin.volume}</div>
      <button className={styles.tradeBtn}>Trade</button>
      </div>
      ))}
      </div>
      <button className={styles.viewAllAssets} onClick={()=>openAll()}>
        {isCardsOpen ? <>Hide all assets</> : <>All assets</>}  
      </button>
      </div>
      
    </section>
  );
};

export default Assets;
