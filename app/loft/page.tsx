'use client'

import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { useLanguage } from '@/lib/language-context'
import { 
  Home, Wind, Sun, Thermometer, Ruler, DoorOpen, 
  CheckCircle, AlertTriangle, Layout, Layers, Shield
} from 'lucide-react'

export default function LoftPage() {
  const { t } = useLanguage()

  const loftSections = [
    {
      name: 'Racing Section',
      description: 'Houses your active racing team. Designed for easy management and quick access.',
      requirements: [
        'Minimum 0.5 sq meter per bird',
        'Individual perches or box perches',
        'Good visibility of entrance',
        'Quick access for handling',
      ],
      icon: Home,
    },
    {
      name: 'Breeding Section',
      description: 'Contains nest boxes for breeding pairs. Requires more privacy and space per pair.',
      requirements: [
        'One nest box per pair (30x30x30cm minimum)',
        'Double nest boxes preferred',
        'Separate from racing section',
        'Lower disturbance area',
      ],
      icon: Layers,
    },
    {
      name: 'Young Bird Section',
      description: 'Dedicated space for weaned young birds before joining the racing team.',
      requirements: [
        'Separate from adult sections',
        'Easy observation access',
        'Training trap system',
        'Extra ventilation',
      ],
      icon: Layout,
    },
    {
      name: 'Trap/Landing Area',
      description: 'The entrance system where birds land and enter. Critical for training and racing.',
      requirements: [
        'Landing board (60cm+ wide)',
        'Trap opening (adjustable)',
        'Protected from wind',
        'Good visibility for birds',
      ],
      icon: DoorOpen,
    },
  ]

  const ventilationPrinciples = [
    {
      principle: 'Air Flow Pattern',
      description: 'Fresh air should enter low and stale air exit high. This natural convection ensures constant air circulation.',
      implementation: 'Install inlet vents near floor level (protected from direct drafts) and outlet vents near the roof ridge.',
    },
    {
      principle: 'Cross Ventilation',
      description: 'Vents on opposite sides create natural air flow without mechanical systems.',
      implementation: 'Place adjustable vents on both long walls, allowing you to control airflow based on weather.',
    },
    {
      principle: 'Moisture Control',
      description: 'Good ventilation removes moisture from droppings and respiration, preventing respiratory issues.',
      implementation: 'Ensure 4-6 air changes per hour minimum. Loft should never smell musty.',
    },
    {
      principle: 'Draft Prevention',
      description: 'While ventilation is essential, direct drafts on perching birds cause health problems.',
      implementation: 'Use baffles or angled vents to prevent direct airflow on birds while maintaining circulation.',
    },
  ]

  const loftDimensions = [
    { aspect: 'Minimum Height', value: '2.1m (7ft)', notes: 'Allows comfortable working space' },
    { aspect: 'Space per Racing Bird', value: '0.5 sq m (5 sq ft)', notes: 'Prevents overcrowding' },
    { aspect: 'Space per Breeding Pair', value: '1 sq m (10 sq ft)', notes: 'Including nest box area' },
    { aspect: 'Perch Spacing', value: '25-30cm apart', notes: 'Prevents territorial disputes' },
    { aspect: 'Nest Box Size', value: '30x30x30cm minimum', notes: '35x35x35cm preferred' },
    { aspect: 'Trap Opening', value: '10x12cm per bird', notes: 'Adjustable for training' },
    { aspect: 'Window Area', value: '10% of floor space', notes: 'For natural light' },
    { aspect: 'Vent Area', value: '5% of floor space', notes: 'Total inlet + outlet' },
  ]

  const materialRecommendations = [
    {
      component: 'Walls',
      recommended: ['Marine plywood', 'Cement board', 'Brick/block'],
      avoid: ['OSB (absorbs moisture)', 'Untreated wood'],
      reason: 'Must withstand moisture and be easy to clean/disinfect',
    },
    {
      component: 'Floor',
      recommended: ['Concrete (sealed)', 'Heavy-duty vinyl', 'Slatted wood'],
      avoid: ['Bare earth', 'Carpet', 'Unsealed wood'],
      reason: 'Must be impervious to moisture and easy to clean daily',
    },
    {
      component: 'Roof',
      recommended: ['Metal roofing', 'Asphalt shingles', 'Insulated panels'],
      avoid: ['Flat roofs in rainy areas', 'Uninsulated metal'],
      reason: 'Needs good drainage and temperature control',
    },
    {
      component: 'Perches',
      recommended: ['Hardwood', 'Plastic-coated wire', 'Removable designs'],
      avoid: ['Softwood', 'Round dowels'],
      reason: 'Must be easy to clean and comfortable for birds',
    },
  ]

  const commonMistakes = [
    {
      mistake: 'Overcrowding',
      consequence: 'Stress, disease spread, fighting, poor performance',
      solution: 'Follow space guidelines strictly; fewer birds perform better than many cramped birds',
    },
    {
      mistake: 'Poor Ventilation',
      consequence: 'Respiratory problems, ammonia buildup, wet droppings',
      solution: 'Install adequate vents; if you can smell ammonia, ventilation is inadequate',
    },
    {
      mistake: 'Direct Sunlight on Perches',
      consequence: 'Overheating, stress during hot weather',
      solution: 'Position windows to avoid direct sun on birds; use shade cloth if needed',
    },
    {
      mistake: 'Ground-Level Entrance',
      consequence: 'Predator access, ground moisture problems',
      solution: 'Elevate loft minimum 45cm (18 inches) off ground',
    },
    {
      mistake: 'Single-Section Loft',
      consequence: 'Cannot separate birds for management (sick, breeding, racing)',
      solution: 'Design minimum 2-3 sections from the start',
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-accent/5 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <Badge className="mb-4">Loft Design Guide</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{t.features.loft.title}</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              {t.features.loft.description} Create the perfect environment for your racing pigeons with proper ventilation, sectioning, and materials.
            </p>
          </div>
        </div>
      </section>

      {/* Loft Sections */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Essential Loft Sections</h2>
          <p className="text-muted-foreground mb-8 max-w-3xl">
            A well-designed loft follows a life cycle rotation system where pigeons move through different sections 
            based on their stage: breeding, young bird development, and racing.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {loftSections.map((section, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <section.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{section.name}</CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{section.description}</p>
                  <h4 className="font-semibold mb-2">Requirements:</h4>
                  <ul className="space-y-2">
                    {section.requirements.map((req, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                        {req}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Ventilation */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <Wind className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold">Ventilation System</h2>
          </div>
          <p className="text-muted-foreground mb-8 max-w-3xl">
            Proper ventilation is the single most important factor in loft design. Good airflow prevents 
            respiratory diseases, the leading health issue in racing pigeons.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {ventilationPrinciples.map((item, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{item.principle}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-start gap-2 text-sm">
                    <Shield className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <span className="font-medium">Implementation: </span>
                      <span className="text-muted-foreground">{item.implementation}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Dimensions */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <Ruler className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold">Recommended Dimensions</h2>
          </div>
          <p className="text-muted-foreground mb-8 max-w-3xl">
            Following these guidelines ensures adequate space for bird health and ease of management.
          </p>

          <Card>
            <CardContent className="pt-6">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4 font-semibold">Aspect</th>
                      <th className="text-left py-3 px-4 font-semibold">Recommended</th>
                      <th className="text-left py-3 px-4 font-semibold">Notes</th>
                    </tr>
                  </thead>
                  <tbody>
                    {loftDimensions.map((row, index) => (
                      <tr key={index} className="border-b last:border-0">
                        <td className="py-3 px-4 font-medium">{row.aspect}</td>
                        <td className="py-3 px-4 text-primary font-mono">{row.value}</td>
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

      {/* Materials */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Material Selection</h2>
          <p className="text-muted-foreground mb-8 max-w-3xl">
            Choosing the right materials ensures durability, easy maintenance, and bird health. 
            Prioritize cleanability and moisture resistance.
          </p>

          <Tabs defaultValue="walls" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="walls">Walls</TabsTrigger>
              <TabsTrigger value="floor">Floor</TabsTrigger>
              <TabsTrigger value="roof">Roof</TabsTrigger>
              <TabsTrigger value="perches">Perches</TabsTrigger>
            </TabsList>
            {materialRecommendations.map((material) => (
              <TabsContent key={material.component.toLowerCase()} value={material.component.toLowerCase()}>
                <Card>
                  <CardHeader>
                    <CardTitle>{material.component}</CardTitle>
                    <CardDescription>{material.reason}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-primary mb-3 flex items-center gap-2">
                          <CheckCircle className="h-4 w-4" />
                          Recommended
                        </h4>
                        <ul className="space-y-2">
                          {material.recommended.map((item, i) => (
                            <li key={i} className="text-muted-foreground">{item}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-destructive mb-3 flex items-center gap-2">
                          <AlertTriangle className="h-4 w-4" />
                          Avoid
                        </h4>
                        <ul className="space-y-2">
                          {material.avoid.map((item, i) => (
                            <li key={i} className="text-muted-foreground">{item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Common Mistakes */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Common Mistakes to Avoid</h2>
          <p className="text-muted-foreground mb-8 max-w-3xl">
            Learn from the mistakes of others. These are the most common loft design errors that compromise 
            bird health and racing performance.
          </p>

          <div className="space-y-4">
            {commonMistakes.map((item, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <AlertTriangle className="h-5 w-5 text-amber-500" />
                        <h3 className="font-semibold">{item.mistake}</h3>
                      </div>
                    </div>
                    <div>
                      <span className="text-sm text-muted-foreground">Consequence: </span>
                      <p className="text-sm">{item.consequence}</p>
                    </div>
                    <div>
                      <span className="text-sm text-primary font-medium">Solution: </span>
                      <p className="text-sm text-muted-foreground">{item.solution}</p>
                    </div>
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
