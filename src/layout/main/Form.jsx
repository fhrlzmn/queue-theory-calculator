import { useContext, useState } from 'react';
import Input from '../../components/Input';
import { QueueContext } from '../../context/QueueContext';

export default function Form() {
  const Context = useContext(QueueContext);

  // Accessing Queue State
  const [lambda, setLambda] = Context.lambda;
  const [micro, setMicro] = Context.micro;
  const [server, setServer] = Context.server;
  const calculate = Context.calculate;

  const [queueType, setQueueType] = useState('M/M/s');

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        calculate();
      }}
      className="flex flex-col gap-4 w-full basis-1/4 p-5 bg-white rounded-lg drop-shadow-sm"
    >
      <div className="flex items-center justify-between">
        <h1 className="text-lg">Type of Queue</h1>
        <select
          className="py-1 border-0 border-b-2 border-blue-300 cursor-pointer hover:ring-b-2"
          onChange={(event) => {
            setQueueType(event.target.value);
            if (event.target.value === 'M/M/1') setServer(1);
          }}
        >
          <option value="M/M/s">M/M/s</option>
          <option value="M/M/1">M/M/1</option>
        </select>
      </div>
      <Input
        label="Arrival Rate"
        title="$\lambda$"
        change={(event) => setLambda(parseInt(event.target.value))}
      />
      <Input
        label="Service Rate"
        title="$\mu$"
        change={(event) => setMicro(parseInt(event.target.value))}
      />
      {queueType === 'M/M/s' ? (
        <Input
          label="Number of Server"
          title="$S$"
          change={(event) => setServer(parseInt(event.target.value))}
        />
      ) : (
        ''
      )}
      <button
        type="submit"
        className="p-2 my-2 bg-blue-400 rounded text-white font-semibold hover:drop-shadow-md hover:bg-red-300"
      >
        Calculate
      </button>
    </form>
  );
}
