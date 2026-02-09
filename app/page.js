'use client'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import ArticleCard from '../components/ArticleCard'
import CategoryTabs from '../components/CategoryTabs'
import HeroCarousel from '../components/HeroCarousel'

export default function Home() {
  const [articles, setArticles] = useState([])
  const [activeTab, setActiveTab] = useState('all')

  useEffect(() => {
    setArticles([
      { id: 1, title: '🚨 BREAKING: Election Results Live Updates', category: 'Politics', views: 12500 },
      { id: 2, title: '⚽ World Cup Final: Top 10 Goals', category: 'Sports', views: 9800 },
      { id: 3, title: '🎬 Oscar Winners 2024 Full List', category: 'Entertainment', views: 15400 },
      { id: 4, title: '🤖 AI Takes Over: ChatGPT 5 Revealed', category: 'Technology', views: 21000 },
      { id: 5, title: '💃 Viral Dance Challenge Breaks Records', category: 'Lifestyle', views: 8900 },
      { id: 6, title: '🇺🇸 Trump vs Harris: Final Debate Analysis', category: 'Politics', views: 34000 },
    ])
  }, [])

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="gradient-bg text-white sticky top-0 z-50 shadow-2xl">
        <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between">
          <h1 className="text-3xl md:text-4xl font-black mb-4 md:mb-0">📰 NewsHub</h1>
          <div className="flex items-center space-x-4 w-full md:w-auto">
            <input className="flex-1 md:w-80 px-5 py-3 rounded-full bg-white/20 backdrop-blur-sm placeholder-white/80 text-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50" 
                   placeholder="🔍 Search 1M+ stories..." />
            <button className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all">👤</button>
          </div>
        </div>
      </header>

      <HeroCarousel />
      <CategoryTabs activeTab={activeTab} onTabChange={setActiveTab} />

      <main className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <ArticleCard article={article} />
            </motion.div>
          ))}
        </div>
      </main>

      <div className="bg-white py-20 border-t-4 border-blue-100">
        <div className="max-w-md mx-auto text-center px-6">
          <h3 className="text-3xl font-black mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            📧 Daily News Digest
          </h3>
          <div className="flex bg-gray-100 rounded-2xl p-1">
            <input className="flex-1 px-6 py-4 bg-white rounded-xl placeholder-gray-500 text-lg" 
                   placeholder="Enter your email" />
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-12 py-4 rounded-xl font-bold text-lg ml-1 hover:shadow-xl transition-all">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
