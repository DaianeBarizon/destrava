import { useState } from "react";

import { simulateExchange } from "../03-simulator-function";
import { Button, Container, MoneyInput, Result } from "../ui";

export function Simulator() {
  const [result, setResult] = useState(0);
  const [amount, setAmount] = useState(0);

  const handle = () => {
    const resultValue = simulateExchange(amount, "USD");

    setResult(resultValue.ask);
  };

  return (
    <Container>
      <MoneyInput value={amount} onChange={(event: any) => setAmount(event.target.value)} />

      <Button onClick={() => handle()} />

      <Result value={result} />
    </Container>
  );
}
