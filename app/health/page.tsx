'use client'

import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Badge } from '@/components/ui/badge'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { useLanguage } from '@/lib/language-context'
import { 
  Heart, AlertTriangle, Shield, Stethoscope, Pill, Bug, 
  Thermometer, Eye, Droplets, Wind, CheckCircle, XCircle
} from 'lucide-react'

export default function HealthPage() {
  const { t } = useLanguage()

  const commonDiseases = [
    {
      name: 'Coccidiosis',
      type: 'Parasitic',
      icon: Bug,
      symptoms: ['Watery droppings', 'Weight loss', 'Reduced appetite', 'Lethargy', 'Poor feather quality'],
      causes: 'Protozoa (Eimeria columbarum, Eimeria labbeanna) affecting intestines',
      treatment: 'Anticoccidial medications (Amprolium, Toltrazuril), improved hygiene',
      prevention: 'Regular cleaning, avoid overcrowding, maintain dry loft conditions',
    },
    {
      name: 'Trichomoniasis (Canker)',
      type: 'Parasitic',
      icon: Bug,
      symptoms: ['Yellow-white lesions in mouth/throat', 'Difficulty swallowing', 'Weight loss', 'Regurgitation', 'Bad breath'],
      causes: 'Trichomonas gallinae protozoan, transmitted through contaminated water or crop milk',
      treatment: 'Metronidazole, Ronidazole, Carnidazole',
      prevention: 'Clean water sources, treat breeding pairs before season, quarantine new birds',
    },
    {
      name: 'Respiratory Infections',
      type: 'Bacterial/Viral',
      icon: Wind,
      symptoms: ['Sneezing', 'Nasal discharge', 'Open-mouth breathing', 'Rattling sounds', 'Reduced flying performance'],
      causes: 'Mycoplasma, Chlamydia, or viral agents; stress and poor ventilation',
      treatment: 'Antibiotics (Tylosin, Doxycycline) based on diagnosis',
      prevention: 'Good ventilation, reduce dust, avoid overcrowding, minimize stress',
    },
    {
      name: 'Salmonellosis (Paratyphoid)',
      type: 'Bacterial',
      icon: Thermometer,
      symptoms: ['Joint swelling', 'Wing drooping', 'Twisted neck', 'Green droppings', 'Weight loss'],
      causes: 'Salmonella typhimurium bacteria, spread through droppings, contaminated food/water',
      treatment: 'Antibiotics (Enrofloxacin, Trimethoprim-sulfa), isolation of affected birds',
      prevention: 'Strict hygiene, rodent control, vaccination in endemic areas',
    },
    {
      name: 'Pigeon Pox',
      type: 'Viral',
      icon: Eye,
      symptoms: ['Wart-like growths on skin', 'Lesions around eyes/beak', 'Scab formation', 'Possible internal lesions'],
      causes: 'Avipoxvirus, transmitted by mosquitoes and direct contact',
      treatment: 'Supportive care, remove scabs gently, antiseptic application',
      prevention: 'Vaccination, mosquito control, quarantine infected birds',
    },
    {
      name: 'Ornithosis (Chlamydiosis)',
      type: 'Bacterial',
      icon: Stethoscope,
      symptoms: ['Eye inflammation', 'Respiratory distress', 'Nasal discharge', 'Weight loss', 'Reduced fertility'],
      causes: 'Chlamydia psittaci bacteria (zoonotic - can affect humans)',
      treatment: 'Doxycycline for 45 days minimum',
      prevention: 'Quarantine new birds, regular testing, good hygiene practices',
    },
  ]

  const healthChecklist = [
    { item: 'Eyes bright and clear', icon: Eye },
    { item: 'Nostrils clean, no discharge', icon: Droplets },
    { item: 'Throat clear, no lesions', icon: Wind },
    { item: 'Keel bone well-fleshed', icon: Heart },
    { item: 'Feathers smooth and clean', icon: Shield },
    { item: 'Droppings firm and formed', icon: CheckCircle },
    { item: 'Active and alert behavior', icon: Stethoscope },
    { item: 'Wings held properly', icon: CheckCircle },
  ]

  const preventionPractices = [
    {
      title: 'Loft Hygiene',
      description: 'Clean loft floor daily, disinfect perches weekly, and deep clean monthly. Use appropriate disinfectants safe for birds.',
      tips: ['Remove droppings daily', 'Fresh bedding regularly', 'Disinfect water containers', 'Control dust levels'],
    },
    {
      title: 'Quarantine Protocol',
      description: 'Isolate new birds for minimum 30 days before introducing to the main loft. Monitor for any signs of disease.',
      tips: ['Separate feeding equipment', 'Handle quarantine birds last', 'Test for common diseases', 'Observe closely for 4 weeks'],
    },
    {
      title: 'Vaccination Schedule',
      description: 'Protect your flock with appropriate vaccinations based on your region and disease prevalence.',
      tips: ['PMV-1 vaccine annually', 'Pigeon pox if endemic', 'Salmonella in problem areas', 'Consult avian vet for schedule'],
    },
    {
      title: 'Nutrition & Supplements',
      description: 'Balanced diet with appropriate vitamins, minerals, and probiotics supports immune function.',
      tips: ['Quality racing mix', 'Grit and minerals always available', 'Probiotics after antibiotics', 'Electrolytes during racing'],
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-accent/5 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <Badge className="mb-4">Health Guide</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{t.features.health.title}</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              {t.features.health.description} Learn to identify, treat, and prevent common pigeon diseases to keep your racing team in peak condition.
            </p>
          </div>
        </div>
      </section>

      {/* Health Checklist */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Daily Health Check</h2>
          <p className="text-muted-foreground mb-8 max-w-3xl">
            Perform these checks daily to catch health issues early. A healthy pigeon should display all these characteristics.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {healthChecklist.map((check, index) => (
              <Card key={index} className="bg-muted/30">
                <CardContent className="flex items-center gap-3 p-4">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <check.icon className="h-5 w-5 text-primary" />
                  </div>
                  <span className="font-medium">{check.item}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Common Diseases */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Common Diseases & Conditions</h2>
          <p className="text-muted-foreground mb-8 max-w-3xl">
            Racing and high-flying pigeons are particularly vulnerable due to exhaustion from frequent flights, 
            which weakens their immune systems. Early identification is key to successful treatment.
          </p>

          <Accordion type="single" collapsible className="space-y-4">
            {commonDiseases.map((disease, index) => (
              <AccordionItem key={index} value={`disease-${index}`} className="bg-card border rounded-lg px-4">
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-center gap-4 text-left">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <disease.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">{disease.name}</h3>
                      <Badge variant="secondary" className="mt-1">{disease.type}</Badge>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-4 pb-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-2 flex items-center gap-2">
                        <AlertTriangle className="h-4 w-4 text-amber-500" />
                        Symptoms
                      </h4>
                      <ul className="space-y-1">
                        {disease.symptoms.map((symptom, i) => (
                          <li key={i} className="text-muted-foreground flex items-center gap-2">
                            <div className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                            {symptom}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 flex items-center gap-2">
                        <Stethoscope className="h-4 w-4 text-primary" />
                        Cause
                      </h4>
                      <p className="text-muted-foreground mb-4">{disease.causes}</p>
                      
                      <h4 className="font-semibold mb-2 flex items-center gap-2">
                        <Pill className="h-4 w-4 text-green-500" />
                        Treatment
                      </h4>
                      <p className="text-muted-foreground mb-4">{disease.treatment}</p>
                      
                      <h4 className="font-semibold mb-2 flex items-center gap-2">
                        <Shield className="h-4 w-4 text-primary" />
                        Prevention
                      </h4>
                      <p className="text-muted-foreground">{disease.prevention}</p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Prevention Practices */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Disease Prevention Best Practices</h2>
          <p className="text-muted-foreground mb-8 max-w-3xl">
            Prevention is always better than cure. Following these practices will significantly reduce disease risk in your loft.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            {preventionPractices.map((practice, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-xl">{practice.title}</CardTitle>
                  <CardDescription>{practice.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {practice.tips.map((tip, i) => (
                      <li key={i} className="flex items-center gap-2 text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
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

      {/* Emergency Signs */}
      <section className="py-16 bg-destructive/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <AlertTriangle className="h-12 w-12 mx-auto mb-4 text-destructive" />
            <h2 className="text-3xl font-bold mb-4">Emergency Warning Signs</h2>
            <p className="text-muted-foreground mb-8">
              If you observe any of these signs, isolate the bird immediately and consult an avian veterinarian.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 text-left">
              {[
                'Sudden death in the loft',
                'Multiple birds affected simultaneously',
                'Severe respiratory distress',
                'Neurological symptoms (twisted neck, paralysis)',
                'Bloody droppings',
                'Complete loss of appetite across flock',
                'Rapid weight loss',
                'Inability to fly or stand',
              ].map((sign, index) => (
                <div key={index} className="flex items-center gap-3 bg-card p-3 rounded-lg border border-destructive/20">
                  <XCircle className="h-5 w-5 text-destructive flex-shrink-0" />
                  <span className="text-sm">{sign}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
