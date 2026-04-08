'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { useLanguage } from '@/lib/language-context'
import { 
  Search, Calendar, ExternalLink, Trophy, Newspaper, 
  Video, Award, MapPin, Filter
} from 'lucide-react'

// Articles data sourced from PIPA
const articles = [
  {
    id: 1,
    title: 'Batenburg-Van de Merwe (Klaaswaal, NL), The Best Marathon Loft in Western Europe',
    category: 'Loft Report',
    date: '2026-04-08',
    excerpt: 'An in-depth look at one of the most successful marathon lofts in Western Europe, exploring their training methods, breeding strategies, and race-winning secrets.',
    source: 'PIPA',
    link: 'https://www.pipa.be',
    featured: true,
  },
  {
    id: 2,
    title: 'Hattrick 422, the stock breeder owned by Stefaan Lambrechts (Nijlen, BE), is now also successful in America',
    category: 'Loft Report',
    date: '2026-04-01',
    excerpt: 'The famous Hattrick 422 bloodline continues to prove its worth internationally, with offspring now winning races in America.',
    source: 'PIPA',
    link: 'https://www.pipa.be',
    featured: true,
  },
  {
    id: 3,
    title: 'The Young Bird Race of the Dubai OLR Featured Multiple International Winners',
    category: 'One Loft Race',
    date: '2026-03-25',
    excerpt: 'The Dubai One Loft Race continues to attract the best pigeons from around the world, with spectacular results in the young bird competition.',
    source: 'PIPA',
    link: 'https://www.pipa.be',
    featured: true,
  },
  {
    id: 4,
    title: 'Philippe Dobbelaere\'s (Olsene) 2025 Super Season',
    category: 'Loft Report',
    date: '2026-03-28',
    excerpt: 'A comprehensive review of Philippe Dobbelaere\'s remarkable 2025 racing season, including his training methods and top performers.',
    source: 'PIPA',
    link: 'https://www.pipa.be',
    featured: false,
  },
  {
    id: 5,
    title: 'Shaun McDonough (Walsall, UK): virtually unbeatable in sprint races',
    category: 'Loft Report',
    date: '2026-03-19',
    excerpt: 'How Shaun McDonough has dominated sprint racing in the UK with his exceptional team and meticulous approach to training.',
    source: 'PIPA',
    link: 'https://www.pipa.be',
    featured: false,
  },
  {
    id: 6,
    title: 'Olivier & Justin Poussart (Vaulx-lez-Chimay, BE) Were Once Again Dominant on the Great Middle Distance in 2025',
    category: 'Loft Report',
    date: '2026-03-18',
    excerpt: 'The Poussart family continues their reign in middle distance racing with another outstanding season of results.',
    source: 'PIPA',
    link: 'https://www.pipa.be',
    featured: false,
  },
  {
    id: 7,
    title: 'The Yelena dynasty continues to bring Etienne Meirlaen (BE) success',
    category: 'Loft Report',
    date: '2026-03-11',
    excerpt: 'Exploring the famous Yelena bloodline and how it continues to produce winners generation after generation.',
    source: 'PIPA',
    link: 'https://www.pipa.be',
    featured: false,
  },
  {
    id: 8,
    title: 'Philip de Maeseneer (Denderwindeke, Belgium) Successfully Builds Further on the Finnman Line',
    category: 'Loft Report',
    date: '2026-03-11',
    excerpt: 'A look at how the Finnman bloodline is being developed and expanded with continued success.',
    source: 'PIPA',
    link: 'https://www.pipa.be',
    featured: false,
  },
  {
    id: 9,
    title: 'Another 1st Olympiad Pigeon for Jean-Pierre Palm (Braine-L\'Alleud, Belgium) in 2025',
    category: 'Loft Report',
    date: '2026-03-05',
    excerpt: 'Jean-Pierre Palm adds another Olympiad title to his impressive collection, showcasing his expertise in breeding top-quality racing pigeons.',
    source: 'PIPA',
    link: 'https://www.pipa.be',
    featured: false,
  },
  {
    id: 10,
    title: 'Magic Spirit, the new supercrack of Chris Hebberecht (Evergem, BE)',
    category: 'Loft Report',
    date: '2026-03-04',
    excerpt: 'Introducing Magic Spirit, a rising star in the pigeon racing world with an impressive early career record.',
    source: 'PIPA',
    link: 'https://www.pipa.be',
    featured: false,
  },
  {
    id: 11,
    title: 'Super Star OLR Summer Race 2026',
    category: 'One Loft Race',
    date: '2026-03-24',
    excerpt: 'Announcement and details about the upcoming Super Star One Loft Race Summer 2026 competition.',
    source: 'PIPA',
    link: 'https://www.pipa.be',
    featured: false,
  },
  {
    id: 12,
    title: 'Derby16 Bursa Grandprix 2026',
    category: 'One Loft Race',
    date: '2026-03-17',
    excerpt: 'Preview of the prestigious Derby16 Bursa Grandprix One Loft Race in Turkey.',
    source: 'PIPA',
    link: 'https://www.pipa.be',
    featured: false,
  },
  {
    id: 13,
    title: 'Sam Bostoen (Adegem, Belgium) Now Also Wins the KBDB Long-Distance Olympiad Pigeon – Category C',
    category: 'Loft Report',
    date: '2026-02-24',
    excerpt: 'Sam Bostoen achieves another prestigious title with his exceptional long-distance performer.',
    source: 'PIPA',
    link: 'https://www.pipa.be',
    featured: false,
  },
  {
    id: 14,
    title: 'Sakis Minovgioudis (Alblasserdam, NL) watches the descendants of his Ludo Claessens pigeons shine',
    category: 'Loft Report',
    date: '2026-03-03',
    excerpt: 'How the legendary Ludo Claessens bloodlines continue to produce international OLR winners.',
    source: 'PIPA',
    link: 'https://www.pipa.be',
    featured: false,
  },
  {
    id: 15,
    title: 'Johan & Martine Boyen (Binderveld, BE): Tina\'s Florien triumphs on her first national race',
    category: 'Loft Report',
    date: '2026-02-09',
    excerpt: 'A remarkable debut performance as Tina\'s Florien wins her very first national race.',
    source: 'PIPA',
    link: 'https://www.pipa.be',
    featured: false,
  },
]

