import Link from "next/link";

export default function Home() {
  const retos = [1, 2, 3, 4, 5];

  return (
    <div className="min-h-screen bg-white text-black flex items-center justify-center p-8">
      <main className="w-full max-w-xl text-center">
        <h1 className="text-5xl font-extrabold mb-8">Hackaton</h1>

        <p className="mb-6 text-sm text-black/70">Selecciona un reto para comenzar</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {retos.map((n) => (
            <Link
              key={n}
              href={`/reto/${n}`}
              className="block text-center border border-black px-6 py-3 rounded-md text-lg font-medium hover:bg-black hover:text-white transition-colors"
            >
              Reto {n}
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
