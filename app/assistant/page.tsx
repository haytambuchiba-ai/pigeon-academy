'use client'

import { useState, useRef, useEffect } from 'react'
import { useChat } from '@ai-sdk/react'
import { DefaultChatTransport } from 'ai'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'
import { ScrollArea } from '@/components/ui/scroll-area'
import { useLanguage } from '@/lib/language-context'
import { 
  Send, Bot, User, Sparkles, Loader2, MessageSquare,
  Bird, Stethoscope, Dna, Home
} from 'lucide-react'
import { cn } from '@/lib/utils'

export default function AssistantPage() {
  const { t } = useLanguage()
  const [input, setInput] = useState('')
  const scrollRef = useRef<HTMLDivElement>(null)
  
  const { messages, sendMessage, status } = useChat({
    transport: new DefaultChatTransport({ api: '/api/chat' }),
  })

  const isLoading = status === 'streaming' || status === 'submitted'

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [messages])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim() || isLoading) return
    sendMessage({ text: input })
    setInput('')
  }

  const handleExampleClick = (example: string) => {
    if (isLoading) return
    sendMessage({ text: example })
  }

  const expertiseAreas = [
    { icon: Bird, label: 'Training & Racing', color: 'text-primary' },
    { icon: Stethoscope, label: 'Health & Disease', color: 'text-green-500' },
    { icon: Dna, label: 'Breeding & Genetics', color: 'text-amber-500' },
    { icon: Home, label: 'Loft Design', color: 'text-blue-500' },
  ]

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />

      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <Badge className="mb-4">AI Expert</Badge>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">{t.assistant.title}</h1>
            <p className="text-muted-foreground">{t.assistant.subtitle}</p>
            
            {/* Expertise badges */}
            <div className="flex flex-wrap justify-center gap-2 mt-6">
              {expertiseAreas.map((area, index) => (
                <div key={index} className="flex items-center gap-1.5 px-3 py-1.5 bg-muted rounded-full text-sm">
                  <area.icon className={cn('h-4 w-4', area.color)} />
                  <span className="text-muted-foreground">{area.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Chat Container */}
          <Card className="min-h-[500px] flex flex-col">
            <CardHeader className="border-b pb-4">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Bot className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-lg">Pigeon Expert AI</CardTitle>
                  <CardDescription>Powered by advanced AI with extensive pigeon knowledge</CardDescription>
                </div>
              </div>
            </CardHeader>

            <CardContent className="flex-1 flex flex-col p-0">
              {/* Messages */}
              <ScrollArea className="flex-1 p-4" ref={scrollRef}>
                {messages.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center py-12">
                    <Sparkles className="h-12 w-12 text-primary/50 mb-4" />
                    <h3 className="text-lg font-medium mb-2">Start a Conversation</h3>
                    <p className="text-muted-foreground text-center mb-8 max-w-md">
                      Ask any question about homing pigeon training, health, breeding, or loft management.
                    </p>
                    
                    {/* Example Questions */}
                    <div className="w-full max-w-lg space-y-2">
                      <p className="text-sm font-medium text-muted-foreground mb-3">Try asking:</p>
                      {t.assistant.examples.map((example, index) => (
                        <button
                          key={index}
                          onClick={() => handleExampleClick(example)}
                          disabled={isLoading}
                          className="w-full text-left p-3 rounded-lg border border-border hover:bg-muted/50 transition-colors text-sm text-muted-foreground hover:text-foreground disabled:opacity-50"
                        >
                          <MessageSquare className="h-4 w-4 inline-block mr-2 text-primary" />
                          {example}
                        </button>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="space-y-6">
                    {messages.map((message) => (
                      <div
                        key={message.id}
                        className={cn(
                          'flex gap-3',
                          message.role === 'user' ? 'justify-end' : 'justify-start'
                        )}
                      >
                        {message.role === 'assistant' && (
                          <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <Bot className="h-4 w-4 text-primary" />
                          </div>
                        )}
                        <div
                          className={cn(
                            'max-w-[80%] rounded-2xl px-4 py-3',
                            message.role === 'user'
                              ? 'bg-primary text-primary-foreground'
                              : 'bg-muted'
                          )}
                        >
                          <div className="whitespace-pre-wrap text-sm leading-relaxed">
                            {message.parts.map((part, index) => {
                              if (part.type === 'text') {
                                return <span key={index}>{part.text}</span>
                              }
                              return null
                            })}
                          </div>
                        </div>
                        {message.role === 'user' && (
                          <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                            <User className="h-4 w-4 text-primary-foreground" />
                          </div>
                        )}
                      </div>
                    ))}
                    
                    {isLoading && (
                      <div className="flex gap-3 justify-start">
                        <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                          <Bot className="h-4 w-4 text-primary" />
                        </div>
                        <div className="bg-muted rounded-2xl px-4 py-3">
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Loader2 className="h-4 w-4 animate-spin" />
                            {t.assistant.thinking}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </ScrollArea>

              {/* Input */}
              <div className="p-4 border-t">
                <form onSubmit={handleSubmit} className="flex gap-2">
                  <Textarea
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder={t.assistant.placeholder}
                    disabled={isLoading}
                    className="min-h-[48px] max-h-[200px] resize-none"
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' && !e.shiftKey) {
                        e.preventDefault()
                        handleSubmit(e)
                      }
                    }}
                  />
                  <Button 
                    type="submit" 
                    size="icon" 
                    className="h-12 w-12 flex-shrink-0"
                    disabled={!input.trim() || isLoading}
                  >
                    {isLoading ? (
                      <Loader2 className="h-5 w-5 animate-spin" />
                    ) : (
                      <Send className="h-5 w-5" />
                    )}
                    <span className="sr-only">{t.assistant.send}</span>
                  </Button>
                </form>
                <p className="text-xs text-muted-foreground mt-2 text-center">
                  Press Enter to send, Shift+Enter for new line
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Tips */}
          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground">
              The AI assistant can help with training schedules, disease diagnosis, breeding advice, loft design, and more. 
              For serious health issues, always consult a qualified avian veterinarian.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
