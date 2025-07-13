import { useState, useEffect } from 'react';

const useCurrencyInfo = (currency) => {
  const [data, setData] = useState({});
  console.log(data);

  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
    )
      .then((res) => res.json())
      .then((data) => setData(data[currency]))
      .catch((error) => console.log(error.message));
  }, [currency]);

  return data;
};

export default useCurrencyInfo;
