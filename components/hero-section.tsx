import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowDown, Mail } from "lucide-react"

export function HeroSection() {
  return (
    <section
      className="relative flex min-h-screen items-center overflow-hidden pt-16"
      style={{
        background:
          "linear-gradient(135deg, var(--hero-start), var(--hero-mid), var(--hero-end))",
      }}
    >
      {/* Subtle grid pattern overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.4) 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative mx-auto flex w-full max-w-[1200px] flex-col-reverse items-center gap-10 px-6 py-20 md:flex-row md:gap-16 lg:py-28">
        {/* Text */}
        <div className="flex-1 text-center md:text-left">
          <p className="mb-3 text-sm font-semibold tracking-wider text-white/80 uppercase">
            Welcome to my portfolio
          </p>
          <h1 className="text-balance text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">
            {"Hi, I'm Vinit Agrharkar"}
          </h1>
          <p className="mt-3 text-lg font-medium text-white/90 md:text-xl">
            Data Engineer | MS in Information Management @ UIUC
          </p>
          <p className="mt-5 max-w-lg text-pretty leading-relaxed text-white/80 md:text-lg">
            I build scalable data pipelines and analytics systems across cloud
            platforms. Recently, I have worked on Spark-native forecasting
            pipelines, model evaluation tools, and KPI dashboards.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 md:justify-start">
            <Button
              size="lg"
              className="bg-white text-primary shadow-lg hover:bg-white/90"
              asChild
            >
              <a href="#projects">
                View My Projects
                <ArrowDown className="size-4" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white"
              asChild
            >
              <a href="#contact">
                <Mail className="size-4" />
                Get In Touch
              </a>
            </Button>
          </div>
        </div>

        {/* Photo */}
        <div className="flex shrink-0 items-center justify-center">
          <div className="relative size-56 overflow-hidden rounded-2xl border-4 border-white/30 shadow-2xl md:size-72 lg:size-80">
            <Image
              src="/images/hero-portrait.jpg"
              alt="Portrait of Vinit Agrharkar"
              fill
              className="object-cover object-top"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
