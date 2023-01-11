export default function Card({
  result = '0',
  unit = 'unit',
  title = 'title',
  desc = 'desc',
}) {
  return (
    <div className="rounded flex items-center border-2 p-2">
      <div className="flex items-center justify-center bg-blue-400 text-white text-center w-20 shrink-0 self-stretch align-middle rounded-md">
        <h1 className="text-3xl">{title}</h1>
      </div>
      <div className="w-full px-3">
        <h1 className="text-4xl font-semibold border-b-2 flex justify-between items-end">
          {unit === 'Percent'
            ? `${parseFloat((result * 100).toFixed(2)).toString()}`
            : parseFloat(result.toFixed(4)).toString()}
          <span className="text-sm font-normal opacity-50 text-end">
            {unit}
          </span>
        </h1>

        <p className="font-normal text-sm opacity-80 text-gray-800 mt-2 wrap">
          {desc}
        </p>
      </div>
    </div>
  );
}
