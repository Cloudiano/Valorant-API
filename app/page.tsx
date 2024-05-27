import Link from "next/link";
import Image from "next/image";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h1 className="text-3xl font-bold">PLS Valorant</h1>
        <hr className="my-4" />
        <p>Valorant Agents</p>
      </div>

      <Image
        src="https://media.valorant-api.com/agents/a3bfb853-43b2-7238-a4f1-ad90e9e46bcc/fullportrait.png"
        alt="Valorant Reyna"
        className="animate-pulse"
        width={50}
        height={50}
        priority
        quality={100}
        unoptimized
        style={{
          width: "600px",
          height: "600px",
        }}
      />
      <div className="flex gap-3">
        <Link
          href="https://github.com/Polusv7"
          target="_blank"
          className="underline hover:text-red-500 transition-all"
        >
          Polus
        </Link>
        <Link
          href="https://valorant-api.com"
          target="_blank"
          className="underline hover:text-red-500 transition-all"
        >
          Valorant API
        </Link>
      </div>
    </main>
  );
}
