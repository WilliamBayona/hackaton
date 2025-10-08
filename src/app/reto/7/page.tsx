"use client"
import { useEffect, useState } from "react"
import Link from "next/link"

// Reto 7: Un vaino que tiene frases random 
const API = "https://zenquotes.io/api/random"

interface Quote {
  content: string
  author: string
}

export default function Reto7() {
  const [quote, setQuote] = useState<Quote | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchQuote = async () => {
    try {
      setLoading(true)
      setError(null)
      const res = await fetch(API)
      
      if (!res.ok) {
        throw new Error('Error al obtener la frase')
      }
      
      const data = await res.json()
      
      
      const quoteData = data[0]
      console.log(quoteData.q, "-", quoteData.a)
      
      setQuote({
        content: quoteData.q,
        author: quoteData.a
      })
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error desconocido')
      console.error('Error:', err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchQuote()
  }, [])

  return (
    <div className="min-h-screen bg-white text-black flex flex-col items-center justify-center p-8">
      <div className="max-w-2xl w-full text-center">
                
        <div className="bg-gray-100 border-2 border-black p-8 rounded-none mb-8 min-h-[200px] flex flex-col justify-center">
          {loading && (
            <div className="text-xl">
              Cargando frase...
            </div>
          )}
          
          {error && (
            <div className="text-red-600 text-lg">
              Error: {error}
            </div>
          )}
          
          {quote && !loading && (
            <div>
              <blockquote className="text-xl italic mb-4 leading-relaxed">
                "{quote.content}"
              </blockquote>
              <cite className="text-lg font-semibold">
                — {quote.author}
              </cite>
            </div>
          )}
        </div>
        
        <div className="space-y-4">
          <button
            onClick={fetchQuote}
            disabled={loading}
            className="bg-black text-white px-8 py-3 border-2 border-black hover:bg-white hover:text-black transition-colors disabled:opacity-50 disabled:cursor-not-allowed font-semibold"
          >
            {loading ? 'Cargando...' : 'Nueva Frase'}
          </button>
          
          <div>
            <Link 
              href="/"
              className="inline-block bg-white text-black px-6 py-2 border-2 border-black hover:bg-black hover:text-white transition-colors font-semibold"
            >
              ← Volver al Inicio
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
