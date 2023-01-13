export default function Input({ title = '', label = 'label', change }) {
  return (
    <div>
      <label className="text-slate-600">{label}</label>
      <div className="relative flex items-center">
        <label className="absolute text-center italic font-serif border-r-2 w-8">
          {title}
        </label>
        <input
          type="number"
          className="py-2 pl-11 border-0 bg-slate-100 rounded w-full focus:ring-2"
          placeholder={`Plase insert ${title}`}
          onChange={change}
        />
      </div>
    </div>
  );
}
