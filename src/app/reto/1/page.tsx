import Link from "next/link";

interface Props {
  params: { id: string };
}

export default function RetoPage({ params }: Props) {
  const { id } = params;
  return (
    <div className="min-h-screen bg-white text-black flex items-center justify-center p-8">
      <main className="w-full max-w-xl text-center">
        <h1 className="text-4xl font-bold mb-4">Reto {id}</h1>
        <p className="mb-6 text-sm text-black/70">Esta es la página del reto {id}. Aquí puedes añadir la descripción del reto.</p>

        <div className="flex justify-center gap-4">
          <Link
            href="/"
            className="inline-block border border-black px-4 py-2 rounded hover:bg-black hover:text-white transition-colors"
          >
            Volver
          </Link>
        </div>
      </main>
    </div>
  );
}
