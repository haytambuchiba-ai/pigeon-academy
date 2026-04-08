'use client'

import Link from 'next/link'
import { ArrowRight, Trophy, Heart, Dna, Home, Users, Calendar, Ruler, Gauge, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { useLanguage } from '@/lib/language-context'

export default function HomePage() {
  const { t } = useLanguage()

  const features = [
    {
      icon: Trophy,
      title: t.features.training.title,
      description: t.features.training.description,
      href: '/training',
    },
    {
      icon: Heart,
      title: t.features.health.title,
      description: t.features.health.description,
      href: '/health',
    },
    {
      icon: Dna,
      title: t.features.breeding.title,
      description: t.features.breeding.description,
      href: '/breeding',
    },
    {
      icon: Home,
      title: t.features.loft.title,
      description: t.features.loft.description,
      href: '/loft',
    },
  ]

  const stats = [
    { value: '2M+', label: t.stats.fanciers, icon: Users },
    { value: '50K+', label: t.stats.races, icon: Calendar },
    { value: '1000km', label: t.stats.distance, icon: Ruler },
    { value: '100km/h', label: t.stats.speed, icon: Gauge },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
        <div className="container mx-auto px-4 py-20 md:py-32 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Sparkles className="h-4 w-4" />
              <span>The Complete Pigeon Racing Resource</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance mb-6">
              <span className="text-foreground">{t.hero.title}</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-medium mb-4 text-balance">
              {t.hero.subtitle}
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 text-pretty">
              {t.hero.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-lg px-8">
                <Link href="/training">
                  {t.hero.cta}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8">
                <Link href="/assistant">
                  {t.hero.secondaryCta}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-y border-border bg-card">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <stat.icon className="h-8 w-8 mx-auto mb-3 text-primary" />
                <div className="text-3xl md:text-4xl font-bold text-foreground mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">{t.features.title}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t.features.subtitle}</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:border-primary/50">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed mb-4">
                    {feature.description}
                  </CardDescription>
                  <Link 
                    href={feature.href}
                    className="inline-flex items-center text-primary font-medium text-sm hover:underline"
                  >
                    Learn more
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Knowledge Highlights */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
                Learn from Champion Breeders
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p className="text-lg leading-relaxed">
                  Homing pigeons, selectively bred for their exceptional homing ability and stamina, are the stars of pigeon racing competitions worldwide. These remarkable birds are a special breed of Rock Dove (Columba livia).
                </p>
                <p className="leading-relaxed">
                  Racing pigeons are trained to return home over distances ranging from 50 to 600 miles, and sometimes even further. The sport has a rich tradition dating back centuries, with strong communities particularly in Belgium, the Netherlands, UK, and increasingly worldwide.
                </p>
                <ul className="space-y-2 mt-6">
                  <li className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                    Systematic training methods for developing homing abilities
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                    Health care regimens and disease prevention
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                    Stock selection and breeding strategies
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                    Loft design and management best practices
                  </li>
                </ul>
              </div>
              <Button asChild className="mt-8" size="lg">
                <Link href="/training">
                  Start Your Journey
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
            <div className="bg-card rounded-2xl border border-border p-8">
              <h3 className="text-xl font-semibold mb-6">Quick Facts About Racing Pigeons</h3>
              <div className="space-y-4">
                {[
                  { label: 'Average Flying Speed', value: '92-100 km/h (57-62 mph)' },
                  { label: 'Maximum Recorded Speed', value: '177 km/h (110 mph)' },
                  { label: 'Typical Racing Distance', value: '100-1000 km' },
                  { label: 'Average Lifespan', value: '10-15 years' },
                  { label: 'Breeding Age', value: '6-12 months' },
                  { label: 'Eggs Per Clutch', value: '2 eggs' },
                  { label: 'Incubation Period', value: '17-19 days' },
                  { label: 'Young Birds (Squeakers)', value: 'Ready at 28-30 days' },
                ].map((fact, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-border last:border-0">
                    <span className="text-muted-foreground">{fact.label}</span>
                    <span className="font-semibold text-foreground">{fact.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Assistant CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-primary rounded-2xl p-8 md:p-12 text-primary-foreground text-center">
            <Sparkles className="h-12 w-12 mx-auto mb-6 opacity-80" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
              Have Questions? Ask Our AI Expert
            </h2>
            <p className="text-lg opacity-90 max-w-2xl mx-auto mb-8">
              Get instant answers to any question about homing pigeon training, health, breeding, or loft management from our AI-powered expert assistant.
            </p>
            <Button asChild size="lg" variant="secondary" className="text-lg px-8">
              <Link href="/assistant">
                Ask AI Assistant
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Recent Articles Preview */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-2">{t.articles.title}</h2>
              <p className="text-muted-foreground">{t.articles.subtitle}</p>
            </div>
            <Button asChild variant="outline">
              <Link href="/articles">
                View All Articles
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Batenburg-Van de Merwe: The Best Marathon Loft in Western Europe',
                category: 'Loft Report',
                date: 'Apr 8, 2026',
              },
              {
                title: 'Hattrick 422: Stock Breeder Now Successful in America',
                category: 'Success Story',
                date: 'Apr 1, 2026',
              },
              {
                title: 'Dubai OLR: Multiple International Winners in Young Bird Race',
                category: 'One Loft Race',
                date: 'Mar 25, 2026',
              },
            ].map((article, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="text-xs font-medium text-primary mb-2">{article.category}</div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">
                    {article.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center text-sm text-muted-foreground">
                    <span>{article.date}</span>
                    <span>{t.articles.source}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
