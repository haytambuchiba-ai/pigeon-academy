'use client'

import Link from 'next/link'
import { Bird, Mail, MapPin, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useLanguage } from '@/lib/language-context'

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Bird className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold">Pigeon Academy</span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {t.footer.about}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">{t.footer.quickLinks}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/training" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                  {t.nav.training}
                </Link>
              </li>
              <li>
                <Link href="/health" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                  {t.nav.health}
                </Link>
              </li>
              <li>
                <Link href="/breeding" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                  {t.nav.breeding}
                </Link>
              </li>
              <li>
                <Link href="/loft" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                  {t.nav.loft}
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold mb-4">{t.footer.resources}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/assistant" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                  {t.nav.assistant}
                </Link>
              </li>
              <li>
                <Link href="/articles" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                  {t.nav.articles}
                </Link>
              </li>
              <li>
                <a 
                  href="https://www.pipa.be" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                >
                  PIPA
                </a>
              </li>
              <li>
                <a 
                  href="https://www.rpra.org" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                >
                  RPRA
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold mb-4">{t.footer.newsletter}</h3>
            <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
              <Input 
                type="email" 
                placeholder={t.footer.emailPlaceholder}
                className="bg-background"
              />
              <Button type="submit" className="w-full">
                {t.footer.subscribe}
              </Button>
            </form>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            &copy; {new Date().getFullYear()} Pigeon Academy. {t.footer.rights}
          </p>
          <div className="flex items-center gap-4 text-muted-foreground">
            <a 
              href="https://www.pipa.be" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors text-sm"
            >
              PIPA Partner
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
