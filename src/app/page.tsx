import Link from "next/link";

export default function Home() {
  const retos = [1, 2, 3, 4, 5, 6, 7];

  return (
    <div className="min-h-screen bg-white text-black flex flex-col items-center justify-center p-8">
      <main className="w-full max-w-xl text-center">
        <h1 className="text-5xl font-extrabold mb-8">Hackaton</h1>

        <p className="mb-6 text-sm text-black/70">
          Selecciona un reto para comenzar
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 place-items-center">
          {retos.map((n) => (
            <Link
              key={n}
              href={`/reto/${n}`}
              className="block text-center border border-black px-6 py-3 rounded-md text-lg font-medium hover:bg-black hover:text-white transition-colors w-full"
            >
              Reto {n}
            </Link>
          ))}
        </div>

        <div className="mt-12 text-sm text-gray-700 border-t border-gray-300 pt-4">
          <p className="font-semibold mb-2">Equipo de Desarrollo:</p>
          <ul className="list-disc list-inside text-left inline-block">
            <li>William Bayona (202011494)</li>
            <li>Maria Paula Murillo (202224530)</li>
            <li>Dilan Escobar (202312090)</li>
            <li>Sergio Castaño (202310390)</li>
          </ul>
        </div>
      </main>
    </div>
  );
}
