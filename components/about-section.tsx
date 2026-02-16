import {
  TrendingUp,
  Zap,
  BarChart3,
  Brain,
  GraduationCap,
  Briefcase,
} from "lucide-react"

const interests = [
  { icon: TrendingUp, label: "Forecasting" },
  { icon: Zap, label: "Building with Spark" },
  { icon: BarChart3, label: "Dashboards & Storytelling" },
  { icon: Brain, label: "System Design & Optimization" },
]

const quickFacts = [
  {
    icon: GraduationCap,
    label: "UIUC MSIM",
    detail: "Aug 2024 - Present",
  },
  {
    icon: Briefcase,
    label: "Programmer Analyst at Cognizant",
    detail: "2022 - 2024",
  },
  {
    icon: Briefcase,
    label: "Data Engineer Intern at Skulicity",
    detail: "Jun 2025 - Present",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="py-20 lg:py-28">
      <div className="mx-auto max-w-[1200px] px-6">
        <h2 className="text-center text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          About Me
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-muted-foreground">
          A quick overview of who I am and what drives me.
        </p>

        <div className="mt-14 grid gap-12 md:grid-cols-2">
          {/* Left: bio */}
          <div className="space-y-5 leading-relaxed text-muted-foreground">
            <p>
              {
                "I'm pursuing a Master's in Information Management at the University of Illinois at Urbana-Champaign (GPA 3.89), with a deep focus on data engineering, analytics engineering, and building products that turn raw data into decisions."
              }
            </p>
            <p>
              My interests span demand forecasting, real-time analytics, and
              scalable pipeline architecture. I enjoy working at the
              intersection of data infrastructure and applied ML, whether
              building PySpark pipelines or interactive dashboards.
            </p>
            <p>
              Before UIUC I spent two years at Cognizant as a Programmer
              Analyst, where I led SAP integrations across 100+ interfaces and
              built dashboards that cut incident resolution time by 30%.
            </p>
          </div>

          {/* Right: interests */}
          <div>
            <h3 className="mb-5 text-lg font-semibold text-foreground">
              What I enjoy
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {interests.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-3 rounded-xl border bg-card p-4 transition-shadow hover:shadow-md"
                >
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <item.icon className="size-5" />
                  </div>
                  <span className="text-sm font-medium text-foreground">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick facts row */}
        <div className="mt-14 grid gap-4 sm:grid-cols-3">
          {quickFacts.map((fact) => (
            <div
              key={fact.label}
              className="flex items-center gap-4 rounded-xl border bg-card p-5"
            >
              <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <fact.icon className="size-5" />
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">
                  {fact.label}
                </p>
                <p className="text-xs text-muted-foreground">{fact.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