const categories = ['All', 'Loft Report', 'One Loft Race', 'Video', 'Top Performances']

export default function ArticlesPage() {
  const { t } = useLanguage()
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredArticles = articles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const featuredArticles = articles.filter(a => a.featured)
  const recentArticles = filteredArticles.slice(0, 12)

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Loft Report': return Trophy
      case 'One Loft Race': return MapPin
      case 'Video': return Video
      case 'Top Performances': return Award
      default: return Newspaper
    }
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    })
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-accent/5 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <Badge className="mb-4">News & Articles</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{t.articles.title}</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              {t.articles.subtitle} Curated content from PIPA and the pigeon racing world.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-12 border-b border-border">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">Featured Stories</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {featuredArticles.map((article) => {
              const Icon = getCategoryIcon(article.category)
              return (
                <Card key={article.id} className="group hover:shadow-lg transition-all duration-300 hover:border-primary/50">
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <Icon className="h-4 w-4 text-primary" />
                      <Badge variant="secondary" className="text-xs">{article.category}</Badge>
                    </div>
                    <CardTitle className="text-lg group-hover:text-primary transition-colors line-clamp-2">
                      {article.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm line-clamp-3 mb-4">
                      {article.excerpt}
                    </p>
                    <div className="flex justify-between items-center text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {formatDate(article.date)}
                      </span>
                      <a 
                        href={article.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-primary hover:underline"
                      >
                        {article.source}
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* All Articles */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {/* Search and Filter */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex gap-2 flex-wrap">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* Articles Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentArticles.map((article) => {
              const Icon = getCategoryIcon(article.category)
              return (
                <Card key={article.id} className="group hover:shadow-md transition-all duration-300">
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-2 mb-2">
                      <Icon className="h-4 w-4 text-primary" />
                      <Badge variant="outline" className="text-xs">{article.category}</Badge>
                    </div>
                    <CardTitle className="text-base group-hover:text-primary transition-colors line-clamp-2">
                      {article.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm line-clamp-2 mb-3">
                      {article.excerpt}
                    </p>
                    <div className="flex justify-between items-center text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {formatDate(article.date)}
                      </span>
                      <a 
                        href={article.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-primary hover:underline"
                      >
                        {t.articles.readMore}
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {filteredArticles.length === 0 && (
            <div className="text-center py-12">
              <Newspaper className="h-12 w-12 mx-auto text-muted-foreground/50 mb-4" />
              <p className="text-muted-foreground">No articles found matching your search.</p>
            </div>
          )}

          {/* PIPA Link */}
          <div className="mt-12 text-center">
            <Card className="inline-block">
              <CardContent className="flex items-center gap-4 p-6">
                <div>
                  <p className="font-medium">Want more pigeon racing news?</p>
                  <p className="text-sm text-muted-foreground">Visit PIPA for the latest articles, auctions, and race results.</p>
                </div>
                <Button asChild>
                  <a href="https://www.pipa.be" target="_blank" rel="noopener noreferrer">
                    Visit PIPA
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
