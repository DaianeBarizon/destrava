import { useState, useEffect } from "react";

const URL = "https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL";

export default function useCurrencies() {
  const [loading, setLoading] = useState(true);
  const [exchangeValues, setExchangeValues] = useState<any[]>([]);

  useEffect(() => {
    const getCurrencies = async () => {
      try {
        setLoading(true);

        const response = await fetch(URL);
        const result = await response.json();
        const resultArray = Object.values(result).map((item: any) => ({
          ...item
        }));

        setExchangeValues(resultArray);
      } catch (error) {
      } finally {
        setLoading(false);
      }
    };

    getCurrencies();
  }, []);

  return {
    loading,
    exchangeValues
  };
}
