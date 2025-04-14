
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const BitcoinPrice = () => {
  const [price, setPrice] = useState(null);
  const [lastUpdated, setLastUpdated] = useState(null);

  useEffect(() => {
    const fetchPrice = async () => {
      try {
        const response = await axios.get('https://api.coindesk.com/v1/bpi/currentprice/USD.json');
        setPrice(parseFloat(response.data.bpi.USD.rate.replace(',', '')).toLocaleString());
        setLastUpdated(new Date().toLocaleTimeString());
      } catch (error) {
        console.error('فشل في جلب السعر:', error);
      }
    };

    fetchPrice();
    const interval = setInterval(fetchPrice, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bitcoin-price">
      <h2>سعر البيتكوين الآن:</h2>
      <p>{price ? `${price} USD` : 'جارٍ التحميل...'}</p>
      {lastUpdated && <p>آخر تحديث: {lastUpdated}</p>}
    </div>
  );
};

export default BitcoinPrice;
