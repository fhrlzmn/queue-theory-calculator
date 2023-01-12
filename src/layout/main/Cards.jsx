import Card from '../../components/Card';

import { useContext } from 'react';
import { QueueContext } from '../../context/QueueContext';

export default function ResultCards() {
  const Context = useContext(QueueContext);
  const [result, setResult] = Context.result;

  const cards = [
    {
      result: result.L,
      unit: 'Customers',
      title: '$L$',
      desc: 'Average Customers in System',
    },
    {
      result: result.Lq,
      unit: 'Customers',
      title: '$Lq$',
      desc: 'Average Customers in Queue',
    },
    {
      result: result.W,
      unit: 'Hours',
      title: '$W$',
      desc: 'Average Time spent in System',
    },
    {
      result: result.Wq,
      unit: 'Hours',
      title: '$Wq$',
      desc: 'Average Time spent in Queue',
    },
    {
      result: result.Rho,
      unit: 'Percent',
      title: '$\\rho$',
      desc: 'Traffic Intensity',
    },
    {
      result: result.P0,
      unit: 'Percent',
      title: '$P_0$',
      desc: 'Probability 0 Customer in System',
    },

    {
      result: result.Pq,
      unit: 'Percent',
      title: '$P_q$',
      desc: 'Probability Server Busy',
    },
  ];

  return (
    <>
      {cards.map((card) => (
        <Card
          key={card.title}
          result={card.result}
          unit={card.unit}
          title={card.title}
          desc={card.desc}
        />
      ))}
    </>
  );
}
