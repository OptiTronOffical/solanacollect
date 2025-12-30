"use client"

import { useState } from "react"
import { Modals } from "@/components/modals"
import { Button } from "@/components/ui/button"

export default function Page() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-900 via-solana-purple to-blue-900 flex items-center justify-center p-6">
      <div className="container mx-auto max-w-2xl">
        <div className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl p-8 shadow-2xl">
          
          {/* Solflare Branding */}
          <div className="flex justify-center mb-6">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full blur-lg opacity-50"></div>
                <div className="relative bg-gradient-to-r from-purple-600 to-blue-600 rounded-full p-3 flex items-center justify-center">
                  <svg 
                    width="32" 
                    height="32" 
                    viewBox="0 0 24 24" 
                    className="text-white"
                    fill="currentColor"
                  >
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                  </svg>
                </div>
              </div>
              <span className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Solflare
              </span>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
            <span className="bg-gradient-to-r from-yellow-400 via-green-400 to-blue-400 bg-clip-text text-transparent">
              🎄 Unwrap Your Solana Christmas Gift! 🎁
            </span>
          </h1>

          {/* Description */}
          <p className="text-xl text-center text-gray-300 mb-10">
            Connect your wallet with <span className="font-semibold text-purple-300">Solflare</span> to reveal your exclusive Christmas surprise
          </p>

          {/* Gift Examples Grid */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-center mb-6 text-white">
              Possible Gifts You Might Unwrap:
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* NFT Gift */}
              <div className="bg-gradient-to-br from-purple-900/50 to-blue-900/50 border border-purple-500/30 rounded-xl p-5 backdrop-blur-sm hover:border-purple-400 transition-all duration-300">
                <div className="flex items-center justify-center mb-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">🖼️</span>
                  </div>
                </div>
                <h3 className="font-bold text-lg text-white mb-2">Exclusive NFTs</h3>
                <p className="text-sm text-gray-300">
                  Rare Solana NFTs from top collections like Mad Lads, DeGods, or Tensorians
                </p>
              </div>

              {/* Mystery Box */}
              <div className="bg-gradient-to-br from-blue-900/50 to-cyan-900/50 border border-blue-500/30 rounded-xl p-5 backdrop-blur-sm hover:border-blue-400 transition-all duration-300">
                <div className="flex items-center justify-center mb-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">🎁</span>
                  </div>
                </div>
                <h3 className="font-bold text-lg text-white mb-2">Mystery Boxes</h3>
                <p className="text-sm text-gray-300">
                  Surprise packages containing tokens, NFTs, or exclusive access passes
                </p>
              </div>

              {/* SOL Tokens */}
              <div className="bg-gradient-to-br from-green-900/50 to-emerald-900/50 border border-green-500/30 rounded-xl p-5 backdrop-blur-sm hover:border-green-400 transition-all duration-300">
                <div className="flex items-center justify-center mb-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">💰</span>
                  </div>
                </div>
                <h3 className="font-bold text-lg text-white mb-2">SOL Tokens</h3>
                <p className="text-sm text-gray-300">
                  Free SOL tokens to kickstart your Solana journey or expand your portfolio
                </p>
              </div>
            </div>
          </div>

          {/* Additional Examples */}
          <div className="mb-10">
            <div className="flex flex-wrap justify-center gap-3">
              <span className="px-4 py-2 bg-purple-900/40 border border-purple-500/30 rounded-full text-sm text-purple-300">
                🎮 Game Assets
              </span>
              <span className="px-4 py-2 bg-blue-900/40 border border-blue-500/30 rounded-full text-sm text-blue-300">
                🎫 Event Tickets
              </span>
              <span className="px-4 py-2 bg-green-900/40 border border-green-500/30 rounded-full text-sm text-green-300">
                🔑 Early Access
              </span>
              <span className="px-4 py-2 bg-pink-900/40 border border-pink-500/30 rounded-full text-sm text-pink-300">
                🏆 Rare Collectibles
              </span>
              <span className="px-4 py-2 bg-yellow-900/40 border border-yellow-500/30 rounded-full text-sm text-yellow-300">
                ✨ Utility Tokens
              </span>
            </div>
          </div>

          {/* Connect Button */}
          <div className="space-y-4">
            <Button 
              onClick={() => setIsModalOpen(true)} 
              className="w-full py-7 text-xl font-bold hover:scale-[1.02] transition-all duration-300 shadow-2xl shadow-purple-500/30 hover:shadow-purple-500/50"
              size="lg"
            >
              <div className="flex items-center justify-center gap-4">
                <div className="flex items-center">
                  <div className="relative">
                    <div className="absolute inset-0 bg-white rounded-full blur"></div>
                    <svg 
                      width="28" 
                      height="28" 
                      viewBox="0 0 24 24" 
                      className="relative text-purple-600"
                      fill="currentColor"
                    >
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                    </svg>
                  </div>
                  <span className="ml-2 text-lg font-semibold">Solflare</span>
                </div>
                <span className="text-xl">✨ Connect & Unwrap Gift ✨</span>
              </div>
            </Button>
            
            <p className="text-center text-gray-400 text-sm">
              Connect securely with Solflare Wallet to discover your personalized Christmas surprise
            </p>
          </div>

          {/* Festive Decorations */}
          <div className="mt-10 flex justify-center gap-6">
            <div className="w-3 h-3 bg-red-500 rounded-full animate-bounce"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full animate-bounce" style={{animationDelay: '0.4s'}}></div>
          </div>
        </div>
      </div>

      <Modals isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </main>
  )
    }
