'use client'

import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Badge } from '@/components/ui/badge'
import { useLanguage } from '@/lib/language-context'
import { 
  Target, Clock, MapPin, Calendar, CheckCircle, AlertTriangle, 
  Bird, ArrowRight, Compass, Timer, Route, Flag
} from 'lucide-react'

export default function TrainingPage() {
  const { t } = useLanguage()

  const trainingPhases = [
    {
      phase: 'Phase 1: Loft Training',
      duration: 'Weeks 1-4',
      icon: Bird,
      steps: [
        'Allow young birds to explore the loft interior for the first week',
        'Open trap doors to let them observe outside while remaining inside',
        'Begin short periods on the landing board (10-15 minutes)',
        'Gradually increase landing board time to 1-2 hours',
        'Encourage roof-walking and short flights around the loft',
        'Establish a consistent feeding schedule to create food motivation',
      ],
    },
    {
      phase: 'Phase 2: Settling Flights',
      duration: 'Weeks 5-8',
      icon: Compass,
      steps: [
        'First release: 100 meters from loft in clear weather',
        'Increase distance gradually: 500m, 1km, 2km, 5km',
        'Always release in the same direction initially',
        'Train in groups of 3-5 birds for safety',
        'Time releases for morning hours with good visibility',
        'Wait for confident returns before increasing distance',
      ],
    },
    {
      phase: 'Phase 3: Road Training',
      duration: 'Weeks 9-16',
      icon: Route,
      steps: [
        'Extend distances: 10km, 20km, 30km, 50km',
        'Introduce different release directions',
        'Begin single tosses for experienced birds',
        'Train in various weather conditions (not extreme)',
        'Build stamina with 2-3 tosses per week',
        'Monitor return times and adjust training intensity',
      ],
    },
    {
      phase: 'Phase 4: Race Preparation',
      duration: 'Weeks 17-24',
      icon: Flag,
      steps: [
        'Extend to race distances: 100km, 200km, 300km+',
        'Participate in club training tosses',
        'Fine-tune feeding and rest schedules',
        'Identify and develop top performers',
        'Practice basketing and handling for race conditions',
        'Enter young bird races to gain experience',
      ],
    },
  ]

  const trainingTips = [
    {
      title: 'Weather Awareness',
      description: 'Never release birds in fog, heavy rain, or strong headwinds. Young birds are especially vulnerable to getting lost in poor conditions.',
      icon: AlertTriangle,
      type: 'warning',
    },
    {
      title: 'Consistent Timing',
      description: 'Train at the same time each day. Pigeons thrive on routine and will anticipate training sessions, making them more responsive.',
      icon: Clock,
      type: 'tip',
    },
    {
      title: 'Food Motivation',
      description: 'Lightly feed birds before training so they are motivated to return quickly for their main meal. Never train birds that are full.',
      icon: Target,
      type: 'tip',
    },
    {
      title: 'Record Keeping',
      description: 'Maintain detailed records of each training toss including distance, time, weather, and individual bird performance.',
      icon: Calendar,
      type: 'tip',
    },
  ]

  const racingSystems = [
    {
      name: 'Widowhood System',
      description: 'Cocks are separated from hens except briefly before races. The motivation to return to their mate creates exceptional homing drive.',
      pros: ['Strong motivation', 'Consistent performance', 'Less wear on birds'],
      cons: ['Requires space for separation', 'Management intensive', 'Not suitable for all birds'],
    },
    {
      name: 'Natural System',
      description: 'Pairs are kept together and race while raising young. Birds race on eggs or youngsters at various stages.',
      pros: ['Simple management', 'Natural behavior', 'Good for beginners'],
      cons: ['Variable performance', 'Timing dependent', 'Harder to control motivation'],
    },
    {
      name: 'Roundabout System',
      description: 'A modification where both cocks and hens race, often at different times. Flexible and adaptable approach.',
      pros: ['Maximizes racing team', 'Flexible scheduling', 'Works with natural behavior'],
      cons: ['Complex timing', 'Requires experience', 'Can stress birds if not managed well'],
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-accent/5 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <Badge className="mb-4">Training Guide</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{t.features.training.title}</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              {t.features.training.description} Learn systematic methods to develop champion racers from young birds to seasoned competitors.
            </p>
          </div>
        </div>
      </section>

      {/* Training Phases */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Young Bird Training Program</h2>
          <p className="text-muted-foreground mb-12 max-w-3xl">
            A structured 6-month program to develop your young birds from squeakers to race-ready competitors. 
            This roadmap follows the proven methods used by successful fanciers worldwide.
          </p>

          <div className="space-y-8">
            {trainingPhases.map((phase, index) => (
              <Card key={index} className="overflow-hidden">
                <CardHeader className="bg-muted/50">
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <phase.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle>{phase.phase}</CardTitle>
                      <CardDescription className="flex items-center gap-2 mt-1">
                        <Timer className="h-4 w-4" />
                        {phase.duration}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <ul className="grid md:grid-cols-2 gap-3">
                    {phase.steps.map((step, stepIndex) => (
                      <li key={stepIndex} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{step}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Training Tips */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Essential Training Tips</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {trainingTips.map((tip, index) => (
              <Card key={index} className={tip.type === 'warning' ? 'border-amber-500/50' : ''}>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className={`h-10 w-10 rounded-lg flex items-center justify-center ${
                      tip.type === 'warning' ? 'bg-amber-500/10' : 'bg-primary/10'
                    }`}>
                      <tip.icon className={`h-5 w-5 ${tip.type === 'warning' ? 'text-amber-500' : 'text-primary'}`} />
                    </div>
                    <CardTitle className="text-lg">{tip.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{tip.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Racing Systems */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Racing Systems</h2>
          <p className="text-muted-foreground mb-8 max-w-3xl">
            Different racing systems offer various approaches to motivating your birds. Choose based on your loft setup, 
            experience level, and personal preference.
          </p>

          <Tabs defaultValue="widowhood" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="widowhood">Widowhood</TabsTrigger>
              <TabsTrigger value="natural">Natural</TabsTrigger>
              <TabsTrigger value="roundabout">Roundabout</TabsTrigger>
            </TabsList>
            {racingSystems.map((system) => (
              <TabsContent key={system.name.toLowerCase().split(' ')[0]} value={system.name.toLowerCase().split(' ')[0]}>
                <Card>
                  <CardHeader>
                    <CardTitle>{system.name}</CardTitle>
                    <CardDescription className="text-base">{system.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="font-semibold text-primary mb-3">Advantages</h4>
                        <ul className="space-y-2">
                          {system.pros.map((pro, i) => (
                            <li key={i} className="flex items-center gap-2 text-muted-foreground">
                              <CheckCircle className="h-4 w-4 text-green-500" />
                              {pro}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-destructive mb-3">Considerations</h4>
                        <ul className="space-y-2">
                          {system.cons.map((con, i) => (
                            <li key={i} className="flex items-center gap-2 text-muted-foreground">
                              <AlertTriangle className="h-4 w-4 text-amber-500" />
                              {con}
                            </li>
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

      {/* Training Schedule */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Sample Weekly Training Schedule</h2>
          <Card>
            <CardContent className="pt-6">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4 font-semibold">Day</th>
                      <th className="text-left py-3 px-4 font-semibold">Activity</th>
                      <th className="text-left py-3 px-4 font-semibold">Notes</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { day: 'Monday', activity: 'Short toss (10-20km)', notes: 'Morning release, good weather' },
                      { day: 'Tuesday', activity: 'Loft flying', notes: 'Open loft 1-2 hours' },
                      { day: 'Wednesday', activity: 'Medium toss (30-50km)', notes: 'Building stamina' },
                      { day: 'Thursday', activity: 'Rest day', notes: 'Light feeding, health check' },
                      { day: 'Friday', activity: 'Club training toss', notes: 'Pre-race preparation' },
                      { day: 'Saturday', activity: 'Race day', notes: 'If scheduled' },
                      { day: 'Sunday', activity: 'Recovery', notes: 'Rest and observe birds' },
                    ].map((row, index) => (
                      <tr key={index} className="border-b last:border-0">
                        <td className="py-3 px-4 font-medium">{row.day}</td>
                        <td className="py-3 px-4 text-muted-foreground">{row.activity}</td>
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
