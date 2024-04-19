export default function Header() {
  return (
    <div className="flex justify-between items-center px-6 bg-white rounded-lg drop-shadow-sm py-3 text-center">
      <h1 className="text-2xl">Queue Theory Calculator</h1>
      <ul className="flex justify-center gap-4">
        <li>
          <a
            href="https://github.com/fhrlzmn/queue-theory-calculator"
            target="_blank"
          >
            <img
              src="/github.svg"
              width={28}
              alt="GitHub"
              className="text-blue-500"
            />
          </a>
        </li>
      </ul>
    </div>
  );
}
