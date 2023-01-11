import Form from './Form';
import Result from './Result';

export default function Main() {
  return (
    <div className="flex w-full flex-col lg:flex-row rounded-md gap-4">
      <Form />
      <Result />
    </div>
  );
}
