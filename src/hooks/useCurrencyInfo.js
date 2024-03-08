import {useState, useEffect} from "react";


export const useCurrencyInfo = (currency) => {
    const [data, setData] = useState({});
  useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((res) => res.json())
        .then((datas) => setData(datas[currency]));
  });
  return data;
}
 export default useCurrencyInfo ;
