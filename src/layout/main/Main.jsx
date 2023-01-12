import Form from './Form';
import Result from './Result';
import { MathJax } from 'better-react-mathjax';

export default function Main() {
  return (
    <MathJax>
      <div className="flex w-full flex-col lg:flex-row rounded-md gap-4">
        <Form />
        <Result />
      </div>
    </MathJax>
  );
}
