import { Link } from 'react-router-dom'

import BlurBackground from '@/components/mirage/blur-background'

export default function SidebarHeader() {
  return (
    <Link to="/" className="shrink-0   py-2 ">
      <BlurBackground
        sides={['top-right', 'bottom-left']}
        className="bg-card rounded-2xl dark:dark"
      >
        <div className="border-input flex grow  h-full  flex-col items-center justify-center rounded-2xl border px-6 py-2">
          {/* <Logo /> */}
          Smart Gov
        </div>
      </BlurBackground>
    </Link>
  )
}
