'use client'

import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { useLanguage } from '@/lib/language-context'
import { 
  Dna, Heart, Calendar, CheckCircle, AlertTriangle, 
  Target, Clock, Award, Users, Sparkles
} from 'lucide-react'

export default function BreedingPage() {
  const { t } = useLanguage()

  const breedingPrinciples = [
    {
      title: 'Performance-Based Selection',
      description: 'The foundation of successful breeding is selecting birds based on proven racing performance. Focus on consistent performers rather than one-time winners.',
      icon: Award,
      tips: [
        'Track race results over multiple seasons',
        'Value consistency over occasional brilliance',
        'Consider performance in different conditions',
        'Note speed vs. distance preferences',
      ],
    },
    {
      title: 'Pedigree Analysis',
      description: 'Study bloodlines to understand genetic potential. A strong pedigree with multiple generations of winners increases breeding success probability.',
      icon: Dna,
      tips: [
        'Research 3-4 generations minimum',
        'Identify successful family patterns',
        'Look for winning siblings and cousins',
        'Value birds that produce winners',
      ],
    },
    {
      title: 'Physical Characteristics',
      description: 'Evaluate physical traits that contribute to racing ability. Balance, wing structure, and overall vitality are inherited characteristics.',
      icon: Target,
      tips: [
        'Assess wing length and flexibility',
        'Check eye sign and quality',
        'Evaluate body balance and keel',
        'Note feather quality and density',
      ],
    },
    {
      title: 'Health & Vitality',
      description: 'Breeding stock must be in excellent health. Inherited immunity and resistance to disease significantly impact offspring performance.',
      icon: Heart,
      tips: [
        'Test for common diseases before pairing',
        'Select birds with strong immune systems',
        'Avoid inbreeding depression',
        'Monitor fertility rates',
      ],
    },
  ]

  const pairingStrategies = [
    {
      name: 'Line Breeding',
      description: 'Mating birds that share common ancestors but are not closely related. This concentrates desirable traits while maintaining genetic diversity.',
      bestFor: 'Establishing consistent family traits',
      caution: 'Requires careful pedigree knowledge',
    },
    {
      name: 'Inbreeding',
      description: 'Pairing closely related birds (parent-offspring, siblings). Can fix exceptional traits but increases risk of genetic problems.',
      bestFor: 'Fixing exceptional genetic traits',
      caution: 'High risk of health issues, use sparingly',
    },
    {
      name: 'Outcrossing',
      description: 'Pairing birds from completely unrelated bloodlines. Introduces new genetics and hybrid vigor but outcomes less predictable.',
      bestFor: 'Introducing new traits, hybrid vigor',
      caution: 'Results can be unpredictable',
    },
    {
      name: 'Complementary Pairing',
      description: 'Matching birds whose traits complement each other. If one bird excels at speed but lacks endurance, pair with an endurance specialist.',
      bestFor: 'Balancing strengths and weaknesses',
      caution: 'Requires detailed knowledge of each bird',
    },
  ]

  const breedingCalendar = [
    {
      month: 'January',
      activities: ['Finalize breeding pairs', 'Complete health testing', 'Prepare breeding loft sections'],
    },
    {
      month: 'February',
      activities: ['Introduce pairs', 'Begin conditioning feed', 'Increase light hours gradually'],
    },
    {
      month: 'March-April',
      activities: ['First round eggs laid', 'Monitor incubation', 'Band young at 7-10 days'],
    },
    {
      month: 'May-June',
      activities: ['Second/third rounds', 'Wean young birds at 28 days', 'Begin young bird training'],
    },
    {
      month: 'July',
      activities: ['End breeding season', 'Separate pairs', 'Allow recovery period'],
    },
    {
      month: 'August-December',
      activities: ['Evaluate offspring', 'Racing season assessment', 'Plan next year pairings'],
    },
  ]

  const breedingTips = [
    {
      tip: 'Start with Quality',
      detail: 'It is better to have 2-3 exceptional breeding pairs than 10 average ones. Quality always trumps quantity in breeding programs.',
    },
    {
      tip: 'Keep Detailed Records',
      detail: 'Document every pairing, egg fertility, hatch rates, offspring performance, and any health issues. This data is invaluable for future decisions.',
    },
    {
      tip: 'Test Before Breeding',
      detail: 'Screen all breeding stock for common diseases. Healthy parents produce healthier, more competitive offspring.',
    },
    {
      tip: 'Evaluate Offspring Fairly',
      detail: 'Give young birds adequate training and racing opportunities before judging their potential. Some bloodlines mature later than others.',
    },
    {
      tip: 'Stock Bird Importance',
      detail: 'A bird that produces winners consistently is more valuable than a bird that wins but produces nothing. Stock value differs from racing value.',
    },
    {
      tip: 'Patience is Key',
      detail: 'Building a successful breeding program takes years. Results from new pairings may not be evident for 2-3 generations.',
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-accent/5 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <Badge className="mb-4">Breeding Guide</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{t.features.breeding.title}</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              {t.features.breeding.description} Master the art of stock selection and create winning bloodlines through strategic pairing.
            </p>
          </div>
        </div>
      </section>

      {/* Breeding Principles */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Stock Selection Principles</h2>
          <p className="text-muted-foreground mb-8 max-w-3xl">
            The selection of breeding stock is the most critical factor in pigeon racing success. 
            These principles will guide you in choosing birds that produce winners.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {breedingPrinciples.map((principle, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <principle.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{principle.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{principle.description}</p>
                  <ul className="space-y-2">
                    {principle.tips.map((tip, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                        {tip}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pairing Strategies */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Pairing Strategies</h2>
          <p className="text-muted-foreground mb-8 max-w-3xl">
            Different mating strategies serve different purposes. Understanding when to use each approach 
            is key to developing a successful breeding program.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {pairingStrategies.map((strategy, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-xl">{strategy.name}</CardTitle>
                  <CardDescription className="text-base">{strategy.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-start gap-2">
                      <Sparkles className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <span className="font-medium">Best For: </span>
                        <span className="text-muted-foreground">{strategy.bestFor}</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <AlertTriangle className="h-4 w-4 text-amber-500 mt-1 flex-shrink-0" />
                      <div>
                        <span className="font-medium">Caution: </span>
                        <span className="text-muted-foreground">{strategy.caution}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Breeding Calendar */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Breeding Season Calendar</h2>
          <p className="text-muted-foreground mb-8 max-w-3xl">
            A typical breeding season timeline for temperate climates. Adjust based on your location and racing schedule.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {breedingCalendar.map((period, index) => (
              <Card key={index}>
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-primary" />
                    <CardTitle className="text-lg">{period.month}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {period.activities.map((activity, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                        {activity}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Breeding Tips */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Expert Breeding Tips</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {breedingTips.map((item, index) => (
              <Card key={index} className="bg-card">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                      {index + 1}
                    </div>
                    <CardTitle className="text-lg">{item.tip}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.detail}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Breeding Performance Metrics</h2>
          <Card>
            <CardContent className="pt-6">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4 font-semibold">Metric</th>
                      <th className="text-left py-3 px-4 font-semibold">Good</th>
                      <th className="text-left py-3 px-4 font-semibold">Excellent</th>
                      <th className="text-left py-3 px-4 font-semibold">Notes</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { metric: 'Fertility Rate', good: '80%+', excellent: '95%+', notes: 'Percentage of eggs fertilized' },
                      { metric: 'Hatch Rate', good: '75%+', excellent: '90%+', notes: 'Percentage of fertilized eggs that hatch' },
                      { metric: 'Survival to Weaning', good: '85%+', excellent: '95%+', notes: 'Squeakers surviving to 28 days' },
                      { metric: 'Racing Percentage', good: '30%+', excellent: '50%+', notes: 'Offspring making race team' },
                      { metric: 'Prize Winners', good: '10%+', excellent: '25%+', notes: 'Offspring winning prizes' },
                    ].map((row, index) => (
                      <tr key={index} className="border-b last:border-0">
                        <td className="py-3 px-4 font-medium">{row.metric}</td>
                        <td className="py-3 px-4 text-amber-600">{row.good}</td>
                        <td className="py-3 px-4 text-green-600">{row.excellent}</td>
                        <td className="py-3 px-4 text-muted-foreground">{row.notes}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  )
}
