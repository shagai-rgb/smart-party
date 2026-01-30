interface TProps {
  title?: string
  desc?: string
  logo?: string
  bgImage?: string
  gradientColor: string
}

export const BannerSection = (props: TProps) => {
  const { title, desc, bgImage, logo, gradientColor } = props

  return (
    <section className="relative h-[24rem] w-full overflow-hidden">
      <img
        src={bgImage}
        alt="Banner background"
        className="absolute inset-0 h-full w-full object-cover bg-"
      />

      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(to right, ${gradientColor}A0, ${gradientColor}B3, ${gradientColor}33)`
        }}
      />

      <div className="relative z-10 flex h-full items-center justify-center">
        <div className="px-10">
          <div className="space-y-6 max-w-4xl min-w-4xl bg-black/70 text-white px-6 py-10 flex flex-col items-center">
            <img
              src={logo}
              alt="State Emblem"
              className="h-30 w-auto drop-shadow-md"
            />

            <h1 className="text-2xl text-center uppercase tracking-tight">
              {title}
            </h1>

            <p className="text-justify line-clamp-2 text-sm leading-tight">
              {desc}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
