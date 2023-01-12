import { MathJax } from 'better-react-mathjax';

export default function Input({ title = '', label = 'label', change }) {
  return (
    <div>
      <label className="opacity-50">{label}</label>
      <div className="relative flex items-center">
        <label className="absolute text-center border-r-2 w-8">
          <MathJax>{title}</MathJax>
        </label>
        <input
          type="number"
          className="py-2 pl-11 border-0 bg-slate-100 rounded w-full focus:ring-2"
          placeholder="0"
          onChange={change}
        />
      </div>
    </div>
  );
}
