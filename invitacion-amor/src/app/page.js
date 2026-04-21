import Carta from "@/components/Carta";

export default function Home() {
  return (
    <div className="h-screen flex items-center justify-center bg-black text-white">
      <h1>Hola… tengo algo para ti 💌</h1>
      <Carta />
    </div>
  );
}