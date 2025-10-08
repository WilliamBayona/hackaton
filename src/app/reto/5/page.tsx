import NavBar from "@/components/NavBar";

type Props = object;

export default function RetoPage({}: Props) {
  return (
    <div className="min-h-screen bg-white text-black flex items-center justify-center p-8">
      <main className="w-full max-w-5xl">
        
        <NavBar />

        <div className="h-6" />

        <div style={{ transform: "scaleX(-1)", transformOrigin: "center" }}>
          <NavBar />
        </div>
      </main>
    </div>
  );
}
