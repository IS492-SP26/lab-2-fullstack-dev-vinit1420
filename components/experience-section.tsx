import { Badge } from "@/components/ui/badge"
import { MapPin } from "lucide-react"

interface Experience {
  company: string
  title: string
  dates: string
  location: string
  bullets: string[]
  tags: string[]
}

const experiences: Experience[] = [
  {
    company: "Skulicity",
    title: "Data Engineer Intern",
    dates: "Jun 2025 - Present",
    location: "Remote",
    bullets: [
      "Built Spark-native 14-day forecasting pipeline in Microsoft Fabric, triggered 3x weekly via Azure Data Factory for 200K+ SKUs",
      "Created Plotly model comparison visualizations across TimeGPT variants, lag models, and ensembles",
      "Improved scalability 10x (4 hours per client to 4 hours for 10+ clients)",
    ],
    tags: [
      "PySpark",
      "Microsoft Fabric",
      "Azure Data Factory",
      "Plotly",
      "TimeGPT",
    ],
  },
  {
    company: "Cognizant",
    title: "Programmer Analyst",
    dates: "Jan 2022 - Jul 2024",
    location: "Hyderabad",
    bullets: [
      "Led SAP Process Integration across 100+ interfaces in SAP NetWeaver",
      "Built 20+ integration flows, created Tableau performance dashboards reducing resolution time 30%",
      "Root cause analysis to reduce recurring issues by 25%",
    ],
    tags: ["SAP NetWeaver", "Tableau", "SAP PI/PO", "SQL", "ABAP"],
  },
  {
    company: "Paramatrix",
    title: "Data Science Intern",
    dates: "Feb 2021 - Aug 2021",
    location: "Mumbai",
    bullets: [
      "Automated invoice data extraction (Tesseract OCR + regex), 92% accuracy for 1,000+ documents",
      "Reduced processing time 40% and scaled throughput 500+ invoices/hour",
    ],
    tags: ["Python", "Tesseract OCR", "Regex", "Pandas", "Automation"],
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="bg-muted/40 py-20 lg:py-28">
      <div className="mx-auto max-w-[1200px] px-6">
        <h2 className="text-center text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          Experience
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-muted-foreground">
          Where I have worked and what I have built.
        </p>

        <div className="relative mt-14">
          {/* Timeline line */}
          <div className="absolute top-0 bottom-0 left-4 hidden w-px bg-border md:left-1/2 md:block" />

          <div className="flex flex-col gap-12">
            {experiences.map((exp, i) => (
              <div
                key={exp.company}
                className={`relative flex flex-col gap-6 md:flex-row ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Dot */}
                <div className="absolute left-4 top-2 hidden size-3 -translate-x-1/2 rounded-full border-2 border-primary bg-background md:left-1/2 md:block" />

                {/* Spacer */}
                <div className="hidden flex-1 md:block" />

                {/* Card */}
                <div className="flex-1 rounded-xl border bg-card p-6 shadow-sm transition-shadow hover:shadow-md">
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">
                        {exp.company}
                      </h3>
                      <p className="text-sm font-medium text-primary">
                        {exp.title}
                      </p>
                    </div>
                    <div className="text-right text-sm text-muted-foreground">
                      <p>{exp.dates}</p>
                      <p className="flex items-center justify-end gap-1">
                        <MapPin className="size-3" />
                        {exp.location}
                      </p>
                    </div>
                  </div>

                  <ul className="mt-4 space-y-2">
                    {exp.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="flex gap-2 text-sm leading-relaxed text-muted-foreground"
                      >
                        <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                        {bullet}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
