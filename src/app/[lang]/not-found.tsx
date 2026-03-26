import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-5 text-center">
      <h1 className="text-6xl font-display font-bold text-starlight mb-4">404</h1>
      <p className="text-xl text-moonbeam mb-8">
        Página não encontrada / Page not found
      </p>
      <div className="flex gap-4">
        <Link
          href="/pt"
          className="px-6 py-3 bg-nova text-white rounded-lg font-medium hover:bg-pulsar transition-colors"
        >
          Voltar (PT)
        </Link>
        <Link
          href="/en"
          className="px-6 py-3 glass text-starlight rounded-lg font-medium hover:border-glass-hover transition-colors"
        >
          Go back (EN)
        </Link>
      </div>
    </div>
  )
}
