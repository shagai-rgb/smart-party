import { Link } from 'react-router-dom'

import { dx } from '@/lib/dx'

import BlurBackground from '@/components/mirage/blur-background'
import { Button } from '@/components/ui/button'

export default function NotFoundPage() {
  return (
    <BlurBackground
      sides={['top-right', 'bottom-left']}
      className="flex h-full w-full grow flex-col p-2"
      size={50}
    >
      <div className="flex grow flex-col items-center justify-center gap-3">
        <span className={dx('fluid-paragraph-01', 'text-muted-foreground')}>
          Page not found
        </span>
        <div className="from-brand-1 via-brand-2 to-brand-3 bg-gradient-to-r bg-clip-text dark:brightness-150">
          <span className={dx('fluid-display-04', 'text-transparent')}>
            404
          </span>
        </div>
        <Button asChild variant="link">
          <Link to="/">Go to home</Link>
        </Button>
      </div>
    </BlurBackground>
  )
}
