import { useState } from 'react'
import { Button } from './components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card'
import { Badge } from './components/ui/badge'
import { Alert, AlertDescription } from './components/ui/alert'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-container mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-h1 font-bold text-brand-ink">
            Orange Theme Demo
          </h1>
          <p className="text-lead text-text-dim">
            Showcasing the new orange color scheme with shadcn/ui components
          </p>
        </div>

        {/* Alert */}
        <Alert className="border-line bg-bg-soft">
          <AlertDescription className="text-text">
            🎨 Your project now uses a beautiful orange theme! All components are styled accordingly.
          </AlertDescription>
        </Alert>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="border-card-border shadow-md">
            <CardHeader>
              <CardTitle className="text-brand-ink">Interactive Counter</CardTitle>
              <CardDescription>Test the orange button styling</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button 
                onClick={() => setCount((count) => count + 1)}
                className="w-full"
              >
                Count is {count}
              </Button>
              <Badge variant="secondary" className="bg-accent-2 text-white">
                Orange Badge
              </Badge>
            </CardContent>
          </Card>

          <Card className="border-card-border shadow-md">
            <CardHeader>
              <CardTitle className="text-brand-ink">Color Palette</CardTitle>
              <CardDescription>Orange theme colors</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded bg-brand-ink"></div>
                <span className="text-sm">Brand Ink (Primary)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded bg-accent-1"></div>
                <span className="text-sm">Accent 1</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded bg-accent-2"></div>
                <span className="text-sm">Accent 2</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded bg-bg-soft border border-line"></div>
                <span className="text-sm">Soft Background</span>
              </div>
            </CardContent>
          </Card>

          <Card className="border-card-border shadow-md">
            <CardHeader>
              <CardTitle className="text-brand-ink">Typography</CardTitle>
              <CardDescription>Text hierarchy showcase</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <h2 className="text-h2 text-brand-ink font-semibold">Heading 2</h2>
              <p className="text-text">Regular text content</p>
              <p className="text-text-dim">Dimmed text</p>
              <p className="text-text-muted">Muted text</p>
              <a href="#" className="text-link hover:text-link-hover transition-colors">
                Orange link
              </a>
            </CardContent>
          </Card>
        </div>

        {/* Button Variants */}
        <div className="space-y-4">
          <h2 className="text-h2 text-brand-ink font-semibold">Button Variants</h2>
          <div className="flex flex-wrap gap-4">
            <Button>Primary Button</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="destructive">Destructive</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
