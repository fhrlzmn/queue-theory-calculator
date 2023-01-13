export default function Alert({ click }) {
  return (
    <div className="bg-red-400 text-white p-3 rounded-md relative">
      <h3 className="border-b-2 mb-1">Error!</h3>
      <p className="text-sm font-light opacity-80">Value must be positive!</p>
      <button type="button" className="absolute top-0 right-2" onClick={click}>
        <span className="block text-3xl text-white rotate-45 font-extralight">
          +
        </span>
      </button>
    </div>
  );
}
