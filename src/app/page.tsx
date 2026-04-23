export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-zinc-950">
      <div className="text-center max-w-xl px-6">
        <h1 className="text-5xl font-bold text-white mb-4">Orqestral</h1>
        <p className="text-xl text-zinc-400 mb-8">Coming Soon</p>
        <hr className="border-zinc-800 mb-8" />
        <div className="text-left text-sm text-zinc-500 space-y-1">
          <p><strong className="text-zinc-300">Orqestral UG (haftungsbeschränkt)</strong></p>
          <p>Geschäftsführer: Daniel Hülsmeyer</p>
          <p>Lörracher Straße 13, 51107 Köln</p>
          <p>Deutschland</p>
        </div>
      </div>
    </main>
  );
}
