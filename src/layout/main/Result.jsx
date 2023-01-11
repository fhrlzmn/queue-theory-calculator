import Cards from './Cards';

export default function Result() {
  return (
    <div className="flex flex-col w-full basis-3/4 p-5 gap-3 rounded-lg bg-white drop-shadow-sm">
      <h2 className="text-lg">Result</h2>
      <div className="grid md:grid-cols-2 gap-3">
        <Cards />
      </div>
    </div>
  );
}
