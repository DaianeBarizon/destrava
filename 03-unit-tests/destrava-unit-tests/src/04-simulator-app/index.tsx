import { useState } from 'react'

import { Button, Container, MoneyInput, Result } from '../ui'

import { simulateExchange } from '../03-simulator-function'

export function Simulator() {
  const [result, setResult] = useState(0)
  const [amount, setAmount] = useState(0)

  const handleSimulate = () => {
    return setResult((simulateExchange(amount, 'USD')).ask)
  }

  return (
    <Container>
      <MoneyInput onChange={(event) => setAmount(event.target.value)} />

      <Button onClick={() => handleSimulate()} />

      <Result value={result} />
    </Container>
  )
}
