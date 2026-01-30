import BlurBackground from './blur-background'
import Spinner from './spinner'

export default function LaodingScreen() {
  return (
    <BlurBackground
      sides={['top-right', 'bottom-left']}
      className="flex h-full w-full grow flex-col justify-center items-center px-2 py-8"
      size={128}
    >
      <Spinner />
    </BlurBackground>
  )
}
