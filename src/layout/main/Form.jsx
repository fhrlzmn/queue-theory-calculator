import { useContext, useState } from 'react';
import Alert from '../../components/Alert';
import Input from '../../components/Input';
import { QueueContext } from '../../context/QueueContext';

export default function Form() {
  const Context = useContext(QueueContext);

  // Accessing Queue State
  const [lambda, setLambda] = Context.lambda;
  const [micro, setMicro] = Context.micro;
  const [server, setServer] = Context.server;
  const calculate = Context.calculate;

  const [isError, setIsError] = useState(false);

  const [queueType, setQueueType] = useState('M/M/s');

  function closeAlert() {
    setIsError(false);
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (lambda === 0 || micro === 0 || server === 0) {
          setIsError(true);
        } else {
          calculate();
        }
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
      {isError ? <Alert click={closeAlert} /> : ''}
      <Input
        label="Arrival Rate"
        title="λ"
        change={(event) => setLambda(parseInt(event.target.value))}
      />
      <Input
        label="Service Rate"
        title="μ"
        change={(event) => setMicro(parseInt(event.target.value))}
      />
      {queueType === 'M/M/s' ? (
        <Input
          label="Number of Server"
          title="s"
          change={(event) => setServer(parseInt(event.target.value))}
        />
      ) : (
        ''
      )}
      <button
        type="submit"
        className="p-2 my-2 bg-blue-400 rounded text-white font-semibold hover:drop-shadow-md hover:bg-blue-500 active:bg-red-400"
      >
        Calculate
      </button>
    </form>
  );
}
