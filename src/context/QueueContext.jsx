import { useState, createContext } from 'react';

// Operation
import { probabilityZeroCustomer } from '../operations/probabilityZeroCustomer.js';
import {
  averageCustomer,
  averageCustomerInQueue,
} from '../operations/averageCustomer.js';
import {
  averageTimeSpent,
  averageTimeSpentInQueue,
} from '../operations/averageTimeSpent.js';
import { trafficIntensity } from '../operations/trafficIntensity.js';
import { probabilityServerBusy } from '../operations/probabilityServerBusy.js';

export const QueueContext = createContext();

export default function QueueProvider({ children }) {
  const [lambda, setLambda] = useState(0);
  const [micro, setMicro] = useState(0);
  const [server, setServer] = useState(0);
  const [result, setResult] = useState({
    Rho: 0,
    P0: 0,
    L: 0,
    Lq: 0,
    W: 0,
    Wq: 0,
    Pq: 0,
  });

  function reset() {
    setLambda(0);
    setMicro(0);
    setServer(0);
    setResult({ Rho: 0, P0: 0, L: 0, Lq: 0, W: 0, Wq: 0, Pq: 0 });
  }

  function calculate() {
    const resultObject = {
      P0: probabilityZeroCustomer(lambda, micro, server),
      L: averageCustomer(lambda, micro, server),
      Lq: averageCustomerInQueue(lambda, micro, server),
      W: averageTimeSpent(lambda, micro, server),
      Wq: averageTimeSpentInQueue(lambda, micro, server),
      Rho: trafficIntensity(lambda, micro, server),
      Pq: probabilityServerBusy(lambda, micro, server),
    };

    setResult(resultObject);
  }

  return (
    <QueueContext.Provider
      value={{
        lambda: [lambda, setLambda],
        micro: [micro, setMicro],
        server: [server, setServer],
        result: [result, setResult],
        calculate,
        reset,
      }}
    >
      {children}
    </QueueContext.Provider>
  );
}
