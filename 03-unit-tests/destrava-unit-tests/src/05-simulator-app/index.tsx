import React, { useEffect, useState } from "react";

import { Button, Container, Loading, MoneyInput, Result, Select } from "../ui";

import useCurrencies from "./use-currencies";

export function SimulatorMock() {
  const [amount, setAmount] = useState(0);
  const [currency, setCurrency] = useState<any>();
  const [result, setResult] = useState(0);
  const [options, setOptions] = useState([]);

  const { exchangeValues, loading }: any = useCurrencies();

  const handleSimulate = () => {
    setResult(amount * currency.bid);
  };

  useEffect(() => {
    const options = exchangeValues.map((item: any) => ({
      name: item.name,
      value: item.code
    }));

    setOptions(options);
  }, [exchangeValues]);

  return (
    <Container>
      {loading ? (
        <Loading />
      ) : (
        <React.Fragment>
          <Select
            options={options}
            onChange={(event) => {
              const selected = exchangeValues.find(
                (exchange: any) => exchange.code === event.target.value
              );

              setCurrency(selected);
            }}
          />

          <MoneyInput onChange={(event) => setAmount(event.target.value)} />

          <Button onClick={() => handleSimulate()} />

          <Result value={result} />
        </React.Fragment>
      )}
    </Container>
  );
}
